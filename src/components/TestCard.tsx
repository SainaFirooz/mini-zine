"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";

type Props = {
  cardName: string;
  style?: React.CSSProperties;
  rotateImage?: boolean;
  hideButton?: boolean;
};

interface TextBlock {
  id: string;
  content: string;
  top: number;
  left: number;
}

function TestCard({ cardName, style, rotateImage, hideButton }: Props) {
  const [image, setImage] = useState<string | null>(null);
  const [textBlocks, setTextBlocks] = useState<TextBlock[]>([]);
  const selectedBlock = useRef<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  


    function onChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  }


  function addTextBlock() {
    const newTextBlock: TextBlock = {
      id: Math.random().toString(36).slice(2, 9),
      content: "New Text",
      top: 50,
      left: 50,
    };
    setTextBlocks((prev) => [...prev, newTextBlock]);
  }

  function handleMouseDown(e: React.MouseEvent, id: string) {
    selectedBlock.current = id;
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!selectedBlock.current || !containerRef.current) return;

    const containerBounds = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - containerBounds.left;
    const mouseY = e.clientY - containerBounds.top;

    setTextBlocks((prev) =>
      prev.map((block) =>
        block.id === selectedBlock.current
          ? {
              ...block,
              top: mouseY,
              left: mouseX,
            }
          : block
      )
    );
  }

  async function handleDeleteImage() {
    if (!image) return;
    setImage(null);
  }

  function handleMouseUp() {
    selectedBlock.current = null;
  }

  return (
    <div
      ref={containerRef}
      className="relative bg-cyan-400 w-60 h-96 rounded overflow-hidden	"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="relative flex items-center justify-center h-full text-center border border-solid border-black">
        <h1 className="" style={style}>
          {cardName}
        </h1>

        {image && (
          <Image
            src={image}
            alt="Uploaded Image"
            layout="fill"
            objectFit="cover"
            style={rotateImage ? { transform: "rotate(3.142rad)" } : {}}
          />
        )}
      </div>

      <button
        onClick={addTextBlock}
        className="absolute top-2 left-2 z-10 bg-white bg-opacity-75 p-1 rounded text-xs"
      >
        Add Text
      </button>

      {textBlocks.map((block) => (
        <div
          key={block.id}
          className="absolute cursor-move p-1 rounded text-lg font-bold"
          style={{
            top: `${block.top}px`,
            left: `${block.left}px`,
          }}
          onMouseDown={(e) => handleMouseDown(e, block.id)}
        >
          <input
            type="text"
            value={block.content}
            onChange={(e) =>
              setTextBlocks((prev) =>
                prev.map((b) =>
                  b.id === block.id ? { ...b, content: e.target.value } : b
                )
              )
            }
            className="bg-transparent outline-none"
          />
        </div>
      ))}

     

      {image ? null : (
        <input
          type="file"
          accept="image/*"
          onChange={onChangeImage}
          className="absolute bottom-2 left-2 bg-white bg-opacity-75 p-1 rounded text-xs"
        />
      )}
    

      {image && (
        <button
          onClick={handleDeleteImage}
          className="absolute top-2 right-2  bg-white bg-opacity-75 p-1 rounded text-xs"
        >
          Delete Image
        </button>
      )}
    </div>
  );
}

export default TestCard;
