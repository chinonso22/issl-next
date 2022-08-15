import DefaultLayout from "../components/layouts/DefaultLayout";
import React, { useRef } from "react";


import { DocumentRenderer } from '@keystone-6/document-renderer';

import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { query } from '.keystone/api';
import { Lists } from '.keystone/types';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Pagination, Navigation, EffectCoverflow } from "swiper";





//dropdown styling

import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import NavBar2 from './NavBar2';
// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TransformStreamDefaultController } from "stream/web";


type ImageFieldOutput = {
    id: string;
    url: string;
};



type Post = {
    title: string;
    slug: string;
    id: string;
    content: string;
}

type Team = {
    id: string;
    name: string;
    slug: string;
    content: string;
    postion: string;
    avatar: {
        id: string;
        url: string;
    };


};




type Product = {
    title: string;
    slug: string;
    id: string;
    content: string;
}

type Service = {
    title: string;
    slug: string;
    id: string;
    content: string;
}

type Solution = {
    title: string;
    slug: string;
    id: string;
    content: string;
}



export default function main({ teams, products, solutions, services }: InferGetStaticPropsType<typeof getStaticProps>) {


    return (
        <DefaultLayout>
            <>

                <NavBar2 products={products} services={services} solutions={solutions} />


                <div>   this is the test page</div>


                {/* {posts.map(post => (
                    <div key={post.slug}>

                        <a>{post.title}</a>
                        <div>
                            {post.content}
                        </div>

                        <div classNameName="" dangerouslySetInnerHTML={{ __html: post.content }}>

                        </div>
                    </div>
                ))} */}



                <div>
                    This is my test page
                </div>



                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    autoHeight={true}
                   
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={true}

                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}

                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper"
                >
                    {teams.map(team => (
                        <div key={team.id}>

                            <SwiperSlide
                                className="w-40"
                            >

                                <section className="bg-white w-56">
                                    <img className="rounded-lg shadow-lg mx-auto"
                                        src={team.avatar?.url}
                                        alt="avatar" />

                                    <div className="text-center">
                                        <div className="text-primaryColour">
                                            {team.name}
                                            <p className="text-black">
                                                {team.postion}
                                            </p>
                                        </div>

                                        <div className="text-black  pt-5">
                                            {team.content}
                                        </div>

                                    </div>

                                </section>
                            </SwiperSlide>

                        </div>
                    ))}

                </Swiper>









            </>

        </DefaultLayout >

    );
}




export async function getStaticProps() {
    const products = await query.Product.findMany({ query: 'title slug content id' }) as Product[];
    const services = await query.Service.findMany({ query: 'title slug content id' }) as Service[];
    const solutions = await query.Solution.findMany({ query: 'title slug content id' }) as Solution[];
    const teams = await query.Team.findMany({ query: 'id name slug postion content avatar {url} ' }) as Team[];

    return {
        props: {
            teams,
            products,
            services,
            solutions
        }
    };
}