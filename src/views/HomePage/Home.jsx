import React from 'react'
import Header from '../../components/layout/Header/Header'
import HeroSection from '../../components/layout/HeroSection/HeroSection'
import Footer from '../../components/layout/Footer/Footer'
import About from './About'

const Home = () => {
  return (
    <div className='flex flex-col full-landing-image min-h-[900px]'>
        <Header/>
        <HeroSection/>
        <About/>
        <Footer/>        
    </div>
  )
}

export default Home;