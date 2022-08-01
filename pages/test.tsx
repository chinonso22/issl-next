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

type ImageFieldOutput = {
    id: string;
    url: string;
};



type Post = {
    title: string;
    slug: string;
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



                <div>   this is the test page</div>


                {posts.map(post => (
                    <div key={post.slug}>

                        <a>{post.title}</a>
                       <div>
                       {post.content}
                       </div>

                       <div className="" dangerouslySetInnerHTML={{ __html: post.content }}>
                        
                       </div>
                    </div>
                ))}







            </>

        </DefaultLayout>

    );
}







export async function getStaticProps() {
    const posts = await query.Post.findMany({ query: 'title slug content ' }) as Post[];

    return {
        props: {
            posts
        }
    };
}