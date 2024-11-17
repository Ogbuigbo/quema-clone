import React from 'react'
import Image from 'next/image'
import TopSection from './TopSection'
import Middle from './Middle'
import Bottom from './Bottom'
import type { Metadata } from "next";
import AboutScrollHandler from '../_components/aboutUsScrollHandler';

export const metadata: Metadata = {
  title: "Services",
  description: "Quema Consulting offers organizational development and HR solutions to help companies thrive through strategic planning and effective corporate support.",
};

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  return (
    <div className='pb-10'>
      <AboutScrollHandler section={searchParams?.section} />
        <TopSection />
        <Middle/>
        <Bottom />
    </div>
  )
}

export default page
