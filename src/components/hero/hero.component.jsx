// import * as React from "react";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: { y: -20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: [0.95, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const descriptionVariants = {
  hidden: { y: -20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: [0.95, 1],
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function HeroComponent({ button, description, title }) {
  const words = title.split(" ");
  const lastWord = words.pop();

  return (
      <section className="pt-8 lg:pt-32 bg-center bg-cover bg-gradient-to-r from-zinc-900 to-zinc-900 h-screen relative">
        <div className="mx-auto flex flex-col gap-4 max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.h1
              className="max-w-4xl mx-auto text-center font-manrope font-bold text-4xl text-gray-100 mb-5 md:text-6xl leading-[50px]"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
          >
            {words.join(" ")}{" "}
            <span className="text-yellow-500">{lastWord}</span>
          </motion.h1>

          <motion.p
              className="max-w-lg md:max-w-3xl sm:max-w-2xl mx-auto text-center text-base font-normal leading-7 text-gray-300 mb-9"
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
          >
            {description}
          </motion.p>

          <a
              href="javascript:"
              className="md:w-auto self-center !w-fit mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center bg-gray-800 rounded-full text-white shadow-xs hover:bg-gray-700 transition-all duration-500"
          >
            {button}
            <svg
                className="ml-2"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>
  );
}
