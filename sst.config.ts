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

    new sst.aws.Router("MyRouter", {
      routes: {
        "/api/*": apiGateway.myApi.url,
      }
    });

  },
});
