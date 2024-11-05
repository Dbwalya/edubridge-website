import { motion } from 'framer-motion';
import servicesImage from "../../assets/services_image.png";
import examPreparationImage from "../../assets/exam_image.JPG";
import Navbar from "../navbar/navbar.component.jsx";
import community_development from "../../assets/community_development.png";
import environmental_sustainability from "../../assets/environmental_sustainability.png";
import profile_assessment from "../../assets/profile_assessment.JPG";
import university_selection from "../../assets/university_selection.JPG";
import application_assistance from "../../assets/application_assistance.JPG";

import { ArrowRightOutlined } from "@ant-design/icons";
import Footer from "../../Footer.jsx";
import HeroComponent from "../hero/hero.component.jsx";
import SocialResponsiblityComponent from "../study-abroad/ui/social-responsibility-section.component.jsx";
import ServiceCard from "./ui/ServiceCard.jsx";

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
        className="py-24 flex flex-col"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="flex flex-col mx-auto text-center"
          variants={heroAnimation}
        >
          <h1 className="text-3xl mb-4">OUR SERVICES</h1>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 w-4/5 mx-auto gap-8 place-items-center"
          variants={staggerContainer}
        >
          <ServiceCard
            title="Profile Assessment"
            description="
              Jasper Consultancy extends a helping hand to 
              students seeking guidance on their educational
              journey through our Free Counselling services.
            "
            image={profile_assessment}
          />
          <ServiceCard
            title="University Selection"
            description="
              Jasper Consultancy extends a helping hand to 
              students seeking guidance on their educational
              journey through our Free Counselling services.
            "
            image={university_selection}
          />
          <ServiceCard
            title="Application Assistance"
            description="
              Jasper Consultancy extends a helping hand to 
              students seeking guidance on their educational
              journey through our Free Counselling services.
            "
            image={application_assistance}
          />
        </motion.div>
        <motion.a
          href="#"
          className="rounded-md bg-[#d3ad56] px-3.5 py-2.5 mx-auto text-sm w-fit font-semibold text-white shadow-sm hover:bg-[]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          variants={heroAnimation}
        >
          Learn More  
          <ArrowRightOutlined className="text-xs ml-2" />
        </motion.a>
      </motion.div>
      <motion.div
        className="py-20 flex flex-col mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <SocialResponsiblityComponent />
        <motion.a
          href="#"
          className="rounded-md bg-[#d3ad56] mt-10 px-3.5 py-2.5 mx-auto text-sm w-fit font-semibold text-white shadow-sm hover:bg-[]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          variants={heroAnimation}
        >
          Learn More 
          <ArrowRightOutlined className="text-xs ml-2" />
        </motion.a>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Services;
