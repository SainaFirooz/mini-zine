"use client";

import TestCard from "@/components/TestCard";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import generatePDF, { Resolution, Options, Margin } from "react-to-pdf";


type Props = {};

function page({}: Props) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [fixedStyle, setFixedStyle ] = useState(false)
  const router = useRouter();

  const options: Options = {
    
    filename: "mini-zine.pdf",
    method: "save",
    resolution: Resolution.HIGH,
    page: {
      orientation: "landscape",
      margin: Margin.NONE,  
    },
  };

  // Callback för att hantera uppladdade bilder
  // const handleImageUpload = (index: number, imageUrl: string) => {
  //   setImageUrls((prev) => {
  //     const newUrls = [...prev];
  //     newUrls[index] = imageUrl;
  //     return newUrls;
  //   });
  // };

  const getTargetElement = () => document.getElementById("targetRef");


  const downloadPdf = () => {
    const target = getTargetElement();
    if (target) {
      // target.classList.add("pdf-layout");
  
      setIsHidden(true);
      setFixedStyle(true)
      setTimeout(() => {
        generatePDF(getTargetElement, options).then(() => {
          // Remove the class after PDF generation
          // target.classList.remove("pdf-layout");
          router.push("/foldingInstructions");
        });
      }, 100);
    }
  };


  return (
    <>
    <div
      id="targetRef"
      // className="grid w-full grid-cols-4 gap-1 md:grid-cols-4 md:gap-1 "
     className={`flex flex-wrap`}

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
 
      {/* <Button
          className=""
          variant="link"
          onClick={() => router.push("/foldingInstructions")}
        >
          How to Fold Your Mini Zine
        </Button> */}
    </div>
         <Button
         className=""
         style={isHidden ? { display: "none" } : {}}
         onClick={downloadPdf }
       >
         Download PDF
       </Button>
       </>
  );
}

export default page;
