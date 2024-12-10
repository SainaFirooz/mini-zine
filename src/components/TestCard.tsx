"use client";
import React, { useState } from "react";

type Props = {};

function TestCard({}: Props) {
  const [text, setText] = useState<String>("");

  function onChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <div className="bg-cyan-400 w-60 h-96">
      <input type="file" accept="image/*" />
      <input
        type="text"
        onChange={(e) => onChangeText(e)}
        placeholder="Write something here..."
      />
      <p>{text}</p>
    </div>
  );
}

export default TestCard;
