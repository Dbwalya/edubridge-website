import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HeroComponent({ title, image, description }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const titleVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const descriptionVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const buttonVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <div className="">
            <div
                className="relative isolate px-6 sm:pt-14 lg:px-8"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                ></div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10 h-screen">
                    <div className="text-center" ref={ref}>
                        <motion.h1
                            className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl"
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={titleVariants}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            className="mt-6 text-lg leading-8 text-gray-200"
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={descriptionVariants}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            {description}
                        </motion.p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <motion.a
                                href="#"
                                className="rounded-md bg-[#d3ad56] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={buttonVariants}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            >
                                Get started
                            </motion.a>
                            <motion.a
                                href="#"
                                className="text-sm font-semibold leading-6 text-white"
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={buttonVariants}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            >
                                Learn more <span aria-hidden="true">→</span>
                            </motion.a>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                ></div>
            </div>
        </div>
    );
}
