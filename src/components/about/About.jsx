import library_image from "../../assets/about_pic.png"
import {ArrowRightOutlined} from "@ant-design/icons";

const About = () => {
    return (
        <div className="py-14 mx-auto w-5/6">
            <div className="">
                <div className="">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 items-center mb-6">
                        <div className="flex flex-col space-y-6 col-span-4">
                            <h1 className="text-xl md:text-0.5xl text-center md:text-left tracking-wider">ABOUT US</h1>
                            <span className="font-extrabold text-3xl text-center md:text-6xl md:text-left">
                                That one way stop <br/>to your  Online  Study Center
                            </span>
                        </div>
                        <div className="h-56 col-span-2 my-8">
                            <img src={library_image} alt="library_image" className="h-full object-contain"/>
                        </div>
                    </div>
                    <div className="md:w-4/6">
                        <span className="text-gray-600 text-md md:text-lg">
                            As an Online Study center ,social enterprise and study abroad agency,
                            our center combines a commitment to educational excellence with a strong dedication to social impact.
                            We offer personalized, high-quality learning experiences tailored to individual needs while supporting global educational opportunities that promote cross-cultural understanding. By reinvesting our profits into community-driven initiatives, we ensure that every
                            student's success also contributes to meaningful, positive change in the world.
                         </span>
                        <button className="mx-auto bg-black text-white px-4 py-2 rounded-lg mt-10 hover:bg-gray-700 flex items-center hover:gap-2">
                            Learn more
                            <ArrowRightOutlined className="text-sm ml-2" />
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default About