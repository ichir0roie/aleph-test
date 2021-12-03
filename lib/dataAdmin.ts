import { useCallback, useEffect, useState } from "react";

export function saveText(filePath: string, textData: string) {
  const jsonData = {
    filePath: filePath,
    textData: textData,
  };

  fetch("/api/dataAdmin/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });
}

export async function loadText(filePath: string) {
  const jsonData = {
    filePath: filePath,
  };

  var retText = filePath;

  const response = await fetch("/api/dataAdmin/load", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });

  const getJson = await response.json();

  return getJson.textData;
}
