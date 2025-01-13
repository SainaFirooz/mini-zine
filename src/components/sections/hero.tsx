"use client";

import ArrowIcon from "@/app/assets/arrow-right.svg";
import bookImage from "@/app/assets/books.png";
import cameraImage from "@/app/assets/camera.png";
import polaroidImage from "@/app/assets/polariod.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left, #183EC2, #EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Create your own Mini Zine 
            </h1>
            <p className="text-xl text-[£010D3E] tracking-tight mt-6">
              Discover the joy of creating Mini Zines – small books made from a
              single A4 sheet of paper. With our easy-to-use tools, you can quickly design and print your own Mini Zines using
              personal photographs and text.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Link href="/sign-up" className="btn btn-primary hover:bg-gray-400 transition-colors duration-300 ease-in-out">Sign up</Link>
              <Link href="/about" className="btn btn-text gap-1 hover:text-gray-500 hover:underline transition-colors duration-200 ease-in-out">
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={bookImage.src}
              alt="Book image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-8 lg:left-8"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cameraImage.src}
              alt="Camera image"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={polaroidImage.src}
              alt="Polaroid image"
              width={220}
              className="hidden lg:block absolute top-[524px] left-[400px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
