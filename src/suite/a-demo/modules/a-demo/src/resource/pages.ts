export * as NSMotherPageCounter2 from '../page/counter2/mother.js';
export * as NSMotherPageCounter from '../page/counter/mother.js';
// import { TypePageParamsQuery } from "@cabloy/front";
declare module '@cabloy/front' {
  export interface IPagePathRecord {}
  export interface IPageNameRecord {
    // 'a-demo:page-name': TypePageParamsQuery<NSMotherPagePageName.QueryInput, NSMotherPagePageName.ParamsInput>;
  }
}

export const pagePathSchemas = {
  '/a/demo/counter': {},
  '/a/demo/counter2': {},
};

export const pageNameSchemas = {
  // 'a-demo:page-name': {
  //   params: NSMotherPagePageName.ParamsSchema,
  //   query: NSMotherPagePageName.QuerySchema,
  // },
};
