export default function ServiceCard (
    { title, description, image}
) {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
        <img className="w-full" src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-6">
                <div className="font-bold text-xl text-[#d3ad56] mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                {description}
                </p>
            </div>
        </div>

    )
}