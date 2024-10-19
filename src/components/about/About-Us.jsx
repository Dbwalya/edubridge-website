import './About-Us.css'
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
            <div className="flex justify-end about-section relative" style={{backgroundImage: `url(${aboutUsImg})`}}>
                <div className="absolute bg-white h-full w-1/2 right-0 top-0 z-0"></div>
                <div className="bg-white max-w-[890px] px-20 py-28 z-10">
                    <h1 className="font-semibold text-center md:text-left mb-10 text-6xl">About Us</h1>
                    <p className="text-gray-600 mb-10 text-lg text-center md:text-left md:text-3xl">
                        Edubridge Education Centre was established in July 2024, As a sister organization to Jasper
                        Consultancy, founded in 2013, Edubridge leverages a strong foundation of expertise and
                        experience.
                    </p>
                    <div className="flex justify-between text-lg font-bold gap-4">
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
