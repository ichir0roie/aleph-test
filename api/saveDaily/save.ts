import type { APIHandler } from "aleph/types.d.ts";

export const handler: APIHandler = async ({ response, request, data }) => {
  const text = await request.text();
  console.log(text);

  await Deno.writeTextFile("testSave.txt", text);
};
