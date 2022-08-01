import Link from "next/link";
import DefaultLayout from "../components/layouts/DefaultLayout";


export default function Custom404() {
    return (
        <>

            <DefaultLayout>
                <div className="text-center p-20 text-3xl">
                    404 - PAGE NOT FOUND
                
                </div>
                
            </DefaultLayout>


        </>
    );
}