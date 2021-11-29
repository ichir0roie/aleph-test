import type { APIHandler } from "aleph/types.d.ts";

//こいつはサーバ側で実行される。
export const handler: APIHandler = async ({ response, request, data }) => {
  console.log("where is this?");
};
