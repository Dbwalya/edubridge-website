import './Social.css'
// import kids from '../../assets/kids.jpg'
// import kidss from '../../assets/kidss.jpg'
import food from '../../assets/food.jpg'
import linefood from '../../assets/linefood.jpg'
import clothes from '../../assets/clothes.jpg'
const Language = () => {
    return (
        <div className="bg-white py-20">
            <div className="">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Our Social Enterprise Respsibilities</h2>
                <p className="mx-auto w-4/5 text-gray-600 md:text-xl py-10 yartext-md">
                    As a social enterprise, our online study center is dedicated to making a positive impact by focusing
                    on the education and empowerment of orphanages. We reinvest our resources to provide these vulnerable youth with access to quality learning opportunities and support, helping them build a brighter future. Through our commitment to education and social responsibility, we strive to create meaningful change and offer a path to success for those who need it most.
                </p>
            </div>

            <section className='grid grid-cols-1 md:grid-cols-3 gap-10'>

                <div className="whole-con cursor-pointer relative !max-w-lg h-[40vh] perspective-[1000px]">
                    <div className="box-c h-full w-full transform transition-transform duration-500 ease-in-out">
                        <div
                            className="front absolute h-full w-full flex items-center justify-center bg-gradient-to-r from-white to-gray-100 rounded-md">
                            <div className="content transform translate-z-[60px]">
                                <img src={food} alt="Food Bank" className="w-[25rem] h-[17rem] p-4"/>
                                <h3 className="text-xl mt-4 font-semibold text-gray-700">Food Bank</h3>
                            </div>
                        </div>
                        <div
                            className="back-c absolute h-full w-full bg-black flex items-center justify-center text-white rounded-md transform rotateX-180">
                            <div className="content transform translate-z-[60px]">
                                <p className="text-xl leading-8 px-12">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nam
                                    expedita exercitationem?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whole-con cursor-pointer relative !max-w-lg h-[40vh] perspective-[1000px]">
                    <div className="box-c h-full w-full transform transition-transform duration-500 ease-in-out">
                        <div
                            className="front absolute h-full w-full flex items-center justify-center bg-gradient-to-r from-white to-gray-100 rounded-md">
                            <div className="content transform translate-z-[60px]">
                                <img src={clothes} alt="Food Bank" className="w-[25rem] h-[17rem] p-4"/>
                                <h3 className="text-xl mt-4 font-semibold text-gray-700">Food Bank</h3>
                            </div>
                        </div>
                        <div
                            className="back-c absolute h-full w-full bg-black flex items-center justify-center text-white rounded-md transform rotateX-180">
                            <div className="content transform translate-z-[60px]">
                                <p className="text-xl leading-8 px-12">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nam
                                    expedita exercitationem?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whole-con cursor-pointer relative !max-w-lg h-[40vh] perspective-[1000px]">
                    <div className="box-c h-full w-full transform transition-transform duration-500 ease-in-out">
                        <div
                            className="front absolute h-full w-full flex items-center justify-center bg-gradient-to-r from-white to-gray-100 rounded-md">
                            <div className="content transform translate-z-[60px]">
                                <img src={linefood} alt="Food Bank" className="w-[25rem] h-[17rem] p-4"/>
                                <h3 className="text-xl mt-4 font-semibold text-gray-700">Food Bank</h3>
                            </div>
                        </div>
                        <div
                            className="back-c absolute h-full w-full bg-black flex items-center justify-center text-white rounded-md transform rotateX-180">
                            <div className="content transform translate-z-[60px]">
                                <p className="text-xl leading-8 px-12">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nam
                                    expedita exercitationem?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="whole-con">*/}
                {/*    <div className="box-c">*/}
                {/*        <div className="front">*/}
                {/*            <div className="content">*/}
                {/*                <img src={linefood}/>*/}
                {/*                <h3>Donation of Food</h3>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="back-c">*/}
                {/*            <div className="content">*/}
                {/*                <p>*/}
                {/*                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure*/}
                {/*                    nam expedita exercitationem?*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="whole-con">*/}
                {/*    <div className="box-c">*/}
                {/*        <div className="front">*/}
                {/*            <div className="content">*/}
                {/*                <img src={clothes}/>*/}
                {/*                <h3>Donation of Clothes</h3>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="back-c">*/}
                {/*            <div className="content">*/}
                {/*                <p>*/}
                {/*                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure*/}
                {/*                    nam expedita exercitationem?*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}


            </section>


        </div>


    )
}

export default Language
