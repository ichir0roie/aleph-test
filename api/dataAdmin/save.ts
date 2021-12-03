import type { APIHandler } from "aleph/types.d.ts";
import { ensureFileSync } from "https://deno.land/std@0.78.0/fs/mod.ts";

export const handler: APIHandler = async ({ response, request, data }) => {
  const jsonData = await request.json();
  console.log(jsonData);

  const filePath: string = "data/" + jsonData.filePath;
  const textData: string = jsonData.textData + "\r\n";

  ensureFileSync(filePath);

  await Deno.writeTextFile(filePath, textData, { append: true });
};
