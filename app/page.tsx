import Head from 'next/head';
import Hero from "./_components/Hero";
import About from "./_components/About";
import Solution from "./_components/Solution";
import Facts from "./_components/Facts";
import Contact from "./_components/Contact";
import Logo from "./_components/Logo";

export default function Home() {
  return (
    <div className="">
          <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#712323" />
      </Head>
      <Hero/>
      <About />
      <Solution />
      <Logo/>
      <Facts/>
      <Contact/>
    </div>
  );
}
