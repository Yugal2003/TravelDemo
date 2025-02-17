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
import GettingStart from './GettingStart'
import VideoSection from './VideoSection'
import BrandLogo from './BrandLogo'
import NewsAndBlog from './NewsAndBlog'
import HeightSection from './HeightSection'

const Home = () => {
  
  return (
    <div className='flex flex-col full-landing-image min-h-[886px]'>
        <Header/>
        <HeroSection/>
        <About/>
        <CTA/>
        <PopularTours/>
        <GuideSection/>
        <PopularDestination/>
        <ExperienceSection/>
        <GettingStart/>
        <VideoSection/>
        <BrandLogo/> {/* Done */}
        <NewsAndBlog/> {/* Done */}
        <HeightSection/> {/* Done */}
        <Footer/> {/* Done */}
    </div>
  )
}

export default Home;