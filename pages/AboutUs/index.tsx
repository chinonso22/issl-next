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
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import Head from "next/head";



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
                </Head>
                <NavBar2 products={products} services={services} solutions={solutions} />
                {/* Hero Section */}
                <div className="w-full text-center bg-grayColour md:p-20 pt-5 pb-5 relative">

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


                    <div className=" ">

                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex absolute left-[500px] top-[300px]">
                            <img src="/swirl_arrow.svg" alt="profile" />

                        </div>

                    </div>

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
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper w-full"
                    >
                        {teams.map(team => (
                            <div key={team.id}>

                                <SwiperSlide>
                                    <section className="bg-primaryColour w-full">


                                        <div className="grid max-w-screen-xl md:max-w-[5000px] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 md:py-10 lg:grid-cols-12">
                                            <div className="mr-auto place-self-start  md:py-[100px] md:px-10 lg:col-span-7">

                                                <h1 className=" text-white max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl md:text-left ">

                                                    {team.name}
                                                    <p>
                                                        {team.postion}
                                                    </p>
                                                </h1>

                                                <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl md:text-left ">

                                                    {team.content}
                                                </p>

                                            </div>


                                            <div className="lg:w-[300px] lg:pt-[150px] lg:pl-[50px] ">
                                                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
                                                    <img src={team.avatar?.url} alt="profile" />

                                                </div>
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