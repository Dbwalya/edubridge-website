import './About-Us.css'
import Footer from '../../Footer';
import Subscribe from "../subscribe/Subscribe.jsx";
import Book from "../workstation/Workstation.jsx";
import aboutUsImg from '../../assets/hat.jpg'
import DefaultNavbar from "../navbar/navbar.component.jsx";
import student_journey from "../../assets/hassle-free-student-journey.png"
import { InfiniteMovingCardsDemo }  from "../Infinite-cards.component.jsx";
import HeroComponent from "../../components/hero/hero.component.jsx";

    const AboutUs = () => {

        const testimonials = [
            {
                quote: "Shortlisting Universities and Application Guidance.",

            },
            {
                quote: "Assistance in scholarship and visa",

            },
            {
                quote: "Craft stand out resume",
            },
            {
                quote: "Writing stellar Essays and Letters of recommendation.",
            },
            {
                quote: "Networking with Alumni meeting the representatives",

            },
            {
                quote: "Guidance in building overall strong applications through extramural engagements.",

            },
        ];

    return (
        <div>
            <DefaultNavbar/>
            <HeroComponent
                title="About Edubridge"
                description="
                Edubridge Education Centre was established
                in July 2024 under the leadership of Managing Director Ms. Juliana
                Nkhuwa. Formally known as Jasper Consultancy, founded in 2013, Edubridge leverages a
                 strong foundation of expertise and
                experience. We have assisted so far ______ number of students securing USD _______
                 scholarship.
                "
                button="Learn More"
            />
            <div className="p-4  mx-auto pt-14 pb-14">
                <h1 className="mb-8 text-center text-3xl font-bold text-yellow-500">Mission and Vision</h1>

                <ul className="grid place-content-center sm:grid-cols-2 gap-8 w-4/5 mx-auto">
                    <li className="flex max-w-5xl shadow-md p-3  py-4 rounded-lg bg-gray-50 border">
                        {/*<div className="px-4 text-5xl font-extralight text-indigo-700">01.</div>*/}
                        <div className="w-full flex flex-col justify-center">
                            <div className="text-xl font-bold  text-center">Mission</div>
                            <p className="text-gray-600 py-2 text-sm leading-7">We love numbers! We collect data and
                                Empower students globally to achieve their dreams of studying abroad by providing
                                comprehensive guidance and support throughout the overseas education process.
                                Bridge the gap between aspiring students and global educational opportunities, fostering
                                a brighter future for students and communities.
                            </p>
                        </div>
                    </li>
                    <li className="flex max-w-5xl shadow-md p-3 py-4 rounded-lg bg-gray-50 border">
                        {/*<div className="px-4 text-5xl font-extralight text-indigo-700">02.</div>*/}
                        <div>
                            <div className="text-xl font-bold  text-center">Vision</div>
                            <p className="py-2 text-sm leading-7 text-gray-600">Solutions are born from proper
                                We envision being Africa's leading overseas education consulting firm, recognized for
                                our dedication to student success and our ability to connect talent with world-class
                                educational institutions.
                            </p>
                        </div>
                    </li>
                    {/*<li className="flex">*/}

                </ul>
            </div>
            <div className="bg-gray-100 pb-20">
                 <div className=" py-10 w-4/5 mx-auto px-5 mt-16 ">
            </div>

                <div className="text-center">
                    <h2 className="font-semibold text-3xl text-center">Student Journey</h2>
                    <p className="max-w-md mx-auto mt-2 text-gray-500">A responsive documentation template built for
                        everyone who wants
                        to create a plugin.</p>
                </div>

                <div className="md:w-4/5 flex justify-center mx-auto px-5 mt-16 ">
                    <img src={student_journey} alt="" />
                </div>

            {/*    <div className="grid md:grid-cols-2 w-4/5 mx-auto gap-10 mt-10 place-items-center">*/}


            {/*<div className="flex gap-4 items-start p-4 py-5 rounded-lg">*/}

            {/*    <div>*/}
            {/*        <div>*/}

            {/*            <h3 className="font-semibold text-xl text-center">Value Proposition</h3>*/}
            {/*        </div>*/}
            {/*        <ul className="mt-8 space-y-3 font-medium ">*/}
            {/*            <li className="flex items-start lg:col-span-1">*/}
            {/*                <div className="flex-shrink-0">*/}
            {/*                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">*/}
            {/*                        <path fill-rule="evenodd"*/}
            {/*                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                              clip-rule="evenodd"></path>*/}
            {/*                    </svg>*/}
            {/*                </div>*/}
            {/*                <p className="ml-3 leading-5 text-gray-600 text-center">*/}
            {/*                    Comprehensive support services from initial consultation to post-arrival assistance.*/}
            {/*                </p>*/}
            {/*            </li>*/}
            {/*            <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                <div className="flex-shrink-0">*/}
            {/*                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">*/}
            {/*                        <path fill-rule="evenodd"*/}
            {/*                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                              clip-rule="evenodd"></path>*/}
            {/*                    </svg>*/}
            {/*                </div>*/}
            {/*                <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                    Personalized Guidance.*/}
            {/*                </p>*/}
            {/*            </li>*/}
            {/*            <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                <div className="flex-shrink-0">*/}
            {/*                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">*/}
            {/*                        <path fill-rule="evenodd"*/}
            {/*                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                              clip-rule="evenodd"></path>*/}
            {/*                    </svg>*/}
            {/*                </div>*/}
            {/*                <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                    Expertise in various educational systems and pathways across multiple countries.*/}
            {/*                </p>*/}
            {/*            </li>*/}
            {/*            <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                <div className="flex-shrink-0">*/}
            {/*                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">*/}
            {/*                        <path fill-rule="evenodd"*/}
            {/*                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                              clip-rule="evenodd"></path>*/}
            {/*                    </svg>*/}
            {/*                </div>*/}
            {/*                <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                    Online study center.*/}
            {/*                </p>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*        <div className="flex gap-4 items-start">*/}

            {/*            <div>*/}
            {/*                <h3 className="font-semibold text-xl text-center">Target Market</h3>*/}
            {/*                <ul className="mt-8 space-y-3 font-medium">*/}
            {/*                    <li className="flex items-start lg:col-span-1">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                           High school students seeking undergraduate programs abroad.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                           Undergraduate students looking for postgraduate degrees or personalized courses.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                           Working Professionals interested in MBA*/}
            {/*                        </p>*/}
            {/*                    </li>*/}

            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}


            {/*        <div className="flex gap-4 items-start">*/}

            {/*            <div>*/}
            {/*                <h3 className="font-semibold text-xl text-center">Revenue Streams</h3>*/}
            {/*                <ul className="mt-8 space-y-3 font-medium">*/}
            {/*                    <li className="flex items-start lg:col-span-1">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                           Application Processing Fees including university applications, document editing.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                           Visa Service Fees*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                           Revenue from seminars/workshops*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                            Partnership Commissions*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                           Study center subscriptions*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}


            {/*        <div className="flex gap-4 items-start">*/}
            {/*/!*<span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">*!/*/}
            {/*/!*<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"*!/*/}
            {/*/!*     className="w-5 h-5"><path*!/*/}
            {/*/!*    d="M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88072 3.11929 7 4.5 7C5.88072 7 7 5.88072 7 4.5C7 3.11929 5.88072 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5ZM10.5 2C9.11929 2 8 3.11929 8 4.5C8 5.88072 9.11929 7 10.5 7C11.8807 7 13 5.88072 13 4.5C13 3.11929 11.8807 2 10.5 2ZM9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5ZM2 10.5C2 9.11929 3.11929 8 4.5 8C5.88072 8 7 9.11929 7 10.5C7 11.8807 5.88072 13 4.5 13C3.11929 13 2 11.8807 2 10.5ZM4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5C6 9.67157 5.32843 9 4.5 9ZM10.5 8C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13C11.8807 13 13 11.8807 13 10.5C13 9.11929 11.8807 8 10.5 8ZM9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5Z"*!/*/}
            {/*/!*    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>*!/*/}
            {/*/!*</span>*!/*/}
            {/*            <div>*/}
            {/*                <h3 className="font-semibold text-xl text-center">Cost Structures</h3>*/}
            {/*                <ul className="mt-8 space-y-3 font-medium">*/}
            {/*                    <li className="flex items-start lg:col-span-1">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                          Collaboration with global universities / Colleges for better access to programs and services.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                            Partnerships with local schools for outreach programs and workshops to connect with prospective students.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                            Built in user authentication.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                            Easy Integration with existing apps and tools.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                            Logs for your API calls.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}


            {/*        <div className="flex gap-4 items-start">*/}
            {/*/!*<span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">*!/*/}
            {/*/!*<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"*!/*/}
            {/*/!*     className="w-5 h-5"><path*!/*/}
            {/*/!*    d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"*!/*/}
            {/*/!*    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>*!/*/}
            {/*/!*</span>*!/*/}
            {/*            <div>*/}
            {/*                <h3 className="font-semibold text-xl text-center">Key Resources </h3>*/}
            {/*                <ul className="mt-8 space-y-3 font-medium">*/}
            {/*                    <li className="flex items-start lg:col-span-1">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                            Experienced Team*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                           User-friendly website and management software for client interaction and application tracking.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                            Relationships with universities, alumni and industry professionals to provide comprehensive support.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}

            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}


            {/*        <div className="flex gap-4 items-start">*/}

            {/*            <div>*/}
            {/*                <h3 className="font-semibold text-xl text-center">Major Resources</h3>*/}
            {/*                <ul className="mt-8 space-y-3 font-medium">*/}
            {/*                    <li className="flex items-start lg:col-span-1">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                           Collaboration with universities / colleges for better access to programs and services.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                            Partnerships with local schools for outreach programs and workshops to connect with prospective students.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}

            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="flex gap-4 items-start">*/}

            {/*            <div>*/}
            {/*                <h3 className="font-semibold text-xl text-center">Marketing Strategy</h3>*/}
            {/*                <ul className="mt-8 space-y-3 font-medium">*/}
            {/*                    <li className="flex items-start lg:col-span-1">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                          Digital Marketing: Utilizing social media, SEO, and content marketing to reach students.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                           Participating in education fairs, workshops, and school visits to reach potential applicants.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                           Encouraging happy clients to refer friends and family through incentives.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}

            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="flex gap-4 items-start">*/}

            {/*            <div>*/}
            {/*                <h3 className="font-semibold text-xl text-center">Student Relationship</h3>*/}
            {/*                <ul className="mt-8 space-y-3 font-medium">*/}
            {/*                    <li className="flex items-start lg:col-span-1">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                           Building strong relationships through one-on-one consultations and follow-up support.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                            Feedback Mechanisms: Collecting feedback from students to continuously improve services.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                           Community building: Creating online forums or groups for current and prospective students to share experiences and tips.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}

            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div> <div className="flex gap-4 items-start">*/}

            {/*            <div>*/}
            {/*                <h3 className="font-semibold text-xl text-center">Student Relationship</h3>*/}
            {/*                <ul className="mt-8 space-y-3 font-medium">*/}
            {/*                    <li className="flex items-start lg:col-span-1">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                           Student Satisfaction: Tracking feedback and tesimonials to ensure service quality.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}
            {/*                    <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                            Conversions Rates: Monitoring the percentage of inquiries that lead to successful placements.*/}
            {/*                        </p>*/}
            {/*                    </li> <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">*/}
            {/*                        <div className="flex-shrink-0">*/}
            {/*                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor"*/}
            {/*                                 viewBox="0 0 20 20">*/}
            {/*                                <path fill-rule="evenodd"*/}
            {/*                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
            {/*                                      clip-rule="evenodd"></path>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                        <p className="ml-3 leading-5 text-gray-600">*/}
            {/*                           Student Outcomes: Evaluating the academic performance and career progression of students placed abroad.*/}
            {/*                        </p>*/}
            {/*                    </li>*/}

            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            </div>

            <Subscribe/>

            <Footer/>

        </div>
    )
    }

export default AboutUs
