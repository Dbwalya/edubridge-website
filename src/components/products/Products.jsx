import { ArrowRightOutlined } from "@ant-design/icons";

import french_image from "../../assets/french_image.jpg";
import english_image from "../../assets/english_image.jpg";
import spanish_image from "../../assets/spanish_image.jpg";
import chinese_image from "../../assets/chinese_image.jpg";

const Products = () => {
  return (
      <section className="flex flex-col items-center justify-center py-20 md:px-28 bg-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Learn English and French with Us
          </h1>
          <p className="text-md md:text-lg text-gray-600 mt-4">
            Improve your English and French speaking, listening, reading, and writing skills with our expert teachers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-10 gap-6 mx-auto">
          <div className="w-full p-4">
            <div className="bg-white shadow-lg p-8 rounded-lg text-center">
              <div className="h-14 mb-5">
                <img src={english_image} alt="" className="h-full mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Learn English</h3>
              <p className="text-gray-600 text-md md:text-lg leading-relaxed">
                English studies at our university build proficiency and open doors to international
                careers. Our courses emphasize effective communication, critical analysis, and cultural awareness,
                making our graduates valuable assets in diverse professional environments.
              </p>
              <button
                  className="mt-8 flex items-center gap-3 px-6 py-2 bg-black text-white rounded-full mx-auto transition-all">
                Learn More <ArrowRightOutlined />
              </button>
            </div>
          </div>

          <div className="w-full p-4">
            <div className="bg-white shadow-lg p-8 rounded-lg text-center">

              <div className="h-14 mb-5">
                <img src={french_image} alt="" className="h-full mx-auto"/>
              </div>

              <h3 className="text-xl font-semibold mb-4">Learn French</h3>
              <p className="text-gray-600 text-md md:text-lg leading-relaxed">
                Our French courses provide students with fluency and cultural depth.
                With a focus on conversation, literature, and global perspectives,
                our graduates are prepared to engage meaningfully in Francophone
                communities worldwide.</p>
              <button
                  className="mt-8 flex items-center gap-3 px-6 py-2 bg-black text-white rounded-full mx-auto transition-all">
                Learn More <ArrowRightOutlined/>
              </button>
            </div>
          </div>

          <div className="w-full p-4">
            <div className="bg-white shadow-lg p-8 rounded-lg text-center">
              <div className="h-14 mb-5">
                <img src={chinese_image} alt="" className="h-full mx-auto"/>
              </div>

              <h3 className="text-xl font-semibold mb-4">Learn Chinese</h3>
              <p className="text-gray-600 text-md md:text-lg leading-relaxed">
                Our Chinese programs equip students with language skills and cultural understanding.
                Through immersive experiences, students master Mandarin and gain
                insights into China’s rich history and economy, paving the way for global success.
              </p>
              <button
                  className="mt-8 flex items-center gap-3 px-6 py-2 bg-black text-white rounded-full mx-auto transition-all">
                Learn More <ArrowRightOutlined/>
              </button>
            </div>
          </div>

          <div className="w-full p-4">
            <div className="bg-white shadow-lg p-8 rounded-lg text-center">

              <div className="h-14 mb-5">
                <img src={spanish_image} alt="" className="h-full mx-auto"/>
              </div>

              <h3 className="text-xl font-semibold mb-4">Learn Spanish</h3>
              <p className="text-gray-600 text-md md:text-lg leading-relaxed">
                Our Spanish language programs offer a deep dive into Hispanic culture, literature, and communication
                skills.
                Students gain fluency and cultural insight, preparing them for global opportunities and enriching their
                personal and professional lives.
              </p>
              <button
                  className="mt-8 flex items-center gap-3 px-6 py-2 bg-black text-white rounded-full mx-auto transition-all">
                Learn More <ArrowRightOutlined/>
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Products;
