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



export default function Home({ homes }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (

        <DefaultLayout>
            <>
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

    const homes = await query.Home.findMany({ query: 'id  slug content tag' }) as Home[]

    return {
        props: {
            homes
        }
    }
}


