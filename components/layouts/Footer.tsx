import Link from "next/link";



export default function Footer() {
    return (
        <div className="bg-primaryColour bottom-0 w-full items-center  ">

            <div className="flex center">
                <img
                    src="/logo.svg"
                    className="px-10"
                />
                <div className="text-white px-10 py-5">
                    Quick links

                    <div>
                        Home
                    </div>

                    <div>
                        Company
                    </div>

                    <div>
                        Services
                    </div>

                    <div>
                        Solutions
                    </div>


                    <div>
                        Technologies
                    </div>

                    <div>
                        Cloud Services
                    </div>

                    <div>
                        Products
                    </div>




                </div>


                <div className="text-white px-10 py-5">
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

            <hr/>

            <div className=" text-center text-white py-5">
                &copy; 2022. All rights reserved to Integrated Software Services Limited | ISSLNG.

            </div>

        </div>
    )
}