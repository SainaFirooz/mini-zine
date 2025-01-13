"use client";

import productImage from "@/app/assets/minizine-page.webp";
import lightbulbImage from "@/app/assets/lightbulb.png";
// import fireworkImage from "@/app/assets/firework.png";
import flowerImage from "@/app/assets/flower.png"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-hidden"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            Turn Photos Into Tiny Books
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Simple templates for small books with big ideas
          </p>
        </div>

        <div className="relative mt-10">
          <Image
            src={productImage}
            alt="Minizine image"
            className="z-10 mx-auto"
          />

          <motion.img
            src={lightbulbImage.src}
            alt="Lightbulb image"
            className="hidden md:block absolute z-0"
            width={262}
            height={262}
            style={{
              translateY,
              top: "-18rem",
              left: "-4rem",
            }}
          />
          {/* <motion.img
            src={fireworkImage.src}
            alt="Firework image"
            className="hidden md:block absolute z-0"
            width={248}
            height={248}
            style={{
              translateY,
              bottom: "16rem",
              left: "-3rem",
            }}
          /> */}
           <motion.img
            src={flowerImage.src}
            alt="Flower image"
            className="hidden md:block absolute z-0"
            width={322}
            height={268}
            style={{
              translateY,
              bottom: "-12rem",
              right: "1rem",
            }}
          />
        </div>
      </div>
    </section>
  );
};
