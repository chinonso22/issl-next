
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

//layouts 
import DefaultLayout from "../components/layouts/DefaultLayout";
import Header from '../components/layouts/Header';
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";

import TopHero from './TopHero';
import TopIn from './TopIn';




function OurSolutions() {
  return (
    <div className='py-10 px-5 space-y-10 '>

      <div className='font-semibold text-3xl w-[600px]'>
        Our Solutions
        <div className="bg-red-500 h-0.5 w-14"></div>

        <p className='font-normal text-lg pt-5'>
          We are committed to providing flexible, low-cost solutions to our customers that will help make their businesses run more smoothly and profitably.
        </p>
      </div>


      <div className='grid grid-cols-12 md:space-x-5 space-y-10'>
        {/* stock  */}
        <div className="bg-grayColour py-2 text-primaryColour rounded-xl col-span-12 md:col-span-6 hover:bg-primaryColour hover:text-white">

          <div className='px-10 py-2 '>
            <img
              src='/stock.svg'
              className='bg-white rounded-full w-10  '
            />
          </div>


          <div className="font-semibold text-lg px-10 py-2" >
            Stock Broking and Financial Services
            <p className="font-normal py-2 text-sm ">
              iBroker is an integrated investment management, accounting, transaction handling, customer service and management reporting system
            </p>
          </div>
        </div>


        {/* authentication */}
        <div className=' md:col-span-6 col-span-12 rounded-xl bg-grayColour text-primaryColour hover:bg-primaryColour hover:text-white'>


          <div className=' font-semibold text-lg px-10 py-2'>
            Strong Authentication
            <p className='font-normal py-2 text-sm '>
              Our strong authentication solutions are designed to protect your business, employees and customers across a range of different industries.
            </p>
          </div>
        </div>


        {/* Banking */}

        <div className='bg-red-500 md:col-span-4 col-span-12 rounded-xl bg-grayColour text-primaryColour hover:bg-primaryColour hover:text-white'>


          <div className='font-semibold text-lg px-10 py-2'>
            Banking
            <p className='font-normal py-2 text-sm'>
              To retain current clients and attract new customers, you need to offer your clients the best,
              simplified and affordable solutions to bank online.
            </p>
          </div>
        </div>

        {/* biometrics */}
        <div className='bg-red-500 md:col-span-4 col-span-12 rounded-xl bg-grayColour text-primaryColour hover:bg-primaryColour hover:text-white'>


          <div className='font-semibold text-lg px-10 py-2'>
            Biometrics
            <p className='font-normal py-2 text-sm'>
              integrate a low-cost biometric verification system into your technology platform
              that will help you improve your security and boost your profitability.
            </p>
          </div>
        </div>

        {/* solution */}
        <div className='bg-red-500 md:col-span-4 col-span-12 rounded-xl bg-grayColour text-primaryColour hover:bg-primaryColour hover:text-white'>


          <div className='font-semibold text-lg px-10 py-2'>
            CRM Solutions
            <p className='font-normal py-2 text-sm'>
              We deploy the award winning genesisworld CRM from our CRM  partner,
              CAS-CRM, to provide flexible solutions suitable to your needs.

            </p>
          </div>
        </div>

      </div>



    

    </div>
  )
};



function OurServices() {
  return (
    <div className='py-10 px-5 space-y-10 '>

      <div className='md:px-[300px]'>
        <div className='font-semibold text-3xl w-[600px] bg-blue-500 text-center'>
          Our Services
          <p className="bg-red-500 h-0.5 w-14"></p>

          <p className='font-normal text-lg pt-5'>
            We offer quality and assured services that has long lasting results and that will maximize your businesses profit
          </p>
        </div>
      </div>

      <div className='grid grid-cols-4 space-y-2 '>
        <img
          src='/app_dev.svg'
          className='col-span-2 md:col-span-1'
        />

        <img
          src='/app_dev.svg'
          className='col-span-2 md:col-span-1'
        />

        <img
          src='/app_dev.svg'
          className='col-span-2 md:col-span-1'
        />

        <img
          src='/app_dev.svg'
          className='col-span-2 md:col-span-1'
        />


      </div>



    </div>
  )
}

export default function Home() {
  return (
    <DefaultLayout>
      <>

      <TopIn/>
        <OurSolutions />

        <OurServices />

       

      </>
    </DefaultLayout>
  )
}


