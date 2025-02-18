import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Home2Layout/Header/Header';
import HeroSection from '../../components/Home2Layout/HeroSection/HeroSection';
import PopularTours from './PopularTours';
import DiscountSection from './DiscountSection';
import BestExperience from './BestExperience';
import PopularDestination from './PopularDestination';
import ExpertTeam from './ExpertTeam';
import AdventureTravel from './AdventureTravel';
import CustomerFeedback from './CustomerFeedback';
import NewsAndBlog from './NewsAndBlog';
import Footer from '../../components/Home2Layout/Footer/Footer';

const Home2 = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 100) {
        // Always show header near the top
        setIsHeaderVisible(true);
      } else {
        // Determine scroll direction
        if (currentScrollY > prevScrollY.current) {
          // Scrolling down: hide header
          setIsHeaderVisible(false);
        } else {
          // Scrolling up: show header
          setIsHeaderVisible(true);
        }
      }

      // Update previous scroll position
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
        <Header isHeaderVisible={isHeaderVisible} />
        <HeroSection/>
        <PopularTours/>
        <DiscountSection/>
        <BestExperience/>
        <PopularDestination/>
        <ExpertTeam/>
        <AdventureTravel/>
        <CustomerFeedback/>
        <NewsAndBlog/>
        <Footer/>
    </div>
  )
}

export default Home2;