import Link from "next/link";



export default function Footer() {
    return (
        <div className="bg-grayColour bottom-0 w-full items-center text-primaryColour  px-10  ">

            <div className="flex center grid grid-cols-3 space-x-10 pt-5 pb-2 space-y-10">



                <div className="hidden  lg:flex left-2 lg:w-20  ">
                    <img src="/logo_2.svg" 
                    alt="..." 
                    className=""
                    />
                </div>



                <div className=" break-words col-span-3 lg:col-span-1 w-40 ">
                    Quick links



                    <Link
                        href={'/'}
                    >
                        <div
                            className="hover:cursor-pointer"
                        >
                            Home
                        </div>
                    </Link>

                    <Link
                        href={'/'}
                    >
                        <div
                            className="hover:cursor-pointer"
                        >
                            Company
                        </div>
                    </Link>

                    <Link
                        href={'/Service/index'}
                    >
                        <div
                            className="hover:cursor-pointer"
                        >
                            Services
                        </div>
                    </Link>

                    <Link
                        href={'/Solution/index'}
                    >
                        <div
                            className="hover:cursor-pointer"
                        >
                            Solutions
                        </div>
                    </Link>


                    <Link
                        href={'/'}
                    >
                        <div
                            className="hover:cursor-pointer"
                        >
                            Technologies
                        </div>
                    </Link>

                    <Link
                        href={'/'}
                    >
                        <div
                            className="hover:cursor-pointer"
                        >
                            Cloud Services
                        </div>
                    </Link>

                    <Link
                        href={'/Product/index'}
                    >
                        <div
                            className="hover:cursor-pointer"
                        >
                            Products
                        </div>
                    </Link>




                </div>


                <div className="   break-words col-span-3 lg:col-span-1  w-40 lg:w-full">
                    Contact Information

                    <div className="font-semibold">
                        Phone Number:
                    </div>

                    <div>
                        +2348091863306
                    </div>
                    <div>
                        +2348033151879
                    </div>


                    <div className="font-semibold">
                        Email address


                    </div>


                    <div>
                        <a
                            href="mailto:mails@isslng.com"
                        >
                            mails@isslng.com
                        </a>
                    </div>

                    <div>
                        <a
                            href="mailto:talk2us@isslng.com"
                        >
                            talk2us@isslng.com
                        </a>
                    </div>


                    <div className="font-semibold">
                        Office Address:

                    </div>

                    <div>
                        1st Floor, Tapa House, 3/5,
                        <p>
                            Imam Dauda Street, Surulere, Lagos.
                        </p>
                    </div>



                </div>

            </div>

            <hr />

            <div className=" text-center  py-5">
                &copy; 2022. All rights reserved to Integrated Software Services Limited | ISSLNG.

            </div>
           
        </div>
    )
}