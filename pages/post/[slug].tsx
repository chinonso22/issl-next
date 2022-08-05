
import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { query } from '.keystone/api';
import { Lists } from '.keystone/types';

import DefaultLayout from '../../components/layouts/DefaultLayout';
import Header from '../../components/layouts/Header';


import NavBar2 from "../NavBar2";


type Post = {
    id: string;
    title: string;
    content: string;
    slug: string;
};


type mainProps = {
    post: Post;
    posts: InferGetStaticPropsType<typeof getStaticProps>
}
type posts = {
    posts: InferGetStaticPropsType<typeof getStaticProps>
}
export default function PostPage({ post, posts }: { post: Post, posts: any }) {

    return (
        <DefaultLayout>
            <>
                <NavBar2 posts={posts} />


                {/* <p className='text-red-700'>
                    {post.content}
                </p> */}
                <Header
                    title={post.title}
                    desc={post.slug}
                />

                {/* i am testing the html converstion for different pages */}
                <div className="md:p-10">
                    <div className="" dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <div className="pt-10">
                    <Link href="/" >
                        <a className='text-primaryColour font-bold'>
                            &larr; back home
                        </a>
                    </Link>
                </div>
            </>

        </DefaultLayout>
    )
}


export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const posts = (await query.Post.findMany({
        query: `slug`,
    })) as { slug: string }[];

    const paths = posts
        .filter(({ slug }) => !!slug)
        .map(({ slug }) => `/post/${slug}`);

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const post = (await query.Post.findOne({
        where: { slug: params!.slug as string },
        query: 'id title content slug',
    })) as Post | null;
    if (!post) {
        return { notFound: true };
    }
    const posts = await query.Post.findMany({ query: 'title slug content id' }) as Post[] | posts;



    return {
        props: {
            post,
            posts
        }
    };
}
