import { motion } from 'framer-motion';
import servicesImage from "../../assets/services_image.png";
import examPreparationImage from "../../assets/exam_image.JPG";
import Navbar from "../navbar/navbar.component.jsx";
// import community_development from "../../assets/community_development.png";
// import environmental_sustainability from "../../assets/environmental_sustainability.png";
// import profile_assessment from "../../assets/profile_assessment.JPG";
// import university_selection from "../../assets/university_selection.JPG";
// import application_assistance from "../../assets/application_assistance.JPG";

import { ArrowRightOutlined } from "@ant-design/icons";
import Footer from "../../Footer.jsx";
import HeroComponent from "../hero/hero.component.jsx";
import SocialResponsiblityComponent from "../study-abroad/ui/social-responsibility-section.component.jsx";
// import ServiceCard from "./ui/ServiceCard.jsx";
import {InfiniteMovingCardsDemo} from "../Infinite-cards.component.jsx";
import image_1 from "../../assets/image-1.jpg";
import image_2 from "../../assets/image-2.jpg";
import image_3 from "../../assets/image-3.jpg";
import image_4 from "../../assets/image-4.jpg";

const heroAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};


const testimonials = [
    {
        quote: "Shortlisting Universities and Application Guidance.",
        // name: "William Shakespeare",
        // title: "Hamlet",
        // image: image_1
    },
    {
        quote: "Assistance in scholarship and visa",
        // name: "Edgar Allan Poe",
        // title: "A Dream Within a Dream",
        // image: image_2
    },
    {
        quote: "Craft stand out resume",
        // name: "Jane Austen",
        // title: "Pride and Prejudice",
        // image: image_3
    },
    {
        quote: "Writing stellar Essays and Letters of recommendation.",
        // name: "Herman Melville",
        // title: "Moby-Dick",
        // image: image_4
    },
    {
        quote: "Networking with Alumni meeting the representatives",
        // name: "Herman Melville",
        // title: "Moby-Dick",
        // image: image_4
    },
    {
        quote: "Guidance in building overall strong applications through extramural engagements.",
        // name: "Herman Melville",
        // title: "Moby-Dick",
        // image: image_4
    },
];


const Services = () => {
  return (
    <div>
      <Navbar />
      <HeroComponent
        title="Let us be the bridge to your academic success"
        image={servicesImage}
        description="
          At our online study center, we pride ourselves on
          delivering personalized, high-quality education 
          tailored to each student's unique needs, ensuring they 
          receive the most effective support possible. Our cutting-edge
          technology and expert instructors provide an engaging and interactive learning
          experience, making complex subjects accessible and enjoyable.
        "
        button="Learn More"
      />
      <motion.div
        className="h-screen grid place-items-center"
        style={{
          backgroundImage: `url(${examPreparationImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="flex flex-col items-center gap-4 top-1/4"
          variants={heroAnimation}
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl"
            variants={heroAnimation}
          >
            Need Preparations for <br /> IETS Exams?
          </motion.h1>
          <motion.span
            className="mt-6 text-lg leading-8 text-gray-200"
            variants={heroAnimation}
          >
            Jasper Consultancy extends a helping hand to students <br />
            seeking guidance on their educational journey through our <br />
            free consultancy.
          </motion.span>
          <motion.a
            href="#"
            className="rounded-md bg-[#d3ad56] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            variants={heroAnimation}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
        <motion.div
            className="py-24 flex flex-col bg-gray-100"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <motion.div
                className="flex flex-col mx-auto text-center"
                variants={heroAnimation}
            >
                <h1 className="text-3xl mb-6">OUR SERVICES</h1>

                <span className="text-gray-700 w-3/5 mx-auto">
                Our study center offers international education programs focused
                on language mastery and cultural understanding. Through immersive courses
                and expert guidance, we empower students to broaden
                their horizons, gain global skills, and build brighter futures.
            </span>
            </motion.div>
            {/*<motion.div*/}
            {/*  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 w-4/5 mx-auto gap-8 place-items-center"*/}
            {/*  variants={staggerContainer}*/}
            {/*>*/}
            {/*  <ServiceCard*/}
            {/*    title="Profile Assessment"*/}
            {/*    description="*/}
            {/*      Jasper Consultancy extends a helping hand to */}
            {/*      students seeking guidance on their educational*/}
            {/*      journey through our Free Counselling services.*/}
            {/*    "*/}
            {/*    image={profile_assessment}*/}
            {/*  />*/}
            {/*  <ServiceCard*/}
            {/*    title="University Selection"*/}
            {/*    description="*/}
            {/*      Jasper Consultancy extends a helping hand to */}
            {/*      students seeking guidance on their educational*/}
            {/*      journey through our Free Counselling services.*/}
            {/*    "*/}
            {/*    image={university_selection}*/}
            {/*  />*/}
            {/*  <ServiceCard*/}
            {/*    title="Application Assistance"*/}
            {/*    description="*/}
            {/*      Jasper Consultancy extends a helping hand to */}
            {/*      students seeking guidance on their educational*/}
            {/*      journey through our Free Counselling services.*/}
            {/*    "*/}
            {/*    image={application_assistance}*/}
            {/*  />*/}
            {/*</motion.div>*/}

            <div>
                <InfiniteMovingCardsDemo items={testimonials}/>
            </div>

            <a
                href="javascript:"
                className="md:w-auto self-center !w-fit inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center bg-gray-800 rounded-full text-white shadow-xs hover:bg-gray-700 transition-all duration-500"
            >
                Learn More
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
        </motion.div>
        {/*<motion.div*/}
        {/*    className="py-20 flex flex-col mx-auto"*/}
        {/*    initial="hidden"*/}
        {/*    animate="visible"*/}
        {/*    variants={staggerContainer}*/}
        {/*>*/}
        {/*    <SocialResponsiblityComponent/>*/}
        {/*    <a*/}
        {/*        href="javascript:"*/}
        {/*        className="md:w-auto self-center !w-fit mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center bg-gray-800 rounded-full text-white shadow-xs hover:bg-gray-700 transition-all duration-500"*/}
        {/*    >*/}
        {/*        Learn More*/}
        {/*        <svg*/}
        {/*            className="ml-2"*/}
        {/*            width="20"*/}
        {/*            height="20"*/}
        {/*            viewBox="0 0 20 20"*/}
        {/*            fill="none"*/}
        {/*            xmlns="http://www.w3.org/2000/svg"*/}
        {/*        >*/}
        {/*            <path*/}
        {/*                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"*/}
        {/*                stroke="white"*/}
        {/*                strokeWidth="2"*/}
        {/*                strokeLinecap="round"*/}
        {/*                strokeLinejoin="round"*/}
        {/*            />*/}
        {/*        </svg>*/}
        {/*    </a>*/}
        {/*</motion.div> {/*<motion.div*/}
        {/*    className="py-20 flex flex-col mx-auto"*/}
        {/*    initial="hidden"*/}
        {/*    animate="visible"*/}
        {/*    variants={staggerContainer}*/}
        {/*>*/}
        {/*    <SocialResponsiblityComponent/>*/}
        {/*    <a*/}
        {/*        href="javascript:"*/}
        {/*        className="md:w-auto self-center !w-fit mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center bg-gray-800 rounded-full text-white shadow-xs hover:bg-gray-700 transition-all duration-500"*/}
        {/*    >*/}
        {/*        Learn More*/}
        {/*        <svg*/}
        {/*            className="ml-2"*/}
        {/*            width="20"*/}
        {/*            height="20"*/}
        {/*            viewBox="0 0 20 20"*/}
        {/*            fill="none"*/}
        {/*            xmlns="http://www.w3.org/2000/svg"*/}
        {/*        >*/}
        {/*            <path*/}
        {/*                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"*/}
        {/*                stroke="white"*/}
        {/*                strokeWidth="2"*/}
        {/*                strokeLinecap="round"*/}
        {/*                strokeLinejoin="round"*/}
        {/*            />*/}
        {/*        </svg>*/}
        {/*    </a>*/}
        {/*</motion.div>*/}

            <motion.div
                className="flex flex-col mx-auto text-center py-14"
                variants={heroAnimation}
            >
                <h1 className="text-3xl mb-6 mt-10">Products and Services</h1>

                <span className="text-gray-700 w-3/5 mx-auto">
                    Explore our tailored educational programs, language courses,
                    and cultural immersion experiences designed to support personal growth and career advancement. Our services are
                    crafted to meet diverse learning needs and empower students for global success.
            </span>
            </motion.div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-28 px-10 w-5/5 mx-auto">
            <div
                className="flex flex-col bg-gray-50 border shadow-sm rounded-xl  max-w-4xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        International Education Services
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-400">
                        We assist applicants seeking admission to universities
                        worldwide. We provide a comprehensive approach that includes
                        personalized assistance and support throughout the application
                        journey, emphasizing
                        on applicant's strengths and unique qualities.
                    </p>
                    {/*<p className="mt-5 text-xs text-gray-500 dark:text-neutral-500">*/}
                    {/*    Last updated 5 mins ago*/}
                    {/*</p>*/}
                </div>
                {/*<img className="w-full h-auto rounded-b-xl"*/}
                {/*     src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"*/}
                {/*     alt="Card Image"/>*/}
            </div>

            <div
                className="flex flex-col max-w-4xl bg-gray-50 border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        Study Center
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-400">
                        Our Study Centre offers students a dedicated and personalized
                        environment designed to enhance focus and academic productivity.
                        Equipped with various resources and amenities, the Study Centre
                        aims to support diverse learning styles and help students
                        achieve their academic goals more effectively.
                    </p>
                    {/*<p className="mt-5 text-xs text-gray-500 dark:text-neutral-500">*/}
                    {/*    Last updated 5 mins ago*/}
                    {/*</p>*/}
                </div>
                {/*<img className="w-full h-auto rounded-b-xl"*/}
                {/*     src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"*/}
                {/*     alt="Card Image"/>*/}
            </div>

            <div
                className="flex flex-col bg-gray-50 max-w-4xl border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        Empower Futures
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-400">
                        We believe in holistic development and lifting the societal standards
                        is a major focus. Edubridge has tied up with various NGOs across Lusaka and
                        proudly expanding beyond
                        to help orphanage students with basic knowledge and various activities.
                    </p>
                    {/*<p className="mt-5 text-xs text-gray-500 dark:text-neutral-500">*/}
                    {/*    Last updated 5 mins ago*/}
                    {/*</p>*/}
                </div>
                {/*<img className="w-full h-auto rounded-b-xl"*/}
                {/*     src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"*/}
                {/*     alt="Card Image"/>*/}
            </div>

            <div
                className="flex flex-col bg-gray-50 max-w-4xl border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        Language Services
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-400">
                        At Edubridge, we are committed to providing high-quality
                        language education, offering courses in a diverse range of
                        languages including English, French, Chinese, and Spanish. our
                        programs are designed
                        to meet the needs of learners at all levels.
                    </p>
                    {/*<p className="mt-5 text-xs text-gray-500 dark:text-neutral-500">*/}
                    {/*    Last updated 5 mins ago*/}
                    {/*</p>*/}
                </div>
                {/*<img className="w-full h-auto rounded-b-xl"*/}
                {/*     src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"*/}
                {/*     alt="Card Image"/>*/}
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Services;
