import TestCard from "@/components/TestCard";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="flex flex-row w-full gap-2 flex-wrap columns-8">
      <TestCard  rotateImage={true} cardName="Page 4" style={{ transform: 'rotate(3.142rad)' }}/>
      <TestCard  rotateImage={true} cardName="Page 3" style={{ transform: 'rotate(3.142rad)' }}/>
      <TestCard  rotateImage={true} cardName="Page 2" style={{ transform: 'rotate(3.142rad)' }}/>
      <TestCard  rotateImage={true} cardName="Page 1" style={{ transform: 'rotate(3.142rad)' }}/>
      <TestCard cardName="Page 5"/>
      <TestCard cardName="Page 6"/>
      <TestCard cardName="Back Cover"/>
      <TestCard cardName="Front Cover"/>
    
    </div>
  );
}

export default page;
