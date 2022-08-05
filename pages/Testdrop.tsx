
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { query } from '.keystone/api';
import { Lists } from '.keystone/types';

//dropdown styling

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from "next/link";




type Post = {
    title: string;
    slug: string;
    id: string;
    content: string
}




export default function Testdrop({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>

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
                            {posts?.map(post => (
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
    )
}





export async function getStaticProps() {
    const posts = await query.Post.findMany({ query: 'id title content slug' }) as Post[];
    return {
        props: {
            posts
        }
    };
}