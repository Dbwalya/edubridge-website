import servicesImage from "../../assets/services_image.png"
import examPreparationImage from "../../assets/examination-preparation-image.png"
import Navbar from "../Navbar/Navbar.jsx";
import DefaultOnlineCourseCard from "./ui/DefaultOnlineCourseCard.jsx";
import community_development from "../../assets/community_development.png";
import environmental_sustainability from "../../assets/environmental_sustainability.png";

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
import ServiceCard from "./ui/ServiceCard.jsx";
import Footer from "../../Footer.jsx";
import SwipeCards from "./ui/DefaultOnlineCourseCard.jsx";
import CourseCarousel from "./ui/DefaultOnlineCourseCard.jsx";



const Services = () => {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    return (
        <div>
            <Navbar/>
            <div
                style={{
                    backgroundImage: `url(${servicesImage})`
                }}
                className="flex items-center bg-no-repeat bg-cover bg-center
                    bg-gray-800 py-24 bg-opacity-75 px-5 md:px-24"
            >
                <div className="flex flex-col gap-4 w-full">
                    <span
                        className="text-gray-300 font-semibold text-xl">Let us be the bridge to your academic success</span>
                    <h1 className="text-white font-extrabold text-4xl md:text-7xl">Best Online Study <br/> Center </h1>

                </div>
                         </div>
            {/*<div className="flex mx-auto w-4/5 justify-center gap-10 mt-[-70px] my-16 ">*/}
            {/*    <DefaultOnlineCourseCard*/}
            {/*        title="Profile Assessment"*/}
            {/*        Icon={FileDoneOutlined}*/}
            {/*    />*/}
            {/*    <DefaultOnlineCourseCard*/}
            {/*        title="University Selection"*/}
            {/*        Icon={BankOutlined}*/}
            {/*    />*/}
            {/*    <DefaultOnlineCourseCard*/}
            {/*        title="Application Assistance"*/}
            {/*        Icon={EditOutlined}*/}
            {/*    />*/}
            {/*</div>*/}
            <CourseCarousel />
            <div className="w-full text-center flex flex-col items-center">
                <span className="text-xl mt-4 font-semibold">Connect with us now!</span>
                <div className="flex mt-5">
                    <Input
                        placeholder="Enter your email..."
                        className="max-w-lg md:w-[340px] mr-2"
                    />
                    <button className="bg-black text-sm text-white px-10 rounded">Subscribe</button>
                </div>
            </div>
            <div
                className="relative flex flex-col items-center text-center gap-8"
            >
                <img src={examPreparationImage}
                     className="object-cover w-full"
                     alt="exam-img" />

                <div className="lg:absolute flex flex-col items-center gap-4 top-1/4 md:right-32">
                    <h1 className="font-extrabold text-3xl text-center
                     md:text-6xl md:text-left mb-5">Need Preparations for <br/> IETS Exams?</h1>

                    <span
                        className="md:text-xl text-gray-700"
                    >
                        Jasper Consultancy extends a helping hand to students <br/>
                        seeking guidance on their educational journey through our<br/>
                        free consultancy.
                    </span>

                    <button
                        className="my-3 bg-black text-white rounded-md py-2
                         px-6 cursor-pointer text-sm font-semibold w-fit">Call
                        Now
                    </button>
                </div>
            </div>
            <div className="py-24 flex flex-col">
                <div className="flex flex-col mx-auto text-center">
                    <h1 className="text-3xl mb-4">OUR SERVICES</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 py-16 w-4/5 mx-auto gap-8 place-items-center">

                    <ServiceCard
                        title="Customized Plan of Action"
                        description="Jasper Consultancy extends a helping hand
                        to students seeking guidance on their
                        educational journey through our Free Counselling services."
                        Icon={BuildOutlined}
                    />
                    <ServiceCard
                        title="Customized Plan of Action"
                        description="Jasper Consultancy extends a helping hand
                        to students seeking guidance on their
                        educational journey through our Free Counselling services."
                        Icon={DesktopOutlined}
                    />
                    <ServiceCard
                        title="Customized Plan of Action"
                        description="Jasper Consultancy extends a helping hand
                        to students seeking guidance on their
                        educational journey through our Free Counselling services."
                        Icon={VideoCameraOutlined}
                    />
                    <ServiceCard
                        title="Customized Plan of Action"
                        description="Jasper Consultancy extends a helping hand
                        to students seeking guidance on their
                        educational journey through our Free Counselling services."
                        Icon={FileOutlined}
                    />

                </div>
                <button
                    className="bg-black text-white px-4 py-2 rounded-lg
                     mt-10 hover:bg-gray-700 mx-auto w-fit
                      flex items-center hover:gap-2">
                    Learn more
                    <ArrowRightOutlined className="text-sm ml-2"/>
                </button>
            </div>
            <div className="py-20 flex flex-col w-4/5 mx-auto">
                <div className="flex flex-col space-y-4 mx-auto text-center">
                    <h1 className="text-3xl mb-6">OUR Social Enterprise Responsibilities</h1>
                    <span className="text-gray-700">
                        Jasper Consultancy extends a helping hand to students seeking
                        guidance on their educational journey through our Free Counselling
                        services Jasper Consultancy extends a helping hand to students seeking guidance
                        on their educational journey through our Free Counselling services.
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                    <ServiceCard
                        title="Community Development"
                        description="Improve your English and French speaking, listening,reading and writing skills with our expert teachers"
                        image={community_development}
                    />
                    <ServiceCard
                        title="Environmental Sustainability"
                        description="Improve your English and French speaking, listening,reading and writing skills with our expert teachers"
                        image={environmental_sustainability}
                    />
                </div>
                <button
                    className="bg-black text-white px-4 py-2 rounded-lg
                     my-20 hover:bg-gray-700 mx-auto w-fit
                      flex items-center hover:gap-2">
                    Learn more
                    <ArrowRightOutlined className="text-sm ml-2"/>
                </button>
            </div>
            <Footer/>
        </div>
    )
}

export default Services;