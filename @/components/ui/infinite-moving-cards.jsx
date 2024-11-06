import { cn } from "../../lib/utils.js";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
                                        items,
                                        direction = "left",
                                        speed = "fast",
                                        pauseOnHover = true,
                                        className,
                                    }) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation();
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "right" ? "forwards" : "reverse"
            );
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            const duration =
                speed === "fast" ? "10s" : speed === "normal" ? "20s" : "40s";
            containerRef.current.style.setProperty("--animation-duration", duration);
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative w-full overflow-x-auto", // Ensure horizontal scrolling
                className
            )}
            style={{
                scrollBehavior: "smooth", // Enables smooth scrolling
                WebkitOverflowScrolling: "touch", // For mobile momentum scrolling
            }}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "infinite-card-container flex flex-nowrap gap-4 py-4", // Ensures flex wrapping and spacing
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.concat(items).map((item, idx) => (
                    <li
                        key={idx}
                        className="infinite-card-item flex-shrink-0 flex items-center text-2xl bg-gray-800 shadow text-center rounded-2xl border border-slate-700 px-6 py-6"
                        style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            width: "300px",
                            height: "380px",
                            minWidth: "300px", // Ensure cards adjust well on mobile
                        }}
                    >
                        <blockquote>
                            <p className="text-2xl font-bold leading-[1.6] text-gray-100">
                                {item.quote}
                            </p>
                            <div className="mt-4 flex flex-col items-start">
                                <span className="text-xl text-gray-400">{item.name}</span>
                                <span className="text-sm text-gray-400">{item.title}</span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
