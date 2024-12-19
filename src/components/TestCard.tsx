"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { ChromePicker } from "react-color";
import { IoColorPaletteOutline } from "react-icons/io5";

type Props = {
  cardName: string;
  style?: React.CSSProperties;
  rotateImage?: boolean;
  isHidden: boolean;
};

interface TextBlock {
  id: string;
  content: string;
  top: number;
  left: number;
  color: string;
}

function TestCard({ cardName, style, rotateImage, isHidden }: Props) {
  const [image, setImage] = useState<string | null>(null);
  const [textBlocks, setTextBlocks] = useState<TextBlock[]>([]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const selectedBlock = useRef<string | null>(null);

  const dragOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

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
      color: "#000000",
    };
    setTextBlocks((prev) => [...prev, newTextBlock]);
    setSelectedBlockId(newTextBlock.id);
    setSelectedBlockId(null);
  }

  function handleMouseDown(e: React.MouseEvent, id: string) {
    if (!containerRef.current) return;

    selectedBlock.current = id;
    setSelectedBlockId(id);

    const containerBounds = containerRef.current.getBoundingClientRect();
    const block = textBlocks.find((b) => b.id === id);
    if (!block) return;

    dragOffset.current = {
      x: e.clientX - containerBounds.left - block.left,
      y: e.clientY - containerBounds.top - block.top,
    };
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!selectedBlock.current || !containerRef.current) return;

    const containerBounds = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - containerBounds.left;
    const mouseY = e.clientY - containerBounds.top;

    const newTop = mouseY - dragOffset.current.y;
    const newLeft = mouseX - dragOffset.current.x;

    const maxTop = containerBounds.height - 20;
    const maxLeft = containerBounds.width - 20;

    setTextBlocks((prev) =>
      prev.map((block) =>
        block.id === selectedBlock.current
          ? {
              ...block,
              top: Math.max(0, Math.min(newTop, maxTop)),
              left: Math.max(0, Math.min(newLeft, maxLeft)),
            }
          : block
      )
    );
  }

  function handleMouseUp() {
    selectedBlock.current = null;
  }

  function handleColorChange(color: any) {
    if (selectedBlockId) {
      setTextBlocks((prev) =>
        prev.map((block) =>
          block.id === selectedBlockId ? { ...block, color: color.hex } : block
        )
      );
    }
  }

  function toggleColorPicker() {
    setShowColorPicker((prev) => !prev);
  }

  return (
    <div
      ref={containerRef}
      className="relative bg-cyan-400 w-[299px] h-[423px] rounded overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="relative flex flex-col items-center justify-center h-full text-center">
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
        {showColorPicker && (
          <div  style={isHidden ? { display: "none" } : {}} className="absolute top-10  z-20 p-2 rounded  ">
            <ChromePicker
              color={
                selectedBlockId
                  ? textBlocks.find((block) => block.id === selectedBlockId)
                      ?.color
                  : "#000000"
              }
              onChange={handleColorChange}
            />
            <button
              onClick={() => setShowColorPicker(false)}
              className="mt-2 bg-black text-white px-2 py-1 rounded text-xs"
            >
              x
            </button>
          </div>
        )}
      </div>
      <div className="absolute top-2 left-2 z-10 flex space-x-2">
        <button
          style={isHidden ? { visibility: "hidden" } : {}}
          onClick={addTextBlock}
          className="bg-white bg-opacity-75 p-1 rounded text-xs"
        >
          Add Text
        </button>
        {textBlocks.length > 0 && (
          <button
            style={isHidden ? { display: "none" } : {}}
            onClick={toggleColorPicker}
            className="bg-white bg-opacity-75 p-1 rounded text-xs"
          >
            <IoColorPaletteOutline />

          </button>
        )}
      </div>

      {textBlocks.map((block) => (
        <div
          key={block.id}
          className="absolute cursor-move p-1 rounded text-lg font-bold"
          style={{
            top: `${block.top}px`,
            left: `${block.left}px`,
            color: block.color,
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
          style={isHidden ? { display: "none" } : {}}
          onClick={() => setImage(null)}
          className="absolute top-2 right-2 bg-white bg-opacity-75 p-1 rounded text-xs"
        >
          Delete Image
        </button>
      )}
    </div>
  );
}

export default TestCard;
