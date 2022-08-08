
import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { query } from '.keystone/api';
import { Lists } from '.keystone/types';

import DefaultLayout from '../../components/layouts/DefaultLayout';
import Header from '../../components/layouts/Header';


import NavBar2 from "../NavBar2";
import Head from "next/head";

type Product = {
    id: string;
    title: string;
    content: string;
    slug: string;
};
type Solution ={
    id: string;
    title: string;
    content: string;
    slug: string;
};

type Service={
    id: string;
    title: string;
    content: string;
    slug: string;
}


type products = {
    products: InferGetStaticPropsType<typeof getStaticProps>
}
type services={
    services: InferGetStaticPropsType<typeof getStaticProps>
}
type solutions={
    solutions:InferGetStaticPropsType<typeof getStaticProps>
}


export default function Services({ service, products, services, solutions }: { service: Service, products: any, services:any, solutions:any }) {

    return (
        <DefaultLayout>
            <>
            <Head>
                <title> ISSL {service.title} </title>
            </Head>
                <NavBar2 products={products} services={services} solutions={solutions} />



                <div className="md:p-10">
                    <div className="" dangerouslySetInnerHTML={{ __html: service.content }} />
                </div>

             
            </>

        </DefaultLayout>
    )
}


export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const services = (await query.Service.findMany({
        query: `slug`,
    })) as { slug: string }[];

    const paths = services
        .filter(({ slug }) => !!slug)
        .map(({ slug }) => `/Service/${slug}`);

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const service = (await query.Service.findOne({
        where: { slug: params!.slug as string },
        query: 'id title content slug',
    })) as Service | null;
    if (!service) {
        return { notFound: true };
    }

    //for the nav bar
    const products = await query.Product.findMany({ query: 'title slug content id' }) as Product[] | products;
    const services = await query.Service.findMany({query:'title slug content id'}) as Service[] | services;
    const solutions = await query.Solution.findMany({ query:'title slug content id' }) as Solution[] |solutions;



    return {
        props: {
          service,
            products,
            services,
            solutions
        }
    };
}
