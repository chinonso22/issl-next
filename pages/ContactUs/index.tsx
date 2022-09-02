import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { query } from '.keystone/api';
import { Lists } from '.keystone/types';
import DefaultLayout from '../../components/layouts/DefaultLayout'
import Head from "next/head";
import React from "react";


type Contact = {
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




export default function About({ navs, feet, contacts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <DefaultLayout>
            <>
                {navs.map(nav => (
                    <div
                        key={nav.id}>
                        <div dangerouslySetInnerHTML={{ __html: nav.content }} />
                    </div>
                ))}



                {contacts.map(contact => (
                    <div
                        key={contact.id}
                    >
                        <Head>
                            <meta name='description' content={contact.tag} />
                        </Head>
                        <div dangerouslySetInnerHTML={{ __html: contact.content }} />
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
    const contacts = await query.Contact.findMany({ query: 'id slug content tag' }) as Contact[];
    return {
        props: {
            contacts,
            navs,
            feet


        }
    }


}