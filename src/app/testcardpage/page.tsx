"use client";

import TestCard from "@/components/TestCard";
import React from "react";

import generatePDF, { usePDF, Options } from "react-to-pdf";

type Props = {};

function page({}: Props) {
  // const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const [imageUrls, setImageUrls] = React.useState<string[]>([]);

  const options: Options = {
    filename: 'mini-zine.pdf',
    method: "open",
    page: {
      orientation: 'landscape',
    }
  }

  // Callback för att hantera uppladdade bilder
  const handleImageUpload = (index: number, imageUrl: string) => {
    setImageUrls((prev) => {
      const newUrls = [...prev];
      newUrls[index] = imageUrl;
      return newUrls;
    });
  };
  const getTargetElement = () => document.getElementById("targetRef");

  const downloadPdf = () => generatePDF(getTargetElement, options);


  return (
    <div
      id="targetRef"
      className="flex flex-row w-full gap-2 flex-wrap columns-8"
    >
      <TestCard
        rotateImage={true}
        cardName="Page 4"
        style={{ transform: "rotate(3.142rad)" }}
       
      />
      <TestCard
        rotateImage={true}
        cardName="Page 3"
        style={{ transform: "rotate(3.142rad)" }}
        
      />
      <TestCard
        rotateImage={true}
        cardName="Page 2"
        style={{ transform: "rotate(3.142rad)" }}
      
      />
      <TestCard
        rotateImage={true}
        cardName="Page 1"
        style={{ transform: "rotate(3.142rad)" }}
    
      />
      <TestCard cardName="Page 5" />
      <TestCard cardName="Page 6" />
      <TestCard cardName="Back Cover" />
      <TestCard cardName="Front Cover" />
      <button onClick={(downloadPdf)}>Download PDF</button>
    </div>
  );
}

export default page;
