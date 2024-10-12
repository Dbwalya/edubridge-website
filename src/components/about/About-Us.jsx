// import Booking from '../Booking/Book';
import { motion } from "framer-motion";
import hero from '../../assets/hero.jpg'
import team from '../../assets/team.png'
import eff from '../../assets/eff.png'
import './About-Us.css'
import hat from '../../assets/hat.jpg'
import Footer from '../../Footer';
import Subscribe from "../subscribe/Subscribe.jsx";
import Book from "../workstation/Workstation.jsx";
import aboutUsImg from '../../assets/hat.jpg'
import DefaultNavbar from "../navbar/navbar.component.jsx";
import { InfiniteMovingCardsDemo }  from "../Infinite-cards.component.jsx";

    const AboutUs = () => {
    return (
        <div>
            <DefaultNavbar/>
            <div className="about-section" style={{backgroundImage: `url(${aboutUsImg})`}}>
                <div className="inner-container">
                    <h1>About Us</h1>
                    <p className="text">
                        Edubridge Education Centre was established in July 2024, As a sister organization to Jasper
                        Consultancy, founded in 2013, Edubridge leverages a strong foundation of expertise and
                        experience.
                    </p>
                    <div className="skills">
                        <span>Preparedness</span>
                        <span>Execellence</span>
                        <span>Effiency</span>
                    </div>
                </div>
            </div>
            <InfiniteMovingCardsDemo />


            <Book/>
            <Subscribe/>

            <Footer/>

        </div>
    )
}

export default AboutUs
