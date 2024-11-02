import { MailOutlined, PhoneOutlined, WhatsAppOutlined, FacebookOutlined, LinkedinOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 w-full">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  md:place-items-center">

                <div>
                    <h4 className="text-yellow-500 font-semibold mb-4 text-xl">ABOUT</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Our Story</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Scholarships</a></li>
                        <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-yellow-500 font-semibold mb-4 text-xl">COUNTRIES</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Study in Canada</a></li>
                        <li><a href="#" className="hover:underline">Study in USA</a></li>
                        <li><a href="#" className="hover:underline">Study in UK</a></li>
                        <li><a href="#" className="hover:underline">Study in Australia</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-yellow-500 font-semibold mb-4 text-xl">SOCIALS</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <MailOutlined className="mr-2" /> info@edubridge.com
                        </li>
                        <li className="flex items-center">
                            <PhoneOutlined className="mr-2" /> +260974563737
                        </li>
                        <li className="flex items-center">
                            <PhoneOutlined className="mr-2" /> +260974568909
                        </li>
                    </ul>
                </div>

            </div>

            <div className="flex flex-col items-center container mx-auto mt-10 text-center md:text-left">
                <h4 className="text-yellow-500 font-semibold mb-4 text-xl">EDUBRIDGE EDUCATION CENTER</h4>
                <p className="mb-4 ">Improve your English and French speaking, listening, reading, and writing skills with our expert teachers.</p>
                <div className="flex justify-center md:justify-start space-x-4">
                    <WhatsAppOutlined className="text-yellow-500 text-2xl" />
                    <FacebookOutlined className="text-yellow-500 text-2xl" />
                    <LinkedinOutlined className="text-yellow-500 text-2xl" />
                </div>
            </div>

            <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 text-center flex justify-center md:text-left">
                <p>Copyright © 2024 All Rights Reserved | Developed by D&G Technologies</p>
            </div>
        </footer>
    );
};

export default Footer;
