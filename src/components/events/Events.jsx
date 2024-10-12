import eventd from '../../assets/eventd.jpg'
import './Events.css'
import {ArrowRightOutlined, PaperClipOutlined} from "@ant-design/icons";
import events from '../../assets/events.png'
import Subscribe from '../subscribe/Subscribe.jsx';
import HeroComponent from "../hero/hero.component.jsx";
import webinarIMG from '../../assets/webinar.jpg';
import Navbar from "../navbar/navbar.component.jsx";
import Footer from "../../Footer.jsx";

const Events = () => {
    return (
        <div className="w-screen flex flex-col">
            {/*<div className='event'>*/}
            {/*    <div className="event-text">*/}
            {/*        <h2>Lorem ipsum dolor sit amet, consectetur adipispquia. Voluptas dolorem eaque cum voluptatibus?</h2>*/}
            {/*        <h1>Welcome to our Events Section we hope you attend our events</h1>*/}
            {/*        <p>At our ty education tail pnd enjoyable</p>*/}
            {/*        <button className='btn'>Book Now</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Navbar/>
            <HeroComponent
                title="At our ty education tail pnd enjoyable"
                image={webinarIMG}
                description="Lorem ipsum dolor sit amet, consectetur adipispquia. Voluptas dolorem eaque cum voluptatibus?"
            />


            <div className="py-14 mx-auto w-5/6">
                <div className="">
                    <div className="">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 items-center mb-6">
                            <div className="flex flex-col space-y-6 col-span-4">
                                <h1 className="text-xl md:text-2xl text-center md:text-left tracking-wider">EduBridge
                                    Events</h1>
                                <span className="font-extrabold text-3xl text-center md:text-7xl md:text-left">
                               Register for our Upcoming Events now !
                            </span>
                            </div>
                            <div className="h-90 col-span-2 my-8">
                                <img src={events} className="h-full object-contain"/>
                            </div>
                        </div>
                        <div className="md:w-4/6">
                        <span className="text-gray-600 md:text-2xl text-md leading-7">
                            As an Online Study center ,social enterprise and study abroad agency,
                            our center combines a commitment to educational excellence with a strong dedication to social impact.
                            We offer personalized, high-quality learning experiences tailored to individual needs while supporting global educational opportunities that promote cross-cultural understanding. By reinvesting our profits into community-driven initiatives, we ensure that every
                            student's success also contributes to meaningful, positive change in the world.
                         </span>
                            <button
                                className="bg-black text-white px-5 py-3 rounded-full mt-10 hover:bg-gray-700 flex items-center hover:gap-2">
                                Learn more
                                <ArrowRightOutlined className="text-sm ml-2"/>
                            </button>
                        </div>
                    </div>

                </div>

            </div>

            <div className="event-whole">
                <div className="item-container">
                    <div className="img-container">
                        <img src={eventd}/>
                    </div>

                    <div className="body-container">
                        <div className="overlay"></div>

                        <div className="event-info">
                            <p className="title">Bubbe's Book Club</p>
                            <div className="separator"></div>
                            <p className="info">Bellmore, NY</p>
                            <p className="price">Free</p>

                            <div className="additional-info">
                                <p className="info">
                                    <i className="fas fa-map-marker-alt"></i>
                                    Grand Central Terminal
                                </p>
                                <p className="info">
                                    <i className="far fa-calendar-alt"></i>
                                    Sat, Sep 19, 10:00 AM EDT
                                </p>

                                <p className="info description">
                                    Welcome! Everyone has a unique perspective after reading a book, and we would love
                                    you
                                    to share yours with us! We meet one Sunday evening <span>more...</span>
                                </p>
                            </div>
                        </div>
                        <button className="action">Book it</button>
                    </div>
                </div>

                <div className="item-container">
                    <div className="img-container">
                        <img src={eventd}/>
                    </div>

                    <div className="body-container">
                        <div className="overlay"></div>

                        <div className="event-info">
                            <p className="title">The Overstory</p>
                            <div className="separator"></div>
                            <p className="info">New York, NY</p>
                            <p className="price">29$</p>

                            <div className="additional-info">
                                <p className="info">
                                    <i className="fas fa-map-marker-alt"></i>
                                    245 W 52nd St, New York
                                </p>
                                <p className="info">
                                    <i className="far fa-calendar-alt"></i>
                                    Sat, Sep 19, 10:00 AM EDT
                                </p>

                                <p className="info description">
                                    Welcome! Everyone has a unique perspective after reading a book, and we would love
                                    you
                                    to share yours with us! We meet one Sunday evening <span>more...</span>
                                </p>
                            </div>
                        </div>
                        <button className="action">Book it</button>
                    </div>
                </div>

                <div className="item-container">
                    <div className="img-container">
                        <img src={eventd}/>
                    </div>

                    <div className="body-container">
                        <div className="overlay"></div>

                        <div className="event-info">
                            <p className="title">The NY Festival</p>
                            <div className="separator"></div>
                            <p className="info">New York, NY</p>
                            <p className="price">70$</p>

                            <div className="additional-info">
                                <p className="info">
                                    <i className="fas fa-map-marker-alt"></i>
                                    245 W 52nd St, New York
                                </p>
                                <p className="info">
                                    <i className="far fa-calendar-alt"></i>
                                    Sat, Sep 19, 10:00 AM EDT
                                </p>

                                <p className="info description">
                                    Welcome! Everyone has a unique perspective after reading a book, and we would love
                                    you
                                    to share yours with us! We meet one Sunday evening <span>more...</span>
                                </p>
                            </div>
                        </div>
                        <button className="action">Book it</button>
                    </div>
                </div>

                <div className="item-container">
                    <div className="img-container">
                        <img src={eventd}/>
                    </div>

                    <div className="body-container">
                        <div className="overlay"></div>

                        <div className="event-info">
                            <p className="title">Tech Bubble Conf</p>
                            <div className="separator"></div>
                            <p className="info">New York, NY</p>
                            <p className="price">35$</p>

                            <div className="additional-info">
                                <p className="info">
                                    <i className="fas fa-map-marker-alt"></i>
                                    245 W 52nd St, New York
                                </p>
                                <p className="info">
                                    <i className="far fa-calendar-alt"></i>
                                    Sat, Sep 19, 10:00 AM EDT
                                </p>

                                <p className="info description">
                                    Welcome! Everyone has a unique perspective after reading a book, and we would love
                                    you
                                    to share yours with us! We meet one Sunday evening <span>more...</span>
                                </p>
                            </div>
                        </div>
                        <button className="action">Book it</button>
                    </div>
                </div>
            </div>

            {/*<div className="flex flex-col mx-auto w-full item-center md:max-w-xl lg:max-w-4xl bg-white bg-red-300 rounded-lg shadow-lg">*/}
            <form action="https://formbold.com/s/FORM_ID" method="POST"
                  className="grid grid-cols-1 gap-6 md:gap-8 mx-auto bg-white items-center w-4/5 py-10 rounded-2xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="firstname" className="text-gray-700 text-xl font-semibold mb-2">First
                            Name</label>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder="Jane"
                            className="border-b border-gray-300 focus:border-indigo-500 focus:outline-none p-2 text-lg font-medium text-gray-800 placeholder-gray-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="lastname" className="text-gray-700 text-xl font-semibold mb-2">Last Name</label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Cooper"
                            className="border-b border-gray-300 focus:border-indigo-500 focus:outline-none p-2 text-lg font-medium text-gray-800 placeholder-gray-500"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-700 text-xl font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@mail.com"
                            className="border-b border-gray-300 focus:border-indigo-500 focus:outline-none p-2 text-lg font-medium text-gray-800 placeholder-gray-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-gray-700 text-xl font-semibold mb-2">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="(319) 555-0115"
                            className="border-b border-gray-300 focus:border-indigo-500 focus:outline-none p-2 text-lg font-medium text-gray-800 placeholder-gray-500"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-gray-700 text-xl font-semibold mb-2">Message</label>
                        <textarea
                            rows="6"
                            name="message"
                            id="message"
                            placeholder="Write your message..."
                            className="border-b border-gray-300 focus:border-indigo-500 focus:outline-none p-2 text-lg font-medium text-gray-800 placeholder-gray-500 resize-none"
                        ></textarea>
                    </div>

                    <div className="mt-8 flex flex-col justify-center bg-blue-50 rounded-2xl shadow px-4 py-6">
                        <p className="text-gray-600 text-base text-center">Submit your Grade 12 certificate below</p>
                        <label htmlFor="upload"
                               className="flex items-center justify-center gap-2 text-indigo-600 cursor-pointer mt-4">
                            <PaperClipOutlined/>
                            Attach files
                            <input type="file" name="upload" id="upload" className="hidden"/>
                        </label>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <button type="submit" className="w-full md:max-w-lg mt-6 bg-black text-white p-3 rounded-full">
                        Send Message
                    </button>
                </div>
            </form>

            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default Events
