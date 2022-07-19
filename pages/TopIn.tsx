// this is the hero header for the main page
// check readme.md for more 

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from '../styles/Home.module.css';


// import required modules
import { Pagination, Navigation } from "swiper";

export default function TopIn() {
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
        className="mySwiper"
      >
        


        <SwiperSlide>
          <section className="bg-primaryColour">


            <div className="grid max-w-screen-xl md:max-w-[5000px] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 md:py-10 lg:grid-cols-12">
              <div className="mr-auto place-self-start  md:py-[100px] md:px-10 lg:col-span-7">

                <h1 className=" text-white max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl md:text-left ">Banking Solution</h1>
                <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl md:text-left ">
                BankEasy online & mobile banking solutions transforms your bank to the destination for always connected mobile customer.
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


        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}