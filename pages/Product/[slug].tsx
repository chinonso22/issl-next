
import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { query } from '.keystone/api';
import { Lists } from '.keystone/types';

import DefaultLayout from '../../components/layouts/DefaultLayout';
import Header from '../../components/layouts/Header';


import NavBar2 from "../NavBar2";


type Service = {
    id: string;
    title: string;
    content: string;
    slug: string;
};

type Product = {
    id: string;
    title: string;
    content: string;
    slug: string;
}

type Solution = {
    id: string;
    title: string;
    content: string;
    slug: string;
}

type products = {
    produts: InferGetStaticPropsType<typeof getStaticProps>
}
type services = {
    services: InferGetStaticPropsType<typeof getStaticProps>
}
type solutions = {
    solutions: InferGetStaticPropsType<typeof getStaticProps>
}

export default function Products({ product, services, solutions, products }: { product: Product, products: any, services: any, solutions: any }) {

    return (
        <DefaultLayout>
            <>
                <NavBar2 products={products} services={services} solutions={solutions} />


                {/* <p className='text-red-700'>
                    {post.content}
                </p> */}
                <Header
                    title={product.title}
                    desc={product.slug}
                />

                {/* i am testing the html converstion for different pages */}
                <div className="md:p-10">
                    <div className="" dangerouslySetInnerHTML={{ __html: product.content }} />
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
    const products = (await query.Product.findMany({

        query: `slug`,
    })) as { slug: string }[];

    const paths = products
        .filter(({ slug }) => !!slug)
        .map(({ slug }) => `/Product/${slug}`);

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const product = (await query.Product.findOne({
        where: { slug: params!.slug as string },
        query: 'id title content slug',
    })) as Product | null;
    if (!product) {
        return { notFound: true };
    }

    //for navbar
    const products = await query.Product.findMany({ query: 'title slug content id' }) as Product[] | products;
    const solutions = await query.Solution.findMany({ query: 'title slug content id' }) as Solution[] | solutions;
    const services = await query.Service.findMany({ query: "id content slug title " }) as Service[] | services;


    return {
        props: {
            product,
            products,
            services,
            solutions
        }
    };
}
