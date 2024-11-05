// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
//
// export default function HeroComponent({ title, image, description }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//
//   const titleVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };
//
//   const descriptionVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };
//
//   const buttonVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };
//
//   return (
//     <div className="">
//       <div
//         className="relative isolate px-6 sm:pt-14 lg:px-8"
//         style={{
//           backgroundImage: `url(${image})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         ></div>
//         <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-10 h-screen">
//           <div className="text-center" ref={ref}>
//             <motion.h1
//               className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl"
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={titleVariants}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               {title}
//             </motion.h1>
//             <motion.p
//               className="mt-6 text-lg leading-8 text-gray-200"
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={descriptionVariants}
//               transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//             >
//               {description}
//             </motion.p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <motion.a
//                 href="#"
//                 className="rounded-md bg-[#d3ad56] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 initial="hidden"
//                 animate={isInView ? "visible" : "hidden"}
//                 variants={buttonVariants}
//                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
//               >
//                 Get started
//               </motion.a>
//               <motion.a
//                 href="#"
//                 className="text-sm font-semibold leading-6 text-white"
//                 initial="hidden"
//                 animate={isInView ? "visible" : "hidden"}
//                 variants={buttonVariants}
//                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
//               >
//                 Learn more <span aria-hidden="true">→</span>
//               </motion.a>
//             </div>
//           </div>
//         </div>
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//         ></div>
//       </div>
//     </div>
//   );
// }

export default function HeroComponent({ button, description, title }) {
  return (
      <section
          className="pt-8 lg:pt-32 bg-center bg-cover  bg-yellow-400 h-screen relative"
      >
        {/*<div className="h-[240px] w-[240px] rounded-full bg-yellow-200 absolute blur-3xl right-1/2"></div>*/}

        <div className="mx-auto flex flex-col gap-4 max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          {/*<div*/}
          {/*    className="border border-indigo-600 p-2 w-60 mx-auto rounded-full flex items-center justify-between mb-4"*/}
          {/*>*/}
          {/*<span className="font-inter text-xs font-medium text-gray-700 ml-3"*/}
          {/*>Where <span>preparedness</span> meets excellence.</span*/}
          {/*>*/}
            {/*<a*/}
            {/*    href="javascript:;"*/}
            {/*    className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"*/}
            {/*>*/}
            {/*  <svg*/}
            {/*      width="17"*/}
            {/*      height="16"*/}
            {/*      viewBox="0 0 17 16"*/}
            {/*      fill="none"*/}
            {/*      xmlns="http://www.w3.org/2000/svg"*/}
            {/*  >*/}
            {/*    <path*/}
            {/*        d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"*/}
            {/*        stroke="white"*/}
            {/*        stroke-width="1.6"*/}
            {/*        stroke-linecap="round"*/}
            {/*        stroke-linejoin="round"*/}
            {/*    />*/}
            {/*  </svg>*/}
            {/*</a>*/}
          {/*</div>*/}
          <h1
              className="max-w-4xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-6xl leading-[50px]"
          >
            {title}
          </h1>
          <p
              className="max-w-lg md:max-w-3xl sm:max-w-2xl mx-auto text-center text-base font-normal leading-7 text-gray-700 mb-9"
          >
            {description}
          </p>
          <a
              href="javascript:"
              className="md:w-auto self-center !w-fit mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-black shadow-xs hover:bg-indigo-700 transition-all duration-500"
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
          </a>
          {/*<div className="flex justify-center">*/}
          {/*  <img*/}
          {/*      src="https://pagedone.io/asset/uploads/1691054543.png"*/}
          {/*      alt="Dashboard image" className="rounded-t-3xl h-auto object-cover"*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </section>
  )
}