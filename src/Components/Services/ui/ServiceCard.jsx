
export default function ServiceCard(
    {Icon, title, image,  description}
) {
    return (
        <div className="text-center max-w-md md:max-w-lg bg-white px-5 py-4 rounded-md shadow-lg">
            {image && (<img src={image} alt="default_image"
                className="mx-auto h-40 p-5"
            />)}
            {Icon && (<Icon className="mx-auto text-2xl md:text-3xl my-4"/>)}
            <div>
                <h1 className="md:text-xl font-semibold mb-2">{title}</h1>
                <span className="text-sm md:text-lg text-gray-700">
                    {description}
                </span>
            </div>
        </div>
    )
}