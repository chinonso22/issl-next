
import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { query } from '.keystone/api';
import { Lists } from '.keystone/types';

import DefaultLayout from '../../components/layouts/DefaultLayout';
import Header from '../../components/layouts/Header';


import NavBar2 from "../NavBar2";



type Solution = {
    id: string;
    title: string;
    content: string;
    slug: string;
}

type Service = {
    id: string;
    title: string;
    content: string;
    slug: string;
}

type Product = {
    id: string;
    title: string;
    content: string;
    slug: string;
}

type products = {
    products: InferGetStaticPropsType<typeof getStaticProps>
}

type solutions = {
    solutions: InferGetStaticPropsType<typeof getStaticProps>
}

type services = {
    services: InferGetStaticPropsType<typeof getStaticProps>
}
export default function Solutions({ solution, products, solutions, services }: { solution: Solution, products: any, solutions: any, services: any }) {

    return (
        <DefaultLayout>
            <>
                <NavBar2 products={products} services={services} solutions={solutions} />


                {/* <p className='text-red-700'>
                    {post.content}
                </p> */}
                <Header
                    title={solution.title}
                    desc={solution.slug}
                />

                {/* i am testing the html converstion for different pages */}
                <div className="md:p-10">
                    <div className="" dangerouslySetInnerHTML={{ __html: solution.content }} />
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
    const solutions = (await query.Solution.findMany({
        query: `slug`,
    })) as { slug: string }[];

    const paths = solutions
        .filter(({ slug }) => !!slug)
        .map(({ slug }) => `/Solution/${slug}`);

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const solution = (await query.Solution.findOne({
        where: { slug: params!.slug as string },
        query: 'id title content slug',
    })) as Solution | null;
    if (!solution) {
        return { notFound: true };
    }

    //for navbar
    const products = await query.Product.findMany({ query: 'title slug content id' }) as Product[] | products;
    const solutions = await query.Solution.findMany({ query: 'title slug content id' }) as Solution[] | solutions;
    const services = await query.Service.findMany({ query: "title slug content id " }) as Service[] | services;

    return {
        props: {
            solution,
            products,
            solutions,
            services
        }
    };
}
