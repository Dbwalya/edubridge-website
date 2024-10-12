import {FileTextOutlined} from "@ant-design/icons";

const DefaultDocument = ({title, description}) => {
    return (
        <div class="flex bg-gray-800 justify-center rounded-xl shadow-lg">
            <div
                className="block max-w-[18rem] rounded-lg text-white">
                <div className="border-b-2 border-black/20 px-6 py-3 flex justify-between text-white font-bold text-xl">{title} <FileTextOutlined className="text-gray-400" /></div>
                <div className="p-6">
                <p className="text-base text-gray-300">
                {description}
                </p>
                </div>
            </div>
        </div>
    )
}

export default DefaultDocument;