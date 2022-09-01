import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { query } from '.keystone/api';
import { Lists } from '.keystone/types';
import DefaultLayout from "../components/layouts/DefaultLayout";
import Head from "next/head";

type Home = {

    slug: string
    content: string
    tag: string
    id: string
}

type NavBar = {
    slug: string
    content: string
    id: string

}

type Footer = {
    slug: string
    content: string
    id: string
}

type navbars={
    navbars: InferGetStaticPropsType<typeof getStaticProps>
}
type footers ={
    footers: InferGetStaticPropsType<typeof getStaticProps>
}

type homes ={
    homes: InferGetStaticPropsType<typeof getStaticProps>
}

export default function Home({ homes, navbars, footers }:{homes:Home, navbars:NavBar, footers:Footer }) {
    return (

        <DefaultLayout>
            <>


               
                        <div
                            key={navbars.id}
                        >
                            <div dangerouslySetInnerHTML={{ __html: navbars.content }} />
                        </div>

                
                


              

                    <div
                        key={homes.id}
                    >
                        <Head>
                            <meta name='description' content={homes.tag} />
                        </Head>
                        <div dangerouslySetInnerHTML={{ __html: homes.content }} />
                    </div>


              
     
                        <div
                            key={footers.id}
                        >
                            <div dangerouslySetInnerHTML={{ __html: footers.content }} />
                        </div>

                  



            </>
        </DefaultLayout>

    )
}



export async function getStaticProps() {

    const homes = await query.Home.findMany({ query: 'id  slug content tag' }) as Home[] |homes;
    const navbars = await query.Home.findMany({ query: 'id slug content' }) as NavBar[] | navbars;
    const footers = await query.Home.findMany({ query: 'id slug content' }) as Footer[] | footers;


    return {
        props: {
            homes,
            navbars,
            footers
        }
    }
}