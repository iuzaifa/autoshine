import React from 'react'
import HeroSection from '../components/section/HeroSection'
import AboutSection from '../components/section/AboutSection'
import Tab from "../components/Tab"
import Brands from '../components/Brands'

const Home = () => {
  return (
    <>
      <div className='bg-white'>
        <HeroSection/>
        <Brands/>
        <Tab/>

        <AboutSection/>

      </div>
    </>
  )
}

export default Home