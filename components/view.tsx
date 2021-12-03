import React, { useState } from "react";

import { loadText } from "~/lib/dataAdmin.ts";

export default function View({ size = 75 }: { size?: number }) {
  const [text, setText] = useState("test text");
  const [loadFilePath, setLoadFilePath] = useState("");

  async function loadTextFromLib() {
    console.log(loadFilePath);
    const retText = await loadText(loadFilePath);
    setText(retText);
  }

  return (
    <div className="daily frame">
      <text>{text}</text>
      <div>
        <input onChange={(e) => setLoadFilePath(e.target.value)}></input>
        <button onClick={loadTextFromLib}>読み込み</button>
      </div>
    </div>
  );
}
