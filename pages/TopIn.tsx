


export default function TopIn() {
    return (

        <div id="indicators-carousel" className="relative" data-carousel="static">
            {/* <!-- Carousel wrapper --> */}
            <div className="overflow-hidden relative h-56 rounded-lg md:h-96">


                {/* <!-- Item 1 --> */}
                <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
                    <section className="bg-white dark:bg-gray-900">
                        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                            <div className="mr-auto place-self-center lg:col-span-7">
                                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                                <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                    Get started
                                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    Speak to Sales
                                </a>
                            </div>
                            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                            </div>
                        </div>
                    </section>
                </div>


                {/* <!-- Item 2 --> */}
                <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                   <div>
                    this is the second 
                   </div>
                </div>
                {/* <!-- Item 3 --> */}
                <div className="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
                  <div>
                    this is the third
                  </div>
                </div>
                {/* <!-- Item 4 --> */}
                <div className="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
                   <div>
                    this is the fourth
                   </div>
                </div>
                {/* <!-- Item 5 --> */}
                {/* <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item=""> */}
                    {/* <img src="/docs/images/carousel/carousel-5.svg"
                        className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                        alt="..."
                    /> */}
                {/* </div> */}
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                <button type="button" className="w-3 h-3 rounded-full bg-red-500 dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-red-500 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-red-500 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-red-500 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                {/* <button type="button" className="w-3 h-3 rounded-full bg-red-500 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button> */}
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 red-500 dark:bg-gray-800/30 group dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-red-500 dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

    )
}