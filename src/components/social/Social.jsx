import React from 'react'
import './Social.css'
import kids from '../../assets/kids.jpg'
import kidss from '../../assets/kidss.jpg'
const Language = () => {
  return (
    <div class="social-container">
        <h2>Our Social Enterprise Respsibilities</h2>
        <p className="text-gray-600 text-center text-md md:text-lg">
        As a social enterprise, our online study center is dedicated to making a positive impact by focusing on the education and empowerment of orphanages. We reinvest our resources to provide these vulnerable youth with access to quality learning opportunities and support, helping them build a brighter future. Through our commitment to education and social responsibility, we strive to create meaningful change and offer a path to success for those who need it most.
          </p>
        <section class="services">
            <div class="card">
                <div class="content">
                    <div class="so-icon"> <img src= {kids} alt=''/> </div>
                    <div class="title">Community Development</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <div class="so-icon"><img src= {kidss} alt=''/></div>
                    <div class="title">Environmental Sustainability</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                </div>
            </div>
           
            
        
        </section>
    </div>



  )
}

export default Language
