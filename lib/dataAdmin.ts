import { useCallback, useEffect, useState } from "react";

export function saveText(filePath: string, textData: string) {
  const jsonData = {
    filePath: filePath,
    textData: textData,
  };

  fetch("/api/saveDaily/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });
}
