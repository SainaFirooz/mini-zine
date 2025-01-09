"use client";

import TestCard from "@/components/TestCard";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import generatePDF, { Options } from "react-to-pdf";

type Props = {};

function page({}: Props) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const router = useRouter();

  const options: Options = {
    filename: "mini-zine.pdf",
    method: "save",
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
      generatePDF(getTargetElement, options).then(() => {
        router.push("/foldingInstructions");
      });
    }, 100);
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
        onClick={downloadPdf }
      >
        Download PDF
      </Button>
      {/* <Button
          className=""
          variant="link"
          onClick={() => router.push("/foldingInstructions")}
        >
          How to Fold Your Mini Zine
        </Button> */}
    </div>
  );
}

export default page;
