import { InfiniteMovingCards } from "../../@/components/ui/infinite-moving-cards.jsx";
import image_1 from "../assets/image-1.jpg";
import image_2 from "../assets/image-2.jpg";
import image_3 from "../assets/image-3.jpg";
import image_4 from "../assets/image-4.jpg";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="bg-gray-100 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden py-20">
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
    );
}

const testimonials = [
    {
        quote: "To be, or not to be, that is the question...",
        name: "William Shakespeare",
        title: "Hamlet",
        image: image_1
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
        image: image_2
    },
    {
        quote: "It is a truth universally acknowledged...",
        name: "Jane Austen",
        title: "Pride and Prejudice",
        image: image_3
    },
    {
        quote: "Call me Ishmael...",
        name: "Herman Melville",
        title: "Moby-Dick",
        image: image_4
    },
];
