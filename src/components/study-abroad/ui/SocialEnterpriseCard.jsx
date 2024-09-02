const SocialEnterpriseCard = ({title}) => {
    return (
        <div className="max-w-sm sm:max-w-md md:max-w-lg text-center flex flex-col gap-3 p-5 py-6 bg-white rounded-md shadow-lg">
            <h1 className="md:text-2xl font-semibold mb-2">{title}</h1>
            <span className="mb-3 text-sm md:text-lg text-gray-700">
                Improve your English and French speaking, listening,reading and writing skills with our expert teachersking, listening,reading
                and writing skills with us.
            </span>
        </div>
    )
}

export default SocialEnterpriseCard