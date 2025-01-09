import Image from "next/image";
import foldingInstructionsImage from "@/app/assets/foldingInstructions.png"

const FoldingInstructions = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">Folding Instructions</h1>
      <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
        Follow these steps to fold your printed Mini Zine into a booklet. The
        diagram below shows the entire process.
      </p>

      {/* Displaying the folding instructions image */}
      <div className="flex justify-center mb-6">
        <Image
          src={foldingInstructionsImage}
          alt="Folding Instructions Diagram"
          width={600}
          height={800}
          className="rounded-md shadow-md"
        />
      </div>

      {/* Step-by-step instructions with emojis */}
      <div className="text-left max-w-2xl mx-auto">
        <ol className="list-inside space-y-4">
          <li>
            ✂️ <strong>Step 1:</strong> Fold your printed A4 paper in half lengthwise, creating a
            long rectangle.
          </li>
          <li>
            📐 <strong>Step 2:</strong> Open it up, then fold it again in half widthwise, making a
            smaller rectangle.
          </li>
          <li>
            🖇️ <strong>Step 3:</strong> Fold the paper one more time widthwise, forming an even
            smaller rectangle.
          </li>
          <li>
            ✂️ <strong>Step 4:</strong> Unfold the paper and locate the horizontal fold in the
            middle. Using scissors, carefully cut along the middle of the paper, but only
            up to the center point.
          </li>
          <li>
            📄 <strong>Step 5:</strong> Fold the paper lengthwise again so that the cut forms an
            opening in the middle.
          </li>
          <li>
            📚 <strong>Step 6:</strong> Push the edges of the paper towards the center, letting the
            pages collapse into a cross shape.
          </li>
          <li>
            📖 <strong>Step 7:</strong> Fold the cross shape into a booklet, arranging the pages in
            the correct order.
          </li>
          <li>
            🎉 <strong>Step 8:</strong> Congratulations! Your Mini Zine is ready to use!
          </li>
        </ol>
      </div>
    </div>
    </section>
  );
};

export default FoldingInstructions;
