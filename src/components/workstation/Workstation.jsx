import logo from '../../assets/logo.png';
import {RightCircleOutlined} from "@ant-design/icons";
import bookImage from "../../assets/bb.jpg"

const Book = () => {
    return (
        <div className="w-full py-20 my-20 bg-cover bg-center grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-around"
            style={{ backgroundImage: `url(${bookImage})` }}
        >
            <div className="">
                <img src={logo} alt="" className="h-40 mx-auto" />
            </div>

            <div className="">
                <h2 className="text-center text-4xl font-semibold text-white my-2">Book an Affordable Work Station</h2>
                <p className="text-center text-white text-lg my-4 leading-[35px]">
                    We offer affordable work station with 24/7 power supply and unlimited internet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et commodi.
                </p>
            </div>

            <button className="p-4 mx-auto gap-2 hover:gap-4 bg-black text-white text-xl md:h-fit md:w-fit w-2/3  rounded-full cursor-pointer border-0 flex items-center justify-center transition duration-300 hover:bg-[#d3ad56]">
                Book Now
                <RightCircleOutlined />
            </button>
        </div>
    );
};

export default Book;
