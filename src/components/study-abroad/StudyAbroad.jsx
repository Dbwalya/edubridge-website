import { motion } from "framer-motion";
import Navbar from "../navbar/navbar.component.jsx";
import headerCover from "../../assets/studyabroad_cover.png";
import socialEnterprise from "../../assets/social_enteprise.png";
import AbroadCard from "./ui/AbroadCard.jsx";
import profile_assessment from "../../assets/profile_assessment.JPG";
import university_selection from "../../assets/university_selection.JPG";
import application_assistance from "../../assets/application_assistance.JPG";
import community_development from "../../assets/community_development.JPG"
import social_sustainability from "../../assets/social_sustainability.JPG"
import charity from "../../assets/charity.JPG"

import universitySelection from '../../assets/university-selection.png';
import profileAssessment from '../../assets/profile-assessment.png';
import DefaultDocument from "./ui/DefaultDocument.jsx";
import SocialEnterpriseCard from "./ui/SocialEnterpriseCard.jsx";
import { Input } from "antd";
import Footer from "../../Footer.jsx";
import HeroComponent from "../hero/hero.component.jsx";
import ServiceCard from "../services/ui/ServiceCard.jsx";

const StudyAbroad = () => {
    const animateFromLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <div>
            <Navbar />
           <HeroComponent
                title="Look through Our Study Abroad services"
                image={headerCover}
                description="
                At our online study center, we pride ourselves on
                 delivering personalized, high-quality education 
                 tailored to each student's unique needs, ensuring they 
                 receive the most effective support possible. Our cutting-edge
                  technology and expert instructors provide an engaging and interactive learning
                 experience, making complex subjects accessible and enjoyable.
                "
           />
            <div className="flex flex-col py-24 pb-24">
                <div className="flex flex-col mx-auto text-center">
                    <h1 className="text-3xl mb-4">OUR STUDY SERVICES</h1>
                    <span>We are a true representation of excellence company</span>
                </div>

                {/*👇👇 Animate these components */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-4/5 gap-5 md:gap-10 md: mx-auto mt-20"
                    initial="hidden"
                    whileInView="visible"
                    variants={animateFromLeft}
                    viewport={{ once: true }}
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
            </div>
            <div className="bg-black h-screen flex justify-between items-center">

                {/*👇👇 Animate these components */}
                <motion.div
                    className="flex flex-col md:flex-row gap-24 mx-auto w-4/5 justify-between"
                    initial="hidden"
                    whileInView="visible"
                    variants={animateFromLeft}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col justify-center space-y-8 max-w-lg text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl text-white font-semibold">
                            Let us create a <span className="text-yellow-500">customized</span> plan of action with 100% success
                        </h1>
                        <span className="text-gray-100">
                            Improve your English and French speaking, listening, reading,
                            and writing skills with our expert teachers
                        </span>
                    </div>
                    <AbroadCard
                        title="Customized Plan of Action"
                        description="Jasper Consultancy extends a helping hand to students
                            seeking guidance on their educational journey through our Free Counselling services."
                        image={universitySelection}
                    />
                </motion.div>
            </div>
            <div className="py-24">
                <h2 className="text-3xl font-semibold text-center">
                    <span className="bg-yellow-500 px-6 rounded-lg text-white">Document</span> Preparation
                </h2>
                <motion.div
                    className="mt-20 w-4/5 mx-auto grid grid-cols-1 gap-20 md:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    variants={animateFromLeft}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 gap-8">
                        <DefaultDocument title="Resume" />
                        <DefaultDocument title="SOP" />
                        <DefaultDocument title="LORs" />
                        <DefaultDocument title="Essays" />
                        <DefaultDocument title="Videos" />
                    </div>
                    <div>
                        <span className="text-xl text-gray-700">
                            Improve your English and French speaking, listening, reading,
                            and writing skills with our expert teachers.
                        </span>
                    </div>
                </motion.div>
            </div>
            <div
                style={{ backgroundImage: `url(${socialEnterprise})` }}
                className="bg-no-repeat bg-cover bg-center py-24 grid grid-rows-2 text-white"
            >
                <div className="grid items-center mx-auto w-5/6 text-4xl">
                    <span>
                        We are a <span className="text-yellow-500 mr-3"> Social Enterprise</span>
                        that seeks to provide services to our community.
                    </span>
                </div>
                <div className="grid items-center md:text-right mx-auto w-5/6 text-4xl">
                    <span>
                        Improve your <span className="text-yellow-500 mr-3"> English</span> and <span className="text-yellow-500 mr-3"> French</span>
                        speaking, listening, reading, and writing skills with our
                        expert teachers.
                    </span>
                </div>
            </div>
            <div className="py-24 flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-center">
                    Our <span className="text-yellow-500 rounded-lg"> Social Enterprise </span> Services.
                </h2>

                <span className="text-xl mt-8 font-semibold">Book your slot</span>

                {/*👇👇 Animate these components */}
                <motion.div
                    className="grid place-items-center py-16 mx-auto w-4/5 gap-8 grid-cols-1 sm:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    variants={animateFromLeft}
                    viewport={{ once: true }}
                >
                    <SocialEnterpriseCard 
                        description="
                            Improve your English and French speaking, listening,
                            reading and writing skills with our expert teachersking,
                            listening,reading and writing skills with odddgfjghjfffk
                        "
                        title="Social Sustainability"
                        image={social_sustainability}
                    />
                    <SocialEnterpriseCard 
                        description="
                            Improve your English and French speaking, listening,
                            reading and writing skills with our expert teachersking,
                            listening,reading and writing skills with odddgfjghjfffk
                        "
                        title="Social Sustainability"
                        image={community_development}
                    />
                    <SocialEnterpriseCard 
                        description="
                            Improve your English and French speaking, listening,
                            reading and writing skills with our expert teachersking,
                            listening,reading and writing skills with odddgfjghjfffk
                        "
                        title="Community Development"
                        image={charity}
                    />
                    <SocialEnterpriseCard 
                        description="
                            Improve your English and French speaking, listening,
                            reading and writing skills with our expert teachersking,
                            listening,reading and writing skills with odddgfjghjfffk
                        "
                        title="Social Sustainability"
                    />
                  
                </motion.div>
                <span className="text-xl mt-8 font-semibold">Connect with us now!</span>
                <div className="flex mt-5">
                    <Input
                        placeholder="Enter your email..."
                        className="max-w-lg md:w-[340px] mr-2"
                    />
                    <button className="bg-black text-sm text-white px-10 rounded">Subscribe</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StudyAbroad;
