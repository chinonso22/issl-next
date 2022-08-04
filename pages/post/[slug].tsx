
import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { query } from '.keystone/api';
import { Lists } from '.keystone/types';

import DefaultLayout from '../../components/layouts/DefaultLayout';
import Header from '../../components/layouts/Header';





type Post = {
    id: string;
    title: string;
    content: string;
    slug: string;
};

export default function PostPage({ post }: { post: Post }) {

    return (
        <DefaultLayout>
            <>
                <Header
                    title={post.title}
                    desc={post.slug}
                />
                {/* <p className='text-red-700'>
                    {post.content}
                </p> */}


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

// export default function PostPage({ post }: { post: Post }) {
//     return (
//         <div>
//             <main style={{ margin: '3rem' }}>
//                 <div>
//                     <Link href="/">
//                         <a>&larr; back home</a>
//                     </Link>
//                 </div>
//                 <h1>{post.title}</h1>
//                 <p>{post.content}</p>
//             </main>
//         </div>
//     );
// }

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
    return { props: { post } };
}
