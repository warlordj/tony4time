/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "tpmy",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const apiGateway = await import("./infra/api");

    new sst.aws.StaticSite("MyWeb", {
      path: "./packages/frontend/dist",
      indexPage: "index.html",
      errorPage: "index.html",
    });

    new sst.aws.Router("", {
      routes: {
        "/api/*": apiGateway.myApi.url,
      }
    });

  },
});
