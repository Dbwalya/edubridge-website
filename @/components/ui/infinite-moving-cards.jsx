import { cn } from "../../lib/utils.js";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
                                        items,
                                        direction = "left",
                                        speed,
                                        pauseOnHover = true,
                                        className,
                                    }) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        function handleResize() {
            setSpeedBasedOnScreenSize();
        }

        // Initial setup of animation and screen-based speed
        addAnimation();
        setSpeedBasedOnScreenSize();

        // Adjust speed on window resize
        window.addEventListener("resize", handleResize);

        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            getDirection();
            setStart(true);
        }
    }

    function setSpeedBasedOnScreenSize() {
        if (containerRef.current) {
            let duration;
            const screenWidth = window.innerWidth;

            if (screenWidth <= 640) {
                duration = "5s"; // Mobile view - fast
            } else if (screenWidth <= 1024) {
                duration = "16s"; // Small screens - normal
            } else {
                duration = "24s"; // Larger screens - slower
            }

            containerRef.current.style.setProperty("--animation-duration", duration);
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
