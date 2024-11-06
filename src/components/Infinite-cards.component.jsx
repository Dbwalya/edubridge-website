import { InfiniteMovingCards } from "../../@/components/ui/infinite-moving-cards.jsx";


export function InfiniteMovingCardsDemo({ items }) {
    return (
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden py-20">
            <InfiniteMovingCards items={items} direction="right" speed="slow" />
        </div>
    );
}


