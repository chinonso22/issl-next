import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { query } from '.keystone/api';
import { Lists } from '.keystone/types';
import DefaultLayout from "../components/layouts/DefaultLayout";

type Home = {

    slug: string
    content: string
    tag: string
    id: string
}

type Nav = {

    slug: string
    content: string
    tag: string
    id: string
}

type Footer = {

    slug: string
    content: string
    tag: string
    id: string
}

export default function index({ homes, navs }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (

        <DefaultLayout>
            <>


                {navs.map(nav => (
                    <div
                        key={nav.id}>
                        <div dangerouslySetInnerHTML={{ __html: nav.content }} />
                    </div>
                ))}

                



                {homes.map(home => (

                    <div
                        key={home.id}
                    >
                        <div dangerouslySetInnerHTML={{ __html: home.content }} />
                    </div>


                ))}
            </>
        </DefaultLayout>

    )
}



export async function getStaticProps() {

    const homes = await query.Home.findMany({ query: 'id slug content tag' }) as Home[];
    const navs = await query.Nav.findMany({ query: 'id slug content tag' }) as Nav[]



    return {
        props: {
            homes,
            navs

        }
    }
}