import React from 'react'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import OurCollection from '../components/OurCollection'
import Banner from '../components/Banner.jsx'
import Bestseller from '../components/Bestseller.jsx'
import Newsletter from '../components/Newsletter.jsx'

const Home = () => {
  return (
    <>
    <Hero/>
    <FeatureCards/>
    <OurCollection/>
    <Banner/>
    <Bestseller/>
    <Newsletter/>
   
    </>
  )
}

export default Home