import React, { useState } from "react";

import { saveText } from "~/lib/dataAdmin.ts";

export default function Input({ size = 75 }: { size?: number }) {
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  // function getTestResp() {
  //   fetch("/api/dataAdmin/test")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setText1(data);
  //       console.log(data);
  //     })
  //     .catch((e) => console.error(e));
  // }

  function sendText() {
    saveText(text1 + ".txt", text2);
  }

  function addTextAndSend(text: string, setText: Function) {
    setText(text);
  }

  return (
    <div className="daily frame">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      >
      </input>
      <input
        className="item"
        value={text1}
        onChange={(e) => addTextAndSend(e.target.value, setText1)}
      >
      </input>
      <textarea
        className="item"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
      >
      </textarea>

      <button onClick={sendText}>保存</button>
    </div>
  );
}
