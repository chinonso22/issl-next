import DefaultLayout from "../components/layouts/DefaultLayout";

import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { query } from '.keystone/api';

import NavBar2 from './NavBar2';


import Link from "next/link";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

type Product = {
    title: string;
    slug: string;
    id: string;
    content: string;
}

type Service ={
    title: string;
    slug: string;
    id: string;
    content: string;
}

type Solution ={
    title: string;
    slug: string;
    id: string;
    content: string;
}


function TopIn(){
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
                    <img src="/app_dev_hero.svg" alt="mockup" />
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

function OurSolutions() {
    return (
        <div className='py-10 px-5 space-y-10 w-full break-words'>

            <div className='font-semibold text-3xl md:w-[600px]'>
                <div>
                    Our Solutions
                    <div className='bg-red-500 h-0.5 w-14' />
                </div>


                <p className='font-normal text-lg pt-5 '>
                    We are committed to providing flexible,
                    low-cost solutions to our customers that will help make their businesses run more smoothly and profitably.
                </p>
            </div>




            <div className='grid grid-cols-12 md:space-x-5 space-y-10'>


                {/* stock  */}

                <Link href={'/post/stuff'}>
                    <div className="bg-grayColour py-2 text-primaryColour rounded-xl col-span-12 md:col-span-6 hover:bg-primaryColour hover:text-white hover:cursor-pointer">

                        <div className='px-10 py-2 '>
                            <img
                                src='/small_stock_.svg'
                            />
                        </div>


                        <div className="font-semibold text-lg px-10 py-2" >
                            Stock Broking and Financial Services
                            <p className="font-normal py-2 text-sm ">
                                iBroker is an integrated investment management, accounting, transaction handling, customer service and management reporting system
                            </p>
                        </div>
                    </div>
                </Link>

                {/* authentication */}
                <div className=' md:col-span-6 col-span-12 rounded-xl bg-grayColour text-primaryColour hover:bg-primaryColour hover:text-white hover:cursor-pointer'>
                    <div className='px-10 py-2 '>
                        <img
                            src='/small_stock_.svg'
                        />
                    </div>

                    <div className=' font-semibold text-lg px-10 py-2'>
                        Strong Authentication
                        <p className='font-normal py-2 text-sm '>
                            Our strong authentication solutions are designed to protect your business, employees and customers across a range of different industries.
                        </p>
                    </div>
                </div>


                {/* Banking */}

                <div className='bg-red-500 md:col-span-4 col-span-12 rounded-xl bg-grayColour text-primaryColour hover:bg-primaryColour hover:text-white hover:cursor-pointer'>

                    <div className='px-10 py-2 '>
                        <img
                            src='/small_bankng.svg'
                        />
                    </div>
                    <div className='font-semibold text-lg px-10 py-2'>
                        Banking
                        <p className='font-normal py-2 text-sm'>
                            To retain current clients and attract new customers, you need to offer your clients the best,
                            simplified and affordable solutions to bank online.
                        </p>
                    </div>
                </div>

                {/* biometrics */}
                <div className='bg-red-500 md:col-span-4 col-span-12 rounded-xl bg-grayColour text-primaryColour hover:bg-primaryColour hover:text-white hover:cursor-pointer'>

                    <div className='px-10 py-2 '>
                        <img
                            src='/small_bio_met.svg'
                        />
                    </div>
                    <div className='font-semibold text-lg px-10 py-2'>
                        Biometrics
                        <p className='font-normal py-2 text-sm'>
                            integrate a low-cost biometric verification system into your technology platform
                            that will help you improve your security and boost your profitability.
                        </p>
                    </div>
                </div>

                {/* crm solution */}
                <div className='bg-red-500 md:col-span-4 col-span-12 rounded-xl bg-grayColour text-primaryColour hover:bg-primaryColour hover:text-white hover:cursor-pointer'>

                    <div className='px-10 py-2 '>
                        <img
                            src='/small_crm.svg'
                        />
                    </div>
                    <div className='font-semibold text-lg px-10 py-2'>
                        CRM Solutions
                        <p className='font-normal py-2 text-sm'>
                            We deploy the award winning genesisworld CRM from our CRM  partner,
                            CAS-CRM, to provide flexible solutions suitable to your needs.

                        </p>
                    </div>
                </div>

            </div>





        </div>
    )
};





function OurServices() {
    return (
        <div className='py-10 px-5 space-y-10  break-words text-center'>



            <div className="items-center md:px-[300px]">
                <div className="text-3xl text-black font-semibold">
                    <a className="underline-offset-8 underline decoration-red-500 "> Our</a>{" "} Services
                </div>

                <p className='font-normal text-lg pt-5'>
                    We offer quality and assured services that has long lasting results and that will maximize your businesses profit
                </p>

            </div>

            <div className='grid grid-cols-4 space-y-3 space-x-10'>


                <Link
                    href={'/App_dev'}>
                    <img
                        src='/app_dev.svg'
                        className='col-span-4 md:col-span-1 hover:cursor-pointer hover:scale-110 hover:shadow-gray-800 hover:shadow-lg'
                    />
                </Link>

                <Link
                    href={'/post/stuff-2'}>
                    <img
                        src='/in_consult.svg'
                        className='col-span-4 md:col-span-1 hover:cursor-pointer hover:scale-110 hover:shadow-gray-800 hover:shadow-lg'
                    />
                </Link>


                <Link
                    href={'/post/stuff-2'}>
                    <img
                        src='/in_crm.svg'
                        className='col-span-4 md:col-span-1 hover:cursor-pointer hover:scale-110 hover:shadow-gray-800 hover:shadow-lg'
                    />
                </Link>


                <Link
                    href={'/post/stuff-2'}>
                    <img
                        src='/in_web_dev.svg'
                        className='col-span-4 md:col-span-1 hover:cursor-pointer hover:scale-110 hover:shadow-gray-800 hover:shadow-lg'
                    />
                </Link>


            </div>



        </div>
    )
}


export default function ind({ products, solutions, services }: InferGetStaticPropsType<typeof getStaticProps>) {


    return (
        <DefaultLayout>
            <>

                <NavBar2 products={products} services={services} solutions={solutions} />
                <TopIn />
                <OurSolutions />

                <OurServices />

            </>

        </DefaultLayout>

    );
}







export async function getStaticProps() {
    const products = await query.Product.findMany({ query: 'title slug content id' }) as Product[] ;
    const services = await query.Service.findMany({query:'title slug content id'}) as Service[] ;
    const solutions = await query.Solution.findMany({ query:'title slug content id' }) as Solution[] ;

    return {
        props: {
            products,
            services,
            solutions
        }
    };
}