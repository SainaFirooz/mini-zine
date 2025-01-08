"use client";

import { motion } from "framer-motion";

export const LogoTicker = () => {
  const steps = [
    { id: 1, emoji: "📸", text: "Snap 8 pictures" },
    { id: 2, emoji: "📤", text: "Upload your images" },
    { id: 3, emoji: "🖼️", text: "Arrange them in the template" },
    { id: 4, emoji: "🖨️", text: "Print your zine" },
    { id: 5, emoji: "🎉", text: "Fold, and you're done!" },
  ];

  const cta = { emoji: "🚀", text: "✨ Ready to start? Upload now!" };

  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-2">
                <span className="text-2xl">{step.emoji}</span>
                <p className="text-xl font-medium text-gray-800">{step.text}</p>
              </div>
            ))}
            {/* Add CTA at the end */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">{cta.emoji}</span>
              <p className="text-xl font-bold text-indigo-600">{cta.text}</p>
            </div>
            {/* Duplicate steps for seamless animation */}
            {steps.map((step) => (
              <div key={`duplicate-${step.id}`} className="flex items-center gap-2">
                <span className="text-2xl">{step.emoji}</span>
                <p className="text-xl font-medium text-gray-800">{step.text}</p>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <span className="text-2xl">{cta.emoji}</span>
              <p className="text-xl font-bold text-indigo-600">{cta.text}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
