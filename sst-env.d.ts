/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */

declare module "sst" {
  export interface Resource {
    "MyApi": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "MyBucket": {
      "name": string
      "type": "sst.aws.Bucket"
    }
    "MyWeb": {
      "type": "sst.aws.StaticSite"
      "url": string
    }
  }
}
/// <reference path="sst-env.d.ts" />

import "sst"
export {}