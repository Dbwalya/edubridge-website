import desk from '../../assets/desk.png'
import './Workstation.css'
import logo from '../../assets/logo.png'
import right_arrow from '../../assets/right_arrow.png'
import {ArrowRightOutlined} from "@ant-design/icons";

const Workstation = () => {
  return (
    <div className='work-section'>
      <div className="desk-img">
      <img src={desk} alt=''/>

      </div>

        <div className="left-text">
            <img src={logo} alt='' className="object-contain"/>

            <h1>Book an Affordable Work Station</h1>
            <p className="text-gray-600 text-center text-md md:text-lg">
                We offer affordable work station with 24/7 power supply and unlimited internet
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                asperiores natus ad morem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
                commodi.
            </p>
            <button
                className="bg-black text-white px-4 py-2 rounded-lg
                     mt-10 hover:bg-gray-700 w-fit
                      flex items-center hover:gap-2">
                Learn more
                <ArrowRightOutlined className="text-sm ml-2"/>
            </button>
        </div>
    </div>
  )
}

export default Workstation
