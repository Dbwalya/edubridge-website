

import React from 'react'
import './Products.css'
import english from '../../assets/english.jpg'
import french from '../../assets/french.jpg'
import right_arrow from '../../assets/right_arrow.png'
import {ArrowRightOutlined} from "@ant-design/icons";


const Products = () => {
  return (

    <section>
    <div className="row">
      <h1>Learn English and French  with Us</h1>
      <p>Improve your English and French speaking, listening,reading and writing skills with our expert teachers</p>
    </div>
    <div className="row">

     

      <div className="column">
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-people-arrows"></i>
          </div>
          <h3>Learn English</h3>
          <p className="text-gray-600 text-md md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
            commodi.
          </p>
          <button
              className="mt-8 mx-auto flex gap-3 items-center px-6 py-2 bg-black rounded-full text-white fade-in-up"
          >
            Learn More
            <ArrowRightOutlined/>
          </button>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-people-arrows"></i>
          </div>
          <h3>Learn French</h3>
          <p className="text-gray-600 text-md md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
            commodi.
          </p>

          <button
              className="mt-8 mx-auto flex gap-3 items-center px-6 py-2 bg-black rounded-full text-white fade-in-up"
          >
            Learn More
            <ArrowRightOutlined/>
          </button>
        </div>
      </div>
    </div>
    </section>


  )
}

export default Products
