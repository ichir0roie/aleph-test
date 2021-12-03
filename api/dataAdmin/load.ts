import type { APIHandler } from "aleph/types.d.ts";
import { ensureFileSync } from "https://deno.land/std@0.78.0/fs/mod.ts";

export const handler: APIHandler = async ({ response, request, data }) => {
  const jsonData = await request.json();

  const filePath = "data/" + jsonData.filePath + ".txt";

  const readText = Deno.readTextFileSync(filePath);

  response.json({ textData: readText });
};
