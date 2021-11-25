import React from "react";

export default function input({ size = 75 }: { size?: number }) {
  var date = new Date().toISOString().substr(0, 10);
  var text = "";
  return (
    <div className="daily frame">
      <input type="date" value={date}></input>
      <input className="item" value={text}></input>
      <textarea className="item"></textarea>
    </div>
  );
}
