export const myApi = new sst.aws.ApiGatewayV2("MyApi");

myApi.route("GET /", {
  handler: "packages/functions/src/api.handler",
  runtime: "nodejs20.x",
});
