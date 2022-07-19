import Link from "next/link";




export default function NavBar() {
    return (
        <div className="w-full px-5 md:max-w-7xl md:px-5 m-auto flex items-center justify-between bg-primaryColour">

            {/* logo */}
            <Link
                href={"/"}
            >
                <img
                    src="/logo.svg"
                    alt="logo"
                    className="object-contain w-10 md:w-20 float-left hover:cursor-pointer "
                />
            </Link>

            <div className="flex space-x-5  md:space-x-10 justify-end items-center">



                <div>
                    <button className="flex justify-center items-center  w-20 h-7 md:w-25 md:h-10 text-sm bg-primaryColor rounded-lg text-contColor cursor-pointer hover:brightness-75"
                    >
                        Home
                    </button>
                </div>


                <div>
                    <button className="flex justify-center items-center  w-20 h-7 md:w-25 md:h-10 text-sm bg-contColor rounded-lg text-primaryColor border-primaryColor cursor-pointer hover:brightness-75"

                    >
                        services
                    </button>
                </div>


                <div>
                    company
                </div>

                <div>
                    About Us
                </div>

                <div>
                    solutions
                </div>



                <div>
                    <button className="text-red-700 bg-white rounded-lg">
                        Contact Us
                    </button>
                </div>
            </div>

        </div>
    )
}