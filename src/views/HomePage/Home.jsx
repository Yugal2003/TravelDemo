import React from 'react'
import Header from '../../components/layout/Header/Header'
import HeroSection from '../../components/layout/HeroSection/HeroSection'
import Footer from '../../components/layout/Footer/Footer'
import About from './About'
import CTA from './CTA'
import PopularTours from './PopularTours'
import GuideSection from './GuideSection'
import PopularDestination from './PopularDestination'
import ExperienceSection from './ExperienceSection'

const Home = () => {
  return (
    <div className='flex flex-col full-landing-image min-h-[885px]'>
        <Header/>
        <HeroSection/>
        <About/>
        <CTA/>
        <PopularTours/>
        <GuideSection/>
        <PopularDestination/>
        <ExperienceSection/>
        <Footer/>        
    </div>
  )
}

export default Home;