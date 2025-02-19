import React, { useState } from 'react'
import img1 from '../../assets/PopularTours/package_img_1.jpeg'
import img2 from '../../assets/PopularTours/package_img_2.jpeg'
import img3 from '../../assets/PopularTours/package_img_3.jpeg'
import earth from '../../assets/PopularTours/earth.png'
import { motion } from 'framer-motion'  

const PopularTours = () => {
    const [bgBlue,setBgBlue] = useState(false);

    const toursData = [
        {
            imgUrl : img1,
            days : "3 Day 2 Night",
            title : "Famous for its whitewashed",
            place : "Santorini, Greece",
            price : "4500"
        },
        {
            imgUrl : img2,
            days : "4 Day 3 Night",
            title : "An ancient Incan city",
            place : "Machu Picchu, Peru",
            price : "3500"
        },
        {
            imgUrl : img3,
            days : "5 Day 4 Night",
            title : "Famous for its skyscrapers",
            place : "New York City, USA",
            price : "5500"
        }
    ]

  return (
    <div>
        <div className='w-full justify-center items-center mx-auto flex flex-col'>
            <div className='h-[75px] bs:h-[135px] w-full'></div>
          
            {/* container */}
            <div className='w-full justify-center items-center mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px]'>
                <div className='text-center'>
                    <h3 className='mb-[5px] uppercase tracking-[3px] bs:tracking-[5px] text-[#3fd0d4] font-normal text-[20px] bs:text-[22px] 2xl:text-[24px] leading-[1.333em] text_lets'>CHOOSE YOUR PACKAGE</h3>
                    <motion.div 
                            initial={{ y: "40%", opacity: 0 }} // Start off-screen to the right
                            whileInView={{ y: 0, opacity: 1 }}  // Move to original position
                            transition={{ duration: 0.7, ease: "easeOut" }} // Smooth animation
                            viewport={{ once: true }} // Ensures animation happens only once
                    >
                        <h2 className='font-semibold text-[38px] bs:text-[44px] 2xl:text-[56px] leading-[1.327em] mb-0 text-[#102039] travel_top_text'>Popular Tours Packages</h2>
                    </motion.div>
                </div>    
                <div className='h-[40px] bs:h-[55px] w-full'></div>
            </div>

            {/* second container */}
            <div className='w-full justify-center items-center mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px]'>
                <div className='gap-y-[30px] gap-x-0 flex flex-wrap'>
                    {
                        toursData.map((ele,index)=> (
                            <div onMouseEnter={()=> setBgBlue(index)} onMouseLeave={()=> setBgBlue(false)} key={index} className='flex-shrink-0 w-full max-w-[100%] px-[12px] bs:flex bs:w-[33.33%]'>
                                <div className='max-w-[515px] mx-auto bg-white cursor-pointer' style={{boxShadow:"0px 0px 45px 0px rgba(0, 0, 0, 0.1)"}}>
                                    <a className={`shadow-none overflow-hidden block relative`} style={{transition: "all 0.3s ease"}}>
                                        <img className='border-none rounded-none shadow-none h-auto max-w-[100%] cursor-pointer hover:scale-105' style={{transition: "all 1s ease",verticalAlign:"middle"}} src={ele.imgUrl} alt='img1'/>
                                        <div className={`left-[20px] top-[20px] ${bgBlue === index ? "bg-[#3fd0d4]" : "bg-white"} ${bgBlue === index ? "text-white" : "bg-[#3fd0d4]"} pt-[17px] pr-[58px] pb-[17px] pl-[31px] font-semibold text-[18px] leading-[1.667em] absolute travel_top_text`} style={{clipPath:"polygon(0 0, 100% 0, 85% 100%, 0% 100%)",transition:"all 0.4s ease"}}>{ele.days}</div>
                                    </a>
                                    <div className='w-full pt-[22px] pr-[25px] pb-[30px] pl-[25px]'>
                                        <h2 className='mb-[10px] font-semibold text-[20px] bs:text-[22px] 2xl:text-[24px] leading-[1.333em] text-[#102039]'>
                                            <a className='shadow-none travel_top_text hover:text-[#3fd0d4]' style={{transition:"all 0.3s ease"}}>{ele.title}</a>
                                        </h2>
                                        <p className='flex items-center gap-[10px] my-0 cursor-auto'>
                                            <img src={earth} width={16} alt='earth'/> 
                                            <p className='text-[#666666] deliver'>{ele.place}</p>
                                        </p>
                                        <hr className='mt-[22px] mb-[20px]'/>
                                        <div className='flex items-center justify-between cursor-auto'>
                                            <span className='text-[#102039] font-semibold text-[20px] bs:text-[22px] 2xl:text-[24px] leading-[1.333em] mb-0 travel_top_text'>${ele.price}</span>
                                            <a className='bg-[#102039] hover:bg-[#3fd0d4] text-white py-[10px] px-[25px] cursor-pointer text-[16px] border-none leading-[1.6em] inline-flex justify-center items-center gap-[10px] outline-none rounded-[5px] shadow-none font-semibold deliver' style={{transition: "all 0.4s ease"}}>
                                                Book Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }                    
                </div>
            </div>
            
            <div className='h-[80px] bs:h-[140px] w-full'></div>
        </div>
    </div>
  )
}

export default PopularTours