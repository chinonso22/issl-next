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


export default function main({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {

   
    return (
        <DefaultLayout>
            <>

               <NavBar2 posts={posts}/>

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



                <Menu as="div" className="relative inline-block text-center w-full ">
                    <div>
                        <Menu.Button className="bg-red-500 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center  hover:bg-grayColour hover:text-primaryColour text-left">
                            Options 2
                            {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2  rounded-md  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none w-full md:w-56">
                            <div className="py-1">
                                {posts.map(post => (
                                    <div key={post.id}>

                                        <Menu.Item>

                                            <Link
                                                href={`/post/${post.slug}`}

                                            >
                                                <a
                                                    className=' block px-4 py-2 text-primaryColour hover:bg-primaryColour hover:text-white text-base '
                                                >
                                                    {post.title}
                                                </a>

                                            </Link>

                                        </Menu.Item>
                                    </div>
                                ))}





                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>




            </>

        </DefaultLayout>

    );
}







export async function getStaticProps() {
    const posts = await query.Post.findMany({ query: 'title slug content id' }) as Post[];

    return {
        props: {
            posts
        }
    };
}