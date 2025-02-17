import React from 'react'
import Header from '../../components/Home2Layout/Header/Header';
import HeroSection from '../../components/Home2Layout/HeroSection/HeroSection';
import PopularTours from './PopularTours';
import DiscountSection from './DiscountSection';
import BestExperience from './BestExperience';
import PopularDestination from './PopularDestination';
import ExpertTeam from './ExpertTeam';
import AdventureTravel from './AdventureTravel';
import CustomerFeedback from './CustomerFeedback';

const Home2 = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <PopularTours/>
        <DiscountSection/>
        <BestExperience/>
        <PopularDestination/>
        <ExpertTeam/>
        <AdventureTravel/>
        <CustomerFeedback/>
    </div>
  )
}

export default Home2;