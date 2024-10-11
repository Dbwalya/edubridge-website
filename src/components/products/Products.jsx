import { ArrowRightOutlined } from "@ant-design/icons";

const Products = () => {
  return (
      <section className="flex flex-col items-center justify-center py-20 md:px-28">
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
              <div className="relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-yellow-500 rounded-full scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100"></div>
                </div>
                <div className="bg-yellow-500 w-fit p-4 rounded-full mx-auto text-white text-3xl mb-4 relative z-10">
                  <i className="fa-solid fa-people-arrows"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Learn English</h3>
              <p className="text-gray-600 text-md md:text-lg leading-relaxed">
                Edubridge Education Study Center is dedicated to
                empowering students through immersive English language education. With a team of experienced instructors, the center offers a range of
                courses tailored to different proficiency levels, from beginners to advanced learners.
              </p>
              <button
                  className="mt-8 flex items-center gap-3 px-6 py-2 bg-black text-white rounded-full mx-auto transition-all">
                Learn More <ArrowRightOutlined />
              </button>
            </div>
          </div>

          <div className="w-full p-4">
            <div className="bg-white shadow-lg p-8 rounded-lg text-center">

              <div className="relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-yellow-500 rounded-full scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100"></div>
                </div>
                <div className="bg-yellow-500 w-fit p-4 rounded-full mx-auto text-white text-3xl mb-4 relative z-10">
                  <i className="fa-solid fa-people-arrows"></i>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Learn French</h3>
              <p className="text-gray-600 text-md md:text-lg leading-relaxed">
                Edubridge Education Study Center is dedicated to empowering students through
                immersive English language education. With a team of experienced instructors,
                the center offers a range of courses tailored to different proficiency levels, from beginners to advanced learners.
              </p>
              <button className="mt-8 flex items-center gap-3 px-6 py-2 bg-black text-white rounded-full mx-auto transition-all">
                Learn More <ArrowRightOutlined />
              </button>
            </div>
          </div>

          <div className="w-full p-4">
            <div className="bg-white shadow-lg p-8 rounded-lg text-center">
              {/* Hover Animation for the second card */}
              <div className="relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-yellow-500 rounded-full scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100"></div>
                </div>
                <div className="bg-yellow-500 w-fit p-4 rounded-full mx-auto text-white text-3xl mb-4 relative z-10">
                  <i className="fa-solid fa-people-arrows"></i>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Learn French</h3>
              <p className="text-gray-600 text-md md:text-lg leading-relaxed">
                Edubridge Education Study Center is dedicated to empowering students
                through immersive English language education. With a team of experienced instructors,
                the center offers a range of courses tailored to different proficiency levels, from beginners to advanced learners.
              </p>
              <button className="mt-8 flex items-center gap-3 px-6 py-2 bg-black text-white rounded-full mx-auto transition-all">
                Learn More <ArrowRightOutlined />
              </button>
            </div>
          </div>

          <div className="w-full p-4">
            <div className="bg-white shadow-lg p-8 rounded-lg text-center">
              {/* Hover Animation for the second card */}
              <div className="relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-yellow-500 rounded-full scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100"></div>
                </div>
                <div className="bg-yellow-500 w-fit p-4 rounded-full mx-auto text-white text-3xl mb-4 relative z-10">
                  <i className="fa-solid fa-people-arrows"></i>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Learn French</h3>
              <p className="text-gray-600 text-md md:text-lg leading-relaxed">
                Edubridge Education Study Center is dedicated to empowering students through immersive English language education. With a team of experienced instructors,
                the center offers a range of courses tailored to different proficiency levels, from beginners to advanced learners.
              </p>
              <button className="mt-8 flex items-center gap-3 px-6 py-2 bg-black text-white rounded-full mx-auto transition-all">
                Learn More <ArrowRightOutlined />
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Products;
