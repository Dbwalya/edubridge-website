import bannerImage from '../../assets/stu.jpg'

const Banner = () => {
    return (
        <div className="py-20 bg-white">
            <div className="flex flex-col gap-3 text-center w-full mx-auto mb-6">
                <h2 className="text-4xl text-center font-semibold">Study Hub</h2>
                <p className="text-gray-600">Comprehensive online resources to enhance learning and prepare students for success.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-10 px-3 mx-auto md:px-16">
            <div
                className="flex flex-col col-span-3 relative justify-center items-start h-[300px] my-10 bg-cover bg-center"
                style={{
                   backgroundImage: `url(${bannerImage})`,
                }}
            >
                <div className="absolute w-full md:left-0 top-0 bg-[#E9AB17]/80 md:w-[150px] h-[80px]"></div>

                <h2 className="text-white text-3xl font-semibold pl-8">Quality digital learning with Edu-Hive Study Hub</h2>
            </div>

            <div className="col-span-2 flex flex-col justify-center ml-6">
                <h2 className="text-4xl mb-2 md:text-2.5xl font-medium">What's included in the Study Hub?</h2>
                <ul>
                    <li className="text-gray-600 leading-8 md:text-xl text-md mt-4">
                       1. Free online study content which covers the full syllabus
                    </li>
                    <li className="text-gray-600 md:text-xl text-md leading-8 mt-4">
                        2. Short quizzes to test understanding as you progress through the chapters
                    </li>
                    <li className="text-gray-600 md:text-xl text-md leading-8 mt-4">
                       3.  Practice and revision questions and flashcards, to help prepare you for your exam.
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Banner;
