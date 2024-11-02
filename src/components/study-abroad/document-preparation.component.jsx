import { useState } from 'react';

export default function DocumentPreparation() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="grid grid-cols-2 py-12">
            <div className="flex px-20 mx-auto">
                <div className="border-e border-gray-200 dark:border-neutral-700">
                    <nav className="flex flex-col space-y-2 font-semibold" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                        {[
                            { id: 1, title: 'Resume' },
                            { id: 2, title: 'SOP' },
                            { id: 3, title: 'LORs' },
                            { id: 4, title: 'Essays' },
                            { id: 5, title: 'Videos' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                                className={`hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap ${
                                    activeTab === tab.id ? 'text-blue-600 border-blue-500' : 'text-black dark:text-neutral-400'
                                } hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none`}
                                aria-selected={activeTab === tab.id}
                                aria-controls={`tab-content-${tab.id}`}
                                role="tab"
                            >
                                {tab.title}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="ms-3">
                    <div
                        id="tab-content-1"
                        role="tabpanel"
                        aria-labelledby="tab-item-1"
                        className={activeTab === 1 ? '' : 'hidden'}
                    >
                        <p className="text-gray-500 dark:text-neutral-400">
                            Our experts will guide you in crafting a professional resume that highlights your academic
                            achievements and skills, ensuring you stand out in your job search. Through structured guidance,
                            we assist in tailoring your resume to reflect both your academic pursuits and unique strengths,
                            making a positive impression on potential employers. You'll learn best practices for resume
                            formatting, content organization, and impactful phrasing.
                        </p>
                    </div>
                    <div
                        id="tab-content-2"
                        role="tabpanel"
                        aria-labelledby="tab-item-2"
                        className={activeTab === 2 ? '' : 'hidden'}
                    >
                        <p className="text-gray-500 dark:text-neutral-400">
                            Create a compelling Statement of Purpose that effectively conveys your academic goals, research
                            interests, and reasons for choosing your desired program. Our expert feedback helps you clarify
                            and express your vision, offering insights into what admission committees seek in a statement.
                            We’ll assist in refining your draft to include clear, engaging language that shows your drive
                            and aligns with the program’s values and goals.
                        </p>
                    </div>
                    <div
                        id="tab-content-3"
                        role="tabpanel"
                        aria-labelledby="tab-item-3"
                        className={activeTab === 3 ? '' : 'hidden'}
                    >
                        <p className="text-gray-500 dark:text-neutral-400">
                            Learn how to request and structure Letters of Recommendation that provide strong, personalized
                            endorsements from your professors or employers. Our guidance ensures you approach recommenders
                            strategically, requesting specific, relevant endorsements that highlight your academic and
                            professional achievements. With our advice, you’ll compile compelling recommendations that
                            strengthen your application and present you as a well-rounded candidate.
                        </p>
                    </div>
                    <div
                        id="tab-content-4"
                        role="tabpanel"
                        aria-labelledby="tab-item-4"
                        className={activeTab === 4 ? '' : 'hidden'}
                    >
                        <p className="text-gray-500 dark:text-neutral-400">
                            Receive assistance in writing impactful application essays that showcase your personality,
                            experiences, and aspirations to admission committees. We provide feedback to help you craft
                            stories that make you memorable, emphasizing your values and character in ways that resonate
                            with reviewers. Learn techniques for opening with a compelling hook, building a narrative arc,
                            and conveying your unique motivations for applying to the program.
                        </p>
                    </div>
                    <div
                        id="tab-content-5"
                        role="tabpanel"
                        aria-labelledby="tab-item-5"
                        className={activeTab === 5 ? '' : 'hidden'}
                    >
                        <p className="text-gray-500 dark:text-neutral-400">
                            Get expert tips and personalized advice on creating compelling video submissions that enhance
                            your university application. We'll help you craft a narrative that not only showcases your
                            academic achievements but also highlights your unique communication skills, creativity, and
                            personality. Learn how to present yourself confidently on camera, make a lasting impression on
                            the admissions committee, and effectively convey your passion and fit for the program. Our
                            guidance ensures your video submission stands out, adding a dynamic and engaging dimension to
                            your application.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <span className="leading-12 text-4xl font-bold text-gray-700 text-center">
                    Improve your English and French speaking, listening, reading,
                    and writing skills with our expert teachers.

                </span>
            </div>
        </div>
    );
}
