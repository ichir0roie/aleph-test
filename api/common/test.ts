import type { APIHandler } from "aleph/types.d.ts";

export const handler: APIHandler = ({ response }) => {
  console.log(response);

  const testVal = "test message";
  response.json(testVal);
};
