"use client";

import TestCard from "@/components/TestCard";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import generatePDF, { Resolution, Options, Margin } from "react-to-pdf";

type Props = {};

function page({}: Props) {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [fixedStyle, setFixedStyle] = useState(false);
  const router = useRouter();

  const options: Options = {
    filename: "mini-zine.pdf",
    method: "open",
    resolution: Resolution.HIGH,
    page: {
      orientation: "landscape",
      margin: Margin.NONE,
    },
  };

  const getTargetElement = () => document.getElementById("targetRef");

  const downloadPdf = () => {
    const target = getTargetElement();
    if (target) {
      setIsHidden(true);
      setFixedStyle(true);

      setTimeout(() => {
        generatePDF(getTargetElement, options).then(() => {
          // router.push("/foldingInstructions");
        });
        setFixedStyle(false);
        setIsHidden(false);
      }, 100);
    }
  };

  return (
    <>
      <div
        id="targetRef"
        className={`${
          fixedStyle
            ? "flex flex-wrap w-A4-width h-A4-height"
            : "flex flex-wrap"
        }`}
      >
        <TestCard
          fixedStyling={fixedStyle}
          isHidden={isHidden}
          rotateImage={true}
          cardName="Page 4"
          style={{
            transform: "rotate(3.142rad)",
          }}
        />
        <TestCard
          fixedStyling={fixedStyle}
          isHidden={isHidden}
          rotateImage={true}
          cardName="Page 3"
          style={{
            transform: "rotate(3.142rad)",
          }}
        />
        <TestCard
          fixedStyling={fixedStyle}
          isHidden={isHidden}
          rotateImage={true}
          cardName="Page 2"
          style={{
            transform: "rotate(3.142rad)",
          }}
        />
        <TestCard
          fixedStyling={fixedStyle}
          isHidden={isHidden}
          rotateImage={true}
          cardName="Page 1"
          style={{
            transform: "rotate(3.142rad)",
          }}
        />
        <TestCard
          fixedStyling={fixedStyle}
          isHidden={isHidden}
          cardName="Page 5"
        />
        <TestCard
          fixedStyling={fixedStyle}
          isHidden={isHidden}
          cardName="Page 6"
        />
        <TestCard
          fixedStyling={fixedStyle}
          isHidden={isHidden}
          cardName="Back Cover"
        />
        <TestCard
          fixedStyling={fixedStyle}
          isHidden={isHidden}
          cardName="Front Cover"
        />
      </div>
      <Button
        className="mt-2"
        style={isHidden ? { display: "none" } : {}}
        onClick={downloadPdf}
      >
        Download PDF
      </Button>
    </>
  );
}

export default page;
