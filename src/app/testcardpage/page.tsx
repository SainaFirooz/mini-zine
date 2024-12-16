"use client";

import TestCard from "@/components/TestCard";
import React from "react";
import PDFGenerator from "@/components/PDFGenerator";

type Props = {};

function page({}: Props) {
  const [imageUrls, setImageUrls] = React.useState<string[]>([]);

  // Callback för att hantera uppladdade bilder
  const handleImageUpload = (index: number, imageUrl: string) => {
    setImageUrls((prev) => {
      const newUrls = [...prev];
      newUrls[index] = imageUrl;
      return newUrls;
    });
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row w-full gap-2 flex-wrap columns-8">
        {[...Array(8)].map((_, index) => (
          <TestCard
          index={index}
            key={index}
            cardName={`Page ${index + 1}`}
            rotateImage={index < 4}
            onImageUpload={(imageUrl) => handleImageUpload(index, imageUrl)}
          />
        ))}
      </div>

      <PDFGenerator images={imageUrls.filter(Boolean)} />
    </div>
    // <div className="flex flex-row w-full gap-2 flex-wrap columns-8">
    //   <TestCard  rotateImage={true} cardName="Page 4" style={{ transform: 'rotate(3.142rad)' }}/>
    //   <TestCard  rotateImage={true} cardName="Page 3" style={{ transform: 'rotate(3.142rad)' }}/>
    //   <TestCard  rotateImage={true} cardName="Page 2" style={{ transform: 'rotate(3.142rad)' }}/>
    //   <TestCard  rotateImage={true} cardName="Page 1" style={{ transform: 'rotate(3.142rad)' }}/>
    //   <TestCard cardName="Page 5"/>
    //   <TestCard cardName="Page 6"/>
    //   <TestCard cardName="Back Cover"/>
    //   <TestCard cardName="Front Cover"/>

    // </div>
  );
}

export default page;
