// export const myApi = new sst.aws.Function("MyApi", {
//   url: true,
//   handler: "packages/functions/src/api.handler"
// });

export const myApi = new sst.aws.ApiGatewayV2("MyApi");

myApi.route("GET /notes", {
  handler: "packages/functions/src/api.handler",
  runtime: "nodejs20.x",
});
