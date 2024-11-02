import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

const Slider = () => {
    const slides = [
        {
            image: 'https://images.pexels.com/photos/19872/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Discover Australia',
            subtext: 'Explore world-class education in a vibrant and diverse culture.'
        },
        {
            image: 'https://images.pexels.com/photos/756790/pexels-photo-756790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Experience London',
            subtext: 'Immerse yourself in one of the world’s most historic cities.'
        },
        {
            image: 'https://images.pexels.com/photos/1766215/pexels-photo-1766215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Study in Canada',
            subtext: 'Join a diverse academic community in Canada’s scenic landscapes.'
        },
        {
            image: 'https://images.pexels.com/photos/16031319/pexels-photo-16031319/free-photo-of-british-flag-on-a-ship-mast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Uncover British Heritage',
            subtext: 'Blend tradition with innovation in the heart of the UK.'
        }
    ];

    return (
        <section className='bg-white mt-14 pb-14 z-10  w-full'>
            <div className="text-center mb-10 pt-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Study Destinations
                </h1>
                <p className="text-md md:text-lg text-gray-600 mt-4">
                    Explore the world’s top study destinations, where education meets adventure, culture, and lifelong opportunities.
                </p>
            </div>
            <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[500px] mt-5">
                            <img
                                src={slide.image}
                                alt={`slide-${index + 1}`}
                                className='w-full h-full object-cover select-none'
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            {/* Text */}
                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                                <h2 className="text-2xl md:text-3xl font-bold">{slide.title}</h2>
                                <p className="mt-2 text-sm md:text-lg">{slide.subtext}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;
