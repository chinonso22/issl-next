import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { query } from '.keystone/api';
import { Lists } from '.keystone/types';
import DefaultLayout from '../../components/layouts/DefaultLayout'
import Head from "next/head";
import React from "react";


type About = {
    slug: string
    content: string
    tag: string
    id: string
}



type Nav = {
    slug: string
    content: string
   
    id: string
}

type Foot = {

    slug: string
    content: string
   
    id: string
}




export default function About({ navs, feet, abouts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <DefaultLayout>
            <>
                {navs.map(nav => (
                    <div
                        key={nav.id}>
                        <div dangerouslySetInnerHTML={{ __html: nav.content }} />
                    </div>
                ))}



                {abouts.map(about => (
                    <div
                        key={about.id}
                    >
                        <Head>
                            <meta name='description' content={about.tag} />
                        </Head>
                        <div dangerouslySetInnerHTML={{ __html: about.content }} />
                    </div>

                ))}



                {feet.map(foot => (
                    <div
                        key={foot.id}
                    >
                        <div dangerouslySetInnerHTML={{ __html: foot.content }} />
                    </div>
                ))}

            </>

        </DefaultLayout>
    )
}




export async function getStaticProps() {
    const navs = await query.Nav.findMany({ query: 'id slug content ' }) as Nav[];
    const feet = await query.Foot.findMany({ query: 'id slug content ' }) as Foot[];
    const abouts = await query.About.findMany({ query: 'id slug content tag' }) as About[];
    return {
        props: {
            abouts,
            navs,
            feet


        }
    }


}