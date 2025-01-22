import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// Import required modules
import { FreeMode, Navigation } from 'swiper/modules';

const SliderOne = () => {
    return (
        <section className="">
            <h1 className="font-semibold text-4xl text-center mb-8">
                Most popular <span className='text-primary'>Subjects</span> for building your Future
            </h1>

            <Swiper
                loop={true}
                freeMode={true}
                navigation={true} // Enable navigation
                modules={[FreeMode, Navigation]}
                className="mySwiper"
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 1,
                    },
                }}
            >
                {/* Swiper Slides */}
                <SwiperSlide>
                    <img className="w-full" src="/images/popularSubject/photo01.png" alt="Subject 1" />
                    <p className='text-center'>Information Technology</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src="/images/popularSubject/photo02.png" alt="Subject 2" />
                    <p className='text-center'>Bio & Biomedical Engineering</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src="/images/popularSubject/photo03.png" alt="Subject 3" />
                    <p className='text-center'>Aerospace Engineering </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src="/images/popularSubject/photo04.png" alt="Subject 4" />
                    <p className='text-center'>Robotics</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src="/images/popularSubject/photo01.png" alt="Subject 5" />
                    <p className='text-center'>Information Technology</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src="/images/popularSubject/photo02.png" alt="Subject 6" />
                    <p className='text-center'>Bio & Biomedical Engineering</p>
                </SwiperSlide>
            </Swiper>

            {/* Custom Styling for Navigation Buttons */}
            <style jsx global>{`
 .swiper-button-next,
.swiper-button-prev {
  background-color: #ffff;
  border-radius: 9999px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  color: black; /* Default color */
  transition: color 0.3s ease; /* Smooth color transition */
}

/* Small devices */
.swiper-button-next,
.swiper-button-prev {
  width: 40px;
  height: 40px;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
}

/* Medium devices (min-width: 768px) */
@media (min-width: 768px) {
  .swiper-button-next,
  .swiper-button-prev {
    width: 50px;
    height: 50px;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 24px;
  }
}

/* Large devices (min-width: 1024px) */
@media (min-width: 1024px) {
  .swiper-button-next,
  .swiper-button-prev {
    width: 50px;
    height: 50px;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 26px;
  }
}

/* Hover styles for all devices */
.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: #0a8375;
}

.swiper-button-next:hover::after,
.swiper-button-prev:hover::after {
  color: white; /* Change icon color to white on hover */
}
`}</style>
        </section>
    );
};

export default SliderOne;