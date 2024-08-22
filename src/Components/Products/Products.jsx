

import React from 'react'
import './Products.css'
import english from '../../assets/english.jpg'
import french from '../../assets/french.jpg'
import right_arrow from '../../assets/right_arrow.png'


const Products = () => {
  return (

    <section>
    <div class="row">
      <h1>Learn English and French  with Us</h1>
      <p>Improve your English and French speaking, listening,reading and writing skills with our expert teachers</p>
    </div>
    <div class="row">

     

      <div class="column">
        <div class="card">
          <div class="icon">
          <i class="fa-solid fa-people-arrows"></i>
          </div>
          <h3>Learn English</h3>
          <p className="text-gray-600 text-md md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
            commodi.
          </p>
          <button className='btn'>Learn More <img src={right_arrow} alt='' /> </button>
        </div>
      </div>
    
      <div class="column">
        <div class="card">
          <div class="icon">
          <i class="fa-solid fa-people-arrows"></i>
          </div>
          <h3>Learn French</h3>
          <p className="text-gray-600 text-md md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
            commodi.
          </p>

          <button className='btn'>Learn More <img src={right_arrow} alt='' /> </button>
        </div>
      </div>
    </div>
  </section>


  )
}

export default Products
