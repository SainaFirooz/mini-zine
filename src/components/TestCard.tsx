"use client";
import Image from "next/image";
import React, { useState, useRef, useCallback } from "react";
import { ChromePicker } from "react-color";
import { IoColorPaletteOutline, IoImageOutline } from "react-icons/io5";
import { useDropzone } from "react-dropzone";

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

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <div
      ref={containerRef}
      className="relative bg-white w-[299px] h-[423px] overflow-hidden"
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
          <div
            style={isHidden ? { display: "none" } : {}}
            className="absolute top-10  z-20 p-2 rounded  "
          >
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
          className="bg-slate-200 hover:bg-slate-100 bg-opacity-75 p-1 rounded text-xs"
        >
          Add Text
        </button>
        {textBlocks.length > 0 && (
          <button
            style={isHidden ? { display: "none" } : {}}
            onClick={toggleColorPicker}
            className="bg-slate-200 hover:bg-slate-100 bg-opacity-75 p-1 rounded text-xs"
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
            onChange={(e) => {
              const newValue = e.target.value;
              setTextBlocks((prev) =>
                newValue.trim()
                  ? prev.map((b) =>
                      b.id === block.id ? { ...b, content: newValue } : b
                    )
                  : prev.filter((b) => b.id !== block.id)
              );
            }}
            className="bg-transparent outline-none"
          />
        </div>
      ))}

{image ? null : (
  <div
    {...getRootProps()}
    className="absolute bottom-2 left-2 bg-opacity-75 p-6 rounded-md text-xs cursor-pointer flex flex-col justify-center items-center border border-dashed border-gray-400 hover:bg-slate-50	 hover:border-gray-500 transition-all"
    style={{ width: '90%', height: '190px' }}
  >
    <input {...getInputProps()} />
    <div className="flex flex-col items-center">
      <IoImageOutline size={40} className="text-gray-500" />
      {isDragActive ? (
        <p className="text-gray-700 mt-2 text-sm font-medium">Drop the image here...</p>
      ) : (
        <p className="text-gray-700 mt-2 text-sm font-medium">Drag & drop an image, or click to upload</p>
      )}
    </div>
  </div>
)}

      {image && (
        <button
          style={isHidden ? { display: "none" } : {}}
          onClick={() => setImage(null)}
          className="absolute top-2 right-2 bg-slate-200 hover:bg-slate-100 bg-opacity-75 p-1 rounded text-xs"
        >
          Delete Image
        </button>
      )}
    </div>
  );
}

export default TestCard;
