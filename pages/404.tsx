import Link from "next/link";
import DefaultLayout from "../components/layouts/DefaultLayout";
import {query} from '.keystone/api'
import NavBar2 from "./NavBar2";
import { InferGetStaticPropsType } from "next";


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



export default function Custom404({ products, solutions, services }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>

            <DefaultLayout>
                
                <>
                <NavBar2 products={products} services={services} solutions={solutions} />
               
                <div className="text-center p-20 text-3xl">
                    404 - PAGE NOT FOUND
                
                </div>
                </>
               
                
            </DefaultLayout>


        </>
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