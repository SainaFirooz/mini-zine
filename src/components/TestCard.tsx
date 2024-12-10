"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

function TestCard({}: Props) {
  const [text, setText] = useState<String>("");
  const [image, setImage] = useState();

  function onChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  function onChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files);
  }

  return (
    <div className="bg-cyan-400 w-60 h-96">
      <input type="file" accept="image/*" onChange={(e) => onChangeImage(e)} />
      <input
        type="text"
        onChange={(e) => onChangeText(e)}
        placeholder="Write something here..."
      />
      <p>{text}</p>
      <Image src={""} alt={"IMAGE"} />
    </div>
  );
}

export default TestCard;
