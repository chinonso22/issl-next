import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { query } from '.keystone/api';
import { Lists } from '.keystone/types';
import DefaultLayout from '../../components/layouts/DefaultLayout'
import Head from "next/head";
import React from "react";


type WhatWeDo = {
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




export default function About({ navs, feet, whatWeDos }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <DefaultLayout>
            <>
                {navs.map(nav => (
                    <div
                        key={nav.id}>
                        <div dangerouslySetInnerHTML={{ __html: nav.content }} />
                    </div>
                ))}



                {whatWeDos.map(whatWeDo => (
                    <div
                        key={whatWeDo.id}
                    >
                        <Head>
                            <meta name='description' content={whatWeDo.tag} />
                        </Head>
                        <div dangerouslySetInnerHTML={{ __html: whatWeDo.content }} />
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
    const whatWeDos = await query.WhatWeDo.findMany({ query: 'id slug content tag' }) as WhatWeDo[];
    return {
        props: {
            whatWeDos,
            navs,
            feet


        }
    }


}