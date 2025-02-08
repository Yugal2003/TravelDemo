import React from 'react'
import Header from '../../components/layout/Header/Header'
import HeroSection from '../../components/layout/HeroSection/HeroSection'
import Footer from '../../components/layout/Footer/Footer'
import About from './About'
import CTA from './CTA'

const Home = () => {
  return (
    <div className='flex flex-col full-landing-image min-h-[885px]'>
        <Header/>
        <HeroSection/>
        <About/>
        <CTA/>
        <Footer/>        
    </div>
  )
}

export default Home;