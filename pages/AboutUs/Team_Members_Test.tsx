// this is the hero header for the main page
// check readme.md for more 

import React, { useRef, useState } from "react";
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

import query from '.keystone/api';
import Lists from '.keystone/types';

type Staff = {
    name: string;
    position: string;
    content: string;
    picture: any;
}



export default function Team_Members_Test({ staffs }: InferGetStaticPropsType<typeof getStaticProps>) {
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





                {staffs.map(staff =>
                    <div key={staff.name}>


                        <SwiperSlide>
                            <section className="bg-primaryColour w-full">


                                <div className="grid max-w-screen-xl md:max-w-[5000px] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 md:py-10 lg:grid-cols-12">
                                    <div className="mr-auto place-self-start  md:py-[100px] md:px-10 lg:col-span-7">

                                        <h1 className=" text-white max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl md:text-left ">

                                            {staff.name}
                                            <p>
                                                {staff.position}
                                            </p>
                                        </h1>

                                        <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl md:text-left ">

                                            {staff.content}
                                        </p>

                                    </div>


                                    <div className="lg:w-[300px] lg:pt-[150px] lg:pl-[50px] ">
                                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
                                            <img src={staff.picture} alt="mockup" />
                                        </div>
                                    </div>

                                </div>

                            </section>

                        </SwiperSlide>

                    </div>

                )}





              


            </Swiper>
        </>
    );
}



export async function getStaticProps() {
    const staffs = await query.Staff.findMany({ query: 'name content position picture' }) as Staff[];
    return {
        props: {
            staffs
        }
    };
}

