"use client";

import TestCard from "@/components/TestCard";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

import generatePDF, { Options } from "react-to-pdf";

type Props = {};

function page({}: Props) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const options: Options = {
    filename: "mini-zine.pdf",
    method: "open",
    page: {
      orientation: "landscape",
    },
  };

  // Callback för att hantera uppladdade bilder
  const handleImageUpload = (index: number, imageUrl: string) => {
    setImageUrls((prev) => {
      const newUrls = [...prev];
      newUrls[index] = imageUrl;
      return newUrls;
    });
  };
  const getTargetElement = () => document.getElementById("targetRef");

  const downloadPdf = () => {
    setIsHidden(true);
    setTimeout(() => {
      generatePDF(getTargetElement, options);
    }, 100);

    console.log(isHidden);
  };

  return (
    <div
      id="targetRef"
      className="flex flex-row w-full p-1 gap-1 flex-wrap columns-8 "
    >
      <TestCard
        isHidden={isHidden}
        rotateImage={true}
        cardName="Page 4"
        style={{ transform: "rotate(3.142rad)" }}
      />
      <TestCard
        isHidden={isHidden}
        rotateImage={true}
        cardName="Page 3"
        style={{ transform: "rotate(3.142rad)" }}
      />
      <TestCard
        isHidden={isHidden}
        rotateImage={true}
        cardName="Page 2"
        style={{ transform: "rotate(3.142rad)" }}
      />
      <TestCard
        isHidden={isHidden}
        rotateImage={true}
        cardName="Page 1"
        style={{ transform: "rotate(3.142rad)" }}
      />
      <TestCard isHidden={isHidden} cardName="Page 5" />
      <TestCard isHidden={isHidden} cardName="Page 6" />
      <TestCard isHidden={isHidden} cardName="Back Cover" />
      <TestCard isHidden={isHidden} cardName="Front Cover" />
      <Button
        className=""
        style={isHidden ? { display: "none" } : {}}
        onClick={downloadPdf}
      >
        Download PDF
      </Button>
    </div>
  );
}

export default page;
