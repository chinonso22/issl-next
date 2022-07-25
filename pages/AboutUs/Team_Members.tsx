// this is the hero header for the main page
// check readme.md for more 

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

export default function Team_Members() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full"
      >



        <SwiperSlide>
          <section className="bg-primaryColour w-full">


            <div className="grid max-w-screen-xl md:max-w-[5000px] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 md:py-10 lg:grid-cols-12">
              <div className="mr-auto place-self-start  md:py-[100px] md:px-10 lg:col-span-7">

                <h1 className=" text-white max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl md:text-left ">
                   
                Yinka Oluwasanmi
                <p>
                Managing Director
                </p>
                 </h1>

                <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl md:text-left ">
                
                Mr. Yinka Oluwasanmi is a 1st Class (honors) graduate of Computer Science from the University of Ibadan
                 with over 25 years’ industry experience spanning core IT, banking and finance, and business consulting.
                 He has attended various leadership courses including the Leading Professional Services Firm at Harvard Business School.

                </p>

              </div>


              <div className="lg:w-[300px] lg:pt-[150px] lg:pl-[50px] ">
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
                <img src="/md_profile.svg" alt="mockup" />
              </div>
              </div>
            
            </div>

          </section>

        </SwiperSlide>


        <SwiperSlide>
          <section className="bg-primaryColour w-full">


            <div className="grid max-w-screen-xl md:max-w-[5000px] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 md:py-10 lg:grid-cols-12">
              <div className="mr-auto place-self-start  md:py-[100px] md:px-10 lg:col-span-7">

                <h1 className=" text-white max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl md:text-left ">
                  App Development
                </h1>
                <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl md:text-left ">
                Helping clients build the best software systems is the core of our business; its what we have spent most of our time doing for the last 16 years.

                </p>


                <div className="md:flex left">
                  <a href="#"
                    className=" inline-flex items-center justify-left px-7 py-3 text-base font-medium text-center bg-white text-primaryColour border-gray-300 rounded-lg hover:bg-grayColour focus:ring-4 focus:ring-gray-100 ">
                    Explore
                  </a>
                </div>

              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="/bank_hero.svg" alt="mockup" />
              </div>
            </div>

          </section>
        </SwiperSlide>


        <SwiperSlide>
          <section className="bg-primaryColour w-full">


            <div className="grid max-w-screen-xl md:max-w-[5000px] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 md:py-10 lg:grid-cols-12">
              <div className="mr-auto place-self-start  md:py-[100px] md:px-10 lg:col-span-7">

                <h1 className=" text-white max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl md:text-left ">
                  Cloud Services
                </h1>
                <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl md:text-left ">
                Get the freedom to work anytime from anywhere with our cloud services Web hosting | Email hosting | Application hosting | Dedicated server and VPS hosting

                </p>


                <div className="md:flex left">
                  <a href="#"
                    className=" inline-flex items-center justify-left px-7 py-3 text-base font-medium text-center bg-white text-primaryColour border-gray-300 rounded-lg hover:bg-grayColour focus:ring-4 focus:ring-gray-100 ">
                    Explore
                  </a>
                </div>

              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="/cloud_hero.svg" alt="..." />
              </div>
            </div>

          </section>
        </SwiperSlide>

       
      </Swiper>
    </>
  );
}