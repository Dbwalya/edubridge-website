import {FileTextOutlined} from "@ant-design/icons";

const DefaultDocument = ({title, description}) => {
    return (
        <div class="flex justify-center bg-white shadow-lg">
            <div
                className="block max-w-[18rem] rounded-lg text-white">
                <div className="border-b-2 border-black/20 px-6 py-3 flex justify-between text-[#d3ad56] font-bold text-xl">{title} <FileTextOutlined className="text-[#d3ad56]" /></div>
                <div className="p-6">
                {/* <h5 className="mb-2 text-xl text-[#d3ad56] font-medium leading-tight">
                    Warning card title
                </h5> */}
                <p className="text-base text-[#d3ad56]">
                {description}
                </p>
                </div>
            </div>
        </div>
    )
}

export default DefaultDocument;