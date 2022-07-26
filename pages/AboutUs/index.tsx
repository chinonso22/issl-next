import DefaultLayout from "../../components/layouts/DefaultLayout";
import Team_Members from "./Team_Members";
import Team_Members_Test from "./Team_Members_Test";




import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { query } from '.keystone/api';
import { Lists } from '.keystone/types';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

function Hero() {
    return (
        <div className="w-full text-center bg-grayColour md:p-20 pt-5 pb-5">

            <div className="text-4xl text-primaryColour">
                We are a
                <a className="font-bold">
                    {" "} software development
                </a>
                <div>
                    and consulting company.
                </div>



            </div>

            <div className="text-2xl tex-black pt-10">
                We are committed to providing flexible,
                low-cost solutions to our customers that will help make their businesses
                run more smoothly and profitably.
            </div>




        </div>
    )
}


function About() {
    return (
        <div className="px-10 pt-5 md:pt-16 pb-10 md:pb-28" >
            <div className="text-black text-3xl pb-5 ">
                About Us
                <div className='bg-red-500 h-0.5 w-12' />
            </div>



            <div className="grid grid-cols-2 text-xl">


                <div className="lg:col-span-1 col-span-2 text-primaryColour">
                    Integrated Software Services Ltd. (ISSL) is a software development and consulting company founded in 2004 with a vision to provide information technology services, solutions and products to business enterprises in Africa.


                    <p className="pt-10">
                        Since then, ISSL has grown into a successful organization with benchmark products for the banking and finance sectors. ISSL is a process-driven organization utilizing world-class tools and the best of personnel to deliver quality products and services. ISSL was motivated and is being driven by the facts that Nigerians are highly talented and are capable of delivering excellent software services which can be exported.

                    </p>

                </div>


                <div className="hidden  lg:flex left-2  ">
                    <img src="/about_art1.svg"
                        alt="..."
                        className=""
                    />
                </div>

            </div>

            <div className="grid grid-cols-2 pt-10 text-xl">

                <div className="hidden  lg:flex left-2   ">
                    <img src="/about_art2.svg"
                        alt="..."
                        className=""
                    />
                </div>


                <div className="lg:col-span-1 col-span-2 text-primaryColour">
                    Our core purpose is to help business enterprises derive maximum value from information technology and improve their business performance. Our core competencies are in e-business, custom software development and customer relationship management.

                    <p className="pt-10">
                        We differentiate ourselves in the IT marketplace by proving quality products, outstanding service, innovation and breakthrough industry solutions.

                    </p>


                </div>

            </div>

        </div>
    )
}

type Post = {
    id: string;
    title: string;
    slug: string;
};



export async function getStaticProps() {
    const posts = await query.Post.findMany({ query: 'id title slug' }) as Post[];
    return {
        props: {
            posts
        }
    };
}


function Team({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className="bg-grayColour text-center items-center md:pt-12 md:pb-10 ">

            <div className="items-center pb-10">
                <div className="text-3xl text-primaryColour">
                    <a className="underline-offset-8 underline decoration-red-500"> Team</a>{" "} Members


                </div>
            </div>

            <div>
                this is a list of the pages
                {posts.map(post => (
                    <div key={post.id}>
                        <Link href={`/post/${post.slug}`}>
                            <a> {post.title} </a>
                        </Link>

                    </div>
                )

                )

                }
            </div>


        </div>
    )
}




export default function AboutUs() {
    return (
        <div className="relative">
            <DefaultLayout>
                <div className="">
                    <Hero />
                    <div className="">
                        <div className="hidden  lg:flex  lg:absolute left-[600px] lg:top-[420px]  ">
                            <img src="/swirl_arrow.svg"
                                alt="..."
                                className=""
                            />
                        </div>
                    </div>

                    <About />

                    <Team posts={[]} />


                </div>
            </DefaultLayout>
        </div>

    )
}