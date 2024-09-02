import {FileTextOutlined} from "@ant-design/icons";

const DefaultDocument = ({title}) => {
    return (
        <div className="bg-black px-3 py-2 gap-4 text-white text-xl flex max-w-[165px]">
            <FileTextOutlined />
            <span>{title}</span>
        </div>
    )
}

export default DefaultDocument;