import React from 'react'
import type { Metadata } from "next";
import AboutScrollHandler from '../_components/aboutUsScrollHandler';
import TopSection from './TopSection';
import MiddleSection from './MiddleSection';
import Logo from '../_components/Logo';


export const metadata: Metadata = {
  title: "About",
  description: "Quema Consulting offers organizational development and HR solutions to help companies thrive through strategic planning and effective corporate support.",
};

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  
  return (
    <div >
      <TopSection/>
      <AboutScrollHandler section={searchParams?.section} />
      <MiddleSection/>
      <Logo/>
    </div>
  )
}

export default page
