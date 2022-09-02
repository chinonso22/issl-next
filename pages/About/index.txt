import DefaultLayout from "../../components/layouts/DefaultLayout";




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
import { Pagination, Navigation, EffectCoverflow } from "swiper";

import Link from "next/link";
import Head from "next/head";






// import required modules




type Team = {
    id: string;
    name: string;
    slug: string;
    content: string;
    postion: string;
    avatar: {
        id: string;
        url: string;
    };


};


import NavBar2 from "../NavBar2";

// type NavBar2Props = {
//     teams: 
//     staticProps: InferGetStaticPropsType
// }


export default function main({ teams, products, services, solutions }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <DefaultLayout>
            <>
                <Head>
                    <title> ISSL AboutUs </title>

                    <meta name="description" content="" />
                </Head>
                <NavBar2 products={products} services={services} solutions={solutions} />
                {/* Hero Section */}
                <div className="w-full text-center bg-grayColour md:p-20 pt-5 pb-5 relative">

                    <div className="lg:text-4xl text-2xl text-primaryColour px-5">
                        We are a
                        <a className="font-bold">
                            {" "} software development

                        </a>
                        <div>
                            and consulting company.
                        </div>



                    </div>

                    <div className="lg:text-2xl text-lg tex-black pt-10 text-primaryColour px-10 lg:px-0">
                        We are committed to providing flexible,
                        low-cost solutions to our customers that will help make their businesses
                        run more smoothly and profitably.




                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:pt-12 absolute left-[500px]">
                            <img src="/swirl_arrow.svg" alt="" />

                        </div>
                    </div>

                   




                    {/* <div className=" ">

                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex absolute left-[500px] ">
                            <img src="/swirl_arrow.svg" alt="" />

                        </div>

                    </div> */}

                </div>



                {/* About Us SECTION */}

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




                {/* LISTING TEAM MEMBERS */}

                <div className="bg-grayColour text-center items-center md:pt-12 md:pb-10 ">

                    <div className="items-center pb-10">
                        <div className="text-3xl text-primaryColour">
                            <a className="underline-offset-8 underline decoration-red-500"> Team</a>{" "} Members


                        </div>
                    </div>



                    <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    autoHeight={true}
                   
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={true}

                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}

                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper"
                >
                    {teams.map(team => (
                        <div key={team.id}>

                            <SwiperSlide
                                className="w-40"
                            >

                                <section className="bg-white w-56">
                                    <img className="rounded-lg shadow-lg mx-auto"
                                        src={team.avatar?.url}
                                        alt="avatar" />

                                    <div className="text-center">
                                        <div className="text-primaryColour">
                                            {team.name}
                                            <p className="text-black">
                                                {team.postion}
                                            </p>
                                        </div>

                                        <div className="text-black  pt-5">
                                            {team.content}
                                        </div>

                                    </div>

                                </section>
                            </SwiperSlide>

                        </div>
                    ))}

                </Swiper>


                </div>
            </>

        </DefaultLayout>

    );
}







export async function getStaticProps() {
    const teams = await query.Team.findMany({ query: 'id name slug postion content avatar {url} ' }) as Team[];
    const products = await query.Product.findMany({ query: 'title slug content id' }) as Product[];
    const services = await query.Service.findMany({ query: 'title slug content id' }) as Service[];
    const solutions = await query.Solution.findMany({ query: 'title slug content id' }) as Solution[];

    return {
        props: {
            teams,
            products,
            services,
            solutions
        }
    };
}