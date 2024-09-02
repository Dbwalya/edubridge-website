import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import online_course from "../../../assets/online-course-1.jpg";
import online_course_1 from "../../../assets/online-course-2.jpg";
import online_course_2 from "../../../assets/online-course-3.jpg";

const CourseCarousel = () => {
    return (
        <div>
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {


    return (
        <section className="relative">
            <div className="sticky top-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">

                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}

            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative lg:h-[450px] max-w-sm overflow-hidden"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

export default CourseCarousel;

const cards = [
    {
        url: online_course,
        title: "Title 1",
        id: 1,
    }, {
        url: online_course_1,
        title: "Title 1",
        id: 2,
    },{
        url: online_course_2,
        title: "Title 1",
        id: 3,
    },
];