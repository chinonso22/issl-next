import DefaultLayout from "../../components/layouts/DefaultLayout";

function Hero() {
    return (
        <div className="w-full text-center">

            <div className="text-xl text-primaryColour">
                Application Development
            </div>

            <div>
                Helping clients build the best software systems
                is the core of our business
            </div>


        </div>
    )
}



export default function index() {
    return (
        <DefaultLayout>
            <>
                <Hero />


            </>
        </DefaultLayout>
    )
}