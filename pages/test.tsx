import DefaultLayout from "../components/layouts/DefaultLayout";


import { DocumentRenderer } from '@keystone-6/document-renderer';

import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { query } from '.keystone/api';
import { Lists } from '.keystone/types';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";



//dropdown styling

import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import NavBar2 from './NavBar2';

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



export default function main({ products, solutions, services }: InferGetStaticPropsType<typeof getStaticProps>) {

   
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

                        <div className="" dangerouslySetInnerHTML={{ __html: post.content }}>

                        </div>
                    </div>
                ))} */}



              <div>
                This is my test page
              </div>




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