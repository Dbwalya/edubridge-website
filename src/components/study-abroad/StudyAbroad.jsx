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
import DefaultDocument from "./ui/DefaultDocument.jsx";
import SocialEnterpriseCard from "./ui/SocialEnterpriseCard.jsx";
import Footer from "../../Footer.jsx";
import HeroComponent from "../hero/hero.component.jsx";
import ServiceCard from "../services/ui/ServiceCard.jsx";
import { FileTextOutlined } from "@ant-design/icons";
import Subscribe from "../subscribe/Subscribe.jsx";
import DocumentPreparation from "../study-abroad/document-preparation.component.jsx";

const StudyAbroad = () => {
    const animateFromBottom = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
                <div className="flex flex-col gap-3 text-center w-full mx-auto mb-6">
                    <h2 className="text-4xl text-center font-semibold px-4">Our Study Services</h2>
                    <p className="text-gray-600">We are a true representation of an excellent university
                        for success.</p>
                </div>

                {/*👇👇 Animate these components */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-4/5 gap-5 md:gap-10 md: mx-auto mt-20"
                    initial="hidden"
                    whileInView="visible"
                    variants={animateFromBottom}
                    viewport={{once: true}}
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
            <div className="bg-gray-800 py-24 flex justify-between items-center">

                {/*👇👇 Animate these components */}
                <motion.div
                    className="flex flex-col md:flex-row gap-24 mx-auto w-4/5 justify-between"
                    initial="hidden"
                    whileInView="visible"
                    variants={animateFromBottom}
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
            <div className="py-24 bg-gray-100 ">
                <div className="flex flex-col gap-3 text-center w-full mx-auto mb-6">
                    <h2 className="text-4xl text-center font-semibold">Document Preparation</h2>
                    <span className="text-gray-600 font-semibold">Ensuring accuracy and completeness for a successful application process.</span>
                </div>

                <DocumentPreparation />

            </div>
            <div
                style={{backgroundImage: `url(${socialEnterprise})`}}
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
                    variants={animateFromBottom}
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
                        image={social_sustainability}
                    />
                  
                </motion.div>
            </div>

            <Subscribe />
            <Footer />
        </div>
    );
};

export default StudyAbroad;
