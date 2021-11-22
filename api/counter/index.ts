import type { APIHandler } from "aleph/types.d.ts";

export const handler: APIHandler = ({ response }) => {
  const count = parseInt(localStorage.getItem("count") || "0");
  // const count = 100;
  response.json({ count });
};
