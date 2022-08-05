import Link from "next/link";
import DefaultLayout from "../components/layouts/DefaultLayout";
import {query} from '.keystone/api'
import NavBar2 from "./NavBar2";
import { InferGetStaticPropsType } from "next";


type Post = {
    title: string;
    slug: string;
    id: string;
    content: string;
}


export default function Custom404({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>

            <DefaultLayout>
                
                <>
                <NavBar2 posts={posts}   />
                <div className="text-center p-20 text-3xl">
                    404 - PAGE NOT FOUND
                
                </div>
                </>
               
                
            </DefaultLayout>


        </>
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