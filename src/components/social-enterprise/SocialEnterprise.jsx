import servicesImage from "../../assets/social_enterprise_image.JPG"
import servicesImage_1 from "../../assets/social_enterprise_image-1.JPG"
import servicesImage_2 from "../../assets/social_enterprise_image-2.JPG"
import servicesImage_3 from "../../assets/social_enterprise_image-3.JPG"
import servicesImage_4 from "../../assets/social_enterprise_image-4.JPG"
import Navbar from "../navbar/navbar.component.jsx";
import profile_assessment from "../../assets/profile_assessment.JPG";
import university_selection from "../../assets/university_selection.JPG";
import application_assistance from "../../assets/application_assistance.JPG";

import {
    ArrowRightOutlined,
    BankOutlined,
    BuildOutlined,
    DesktopOutlined,
    EditOutlined,
    FileDoneOutlined,
    FileOutlined, VideoCameraOutlined
} from "@ant-design/icons";
import {Input} from "antd";
import {useEffect} from "react";
import Footer from "../../Footer.jsx";
import HeroComponent from "../hero/hero.component.jsx";
import SocialResponsiblityComponent from "../study-abroad/ui/social-responsibility-section.component.jsx";
import ServiceCard from "../services/ui/ServiceCard.jsx";



const SocialEnterprise = () => {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    return (
        <div>
            <Navbar/>
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
           />
          <div
                className="h-screen grid place-items-center"
                style={{
                    backgroundImage: `url(${servicesImage_1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'

                }}
            >
                 <div className="flex flex-col items-center gap-4 top-1/4 md:right-32">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">Need Preparations for <br/> IETS Exams?</h1>

                    <span
                        className="mt-6 text-lg leading-8 text-gray-200 mx-6 text-center"
                    >
                        Jasper Consultancy extends a helping hand to students <br/>
                        seeking guidance on their educational journey through our<br/>
                        free consultancy.
                    </span>

                            <a
                                href="#"
                                className="rounded-md bg-[#d3ad56] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                               Get in Touch
                            </a>
                </div>
            </div>
            <div className="py-24 flex flex-col">
                <div className="flex flex-col mx-auto text-center">
                    <h1 className="text-3xl mb-4">OUR SERVICES</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 w-4/5 mx-auto gap-8 place-items-center">

                    <ServiceCard 
                        title="Profile Assessment"
                        description="
                         Jasper Consultancy extends a helping hand to 
                         students seeking guidance on their educational
                         journey through our Free Counselling services.
                        "
                        image={servicesImage_3}
                    />
                    <ServiceCard 
                        title="University Selection"
                        description="
                         Jasper Consultancy extends a helping hand to 
                         students seeking guidance on their educational
                         journey through our Free Counselling services.
                        "
                        image={servicesImage_2}

                    />
                    <ServiceCard 
                        title="Application Assistance"
                        description="
                         Jasper Consultancy extends a helping hand to 
                         students seeking guidance on their educational
                         journey through our Free Counselling services.
                        "
                        image={servicesImage_4}

                    />

                </div>
                <a
                                href="#"
                                className="rounded-md bg-[#d3ad56] px-3.5 py-2.5 mx-auto text-sm w-fit font-semibold text-white shadow-sm hover:bg-[]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                               Learn More
                               <ArrowRightOutlined className="text-xs ml-2"/>
                            </a>
            </div>
            <div className="py-12 mb-20 flex flex-col mx-auto">
                <SocialResponsiblityComponent />
                             <a
                                href="#"
                                className="rounded-md bg-[#d3ad56] mt-10 px-3.5 py-2.5 mx-auto text-sm w-fit font-semibold text-white shadow-sm hover:bg-[]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                               Learn More
                               <ArrowRightOutlined className="text-xs ml-2"/>
                            </a>
              </div>
            <Footer/>
        </div>
    )
}

export default SocialEnterprise;