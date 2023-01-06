import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Prices from '../components/Prices'
import FindOut from '../components/FindOut'
import Feature from '../components/Feature'
import Team from '../components/Team'
import Partners from '../components/Partners'
import RoadMap from '../components/RoadMap'
import OurApp from '../components/OurApp'
import Footer from '../components/Footer'




export default function Home() {
  return (
    <>
      <Head>
        <title>Fultrad</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-White dark:bg-Bg'>
        <Nav/>
        <Hero/>
        <Prices/>
        < FindOut />
        <Feature/>
        <Team/>
        <Partners/>
        <RoadMap/>
        <OurApp/>
        <Footer/>
      </main>
    </>
  )
}
