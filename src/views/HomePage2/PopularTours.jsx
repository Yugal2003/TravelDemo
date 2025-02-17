import React, { useState } from 'react'
import img1 from '../../assets/PopularTours/package_img_1.jpeg'
import img2 from '../../assets/PopularTours/package_img_2.jpeg'
import img3 from '../../assets/PopularTours/package_img_3.jpeg'
import earth from '../../assets/PopularTours/earth.png'
import { motion } from 'framer-motion'  

const PopularTours = () => {
    const [bgBlue,setBgBlue] = useState(false);
    const [bgBlue2,setBgBlue2] = useState(false);
    const [bgBlue3,setBgBlue3] = useState(false);

  return (
    <div>
        <div className='w-full justify-center items-center mx-auto flex flex-col'>
            <div className='h-[75px] bs:h-[135px] w-full'></div>
          
            {/* container */}
            <div className='w-full justify-center items-center mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px]'>
                <div className='text-center'>
                    <h3 className='mb-[5px] uppercase tracking-[5px] text-[#3fd0d4] font-normal text-[24px] leading-[1.333em] text_lets'>CHOOSE YOUR PACKAGE</h3>
                    <motion.div 
                            initial={{ y: "40%", opacity: 0 }} // Start off-screen to the right
                            whileInView={{ y: 0, opacity: 1 }}  // Move to original position
                            transition={{ duration: 0.7, ease: "easeOut" }} // Smooth animation
                            viewport={{ once: true }} // Ensures animation happens only once
                    >
                        <h2 className='font-semibold text-[56px] leading-[1.327em] mb-0 text-[#102039] travel_top_text'>Popular Tours Packages</h2>
                    </motion.div>
                </div>    
                <div className='h-[40px] bs:h-[55px] w-full'></div>
            </div>

            {/* second container */}
            <div className='w-full justify-center items-center mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px]'>
                <div className='gap-y-[30px] gap-x-0 flex flex-wrap'>

                    {/* first */}
                    <div className='flex-shrink-0 w-full max-w-[100%] px-[12px] bs:flex bs:w-[33.33%]'>
                        <div className='max-w-[515px] mx-auto bg-white cursor-pointer' style={{boxShadow:"0px 0px 45px 0px rgba(0, 0, 0, 0.1)"}}>
                            <a className={`shadow-none overflow-hidden block relative`} onMouseEnter={()=> setBgBlue(true)} onMouseLeave={()=> setBgBlue(false)} style={{transition: "all 0.3s ease"}}>
                                <img className='border-none rounded-none shadow-none h-auto max-w-[100%] hover:scale-105 cursor-pointer' style={{transition: "all 1s ease",verticalAlign:"middle"}} src={img1} alt='img1'/>
                                <div className={`left-[20px] top-[20px] ${bgBlue === true ? "bg-[#3fd0d4]" : "bg-white"} pt-[17px] pr-[58px] pb-[17px] pl-[31px] ${bgBlue === true ? "text-white" : "text-[#102039]"} font-semibold text-[18px] leading-[1.667em] absolute travel_top_text`} style={{clipPath:"polygon(0 0, 100% 0, 85% 100%, 0% 100%)",transition:"all 0.4s ease"}}>3 Day 2 Night</div>
                            </a>
                            <div className='w-full pt-[22px] pr-[25px] pb-[30px] pl-[25px]'>
                                <h2 className='mb-[10px] font-semibold text-[24px] leading-[1.333em] text-[#102039]'>
                                    <a className='shadow-none travel_top_text hover:text-[#3fd0d4]' style={{transition:"all 0.3s ease"}}>Famous for its whitewashed</a>
                                </h2>
                                <p className='flex items-center gap-[10px] my-0 cursor-auto'>
                                    <img src={earth} width={16} alt='earth'/> 
                                    <p className='text-[#666666] deliver'>Santorini, Greece</p>
                                </p>
                                <hr className='mt-[22px] mb-[20px]'/>
                                <div className='flex items-center justify-between cursor-auto'>
                                    <span className='text-[#102039] font-semibold text-[24px] leading-[1.333em] mb-0 travel_top_text'>$4500</span>
                                    <a className='bg-[#102039] hover:bg-[#3fd0d4] text-white py-[10px] px-[25px] cursor-pointer text-[16px] border-none leading-[1.6em] inline-flex justify-center items-center gap-[10px] outline-none rounded-[5px] shadow-none font-semibold deliver' style={{transition: "all 0.4s ease"}}>
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* second */}
                    <div className='flex-shrink-0 w-full max-w-[100%] px-[12px] bs:flex bs:w-[33.33%]'>
                        <div className='max-w-[515px] mx-auto bg-white cursor-pointer' style={{boxShadow:"0px 0px 45px 0px rgba(0, 0, 0, 0.1)"}}>
                            <a className='shadow-none overflow-hidden block relative' onMouseEnter={()=> setBgBlue2(true)} onMouseLeave={()=> setBgBlue2(false)} style={{transition: "all 0.3s ease"}}>
                                <img className='border-none rounded-none shadow-none h-auto max-w-[100%] hover:scale-105 cursor-pointer' style={{transition: "all 1s ease",verticalAlign:"middle"}} src={img2} alt='img1'/>
                                <div className={`left-[20px] top-[20px] ${bgBlue2 === true ? "bg-[#3fd0d4]" : "bg-white"} pt-[17px] pr-[58px] pb-[17px] pl-[31px] ${bgBlue2 === true ? "text-white" : "text-[#102039]"} font-semibold text-[18px] leading-[1.667em] absolute travel_top_text`} style={{clipPath:"polygon(0 0, 100% 0, 85% 100%, 0% 100%)",transition:"all 0.4s ease"}}>4 Day 3 Night</div>
                            </a>
                            <div className='w-full pt-[22px] pr-[25px] pb-[30px] pl-[25px]'>
                                <h2 className='mb-[10px] font-semibold text-[24px] leading-[1.333em] text-[#102039]'>
                                    <a className='shadow-none travel_top_text hover:text-[#3fd0d4]' style={{transition:"all 0.3s ease"}}>An ancient Incan city</a>
                                </h2>
                                <p className='flex items-center gap-[10px] my-0 cursor-auto'>
                                    <img src={earth} width={16} alt='earth'/>
                                    <p className='text-[#666666] deliver'>Machu Picchu, Peru</p>
                                </p>
                                <hr className='mt-[22px] mb-[20px]'/>
                                <div className='flex items-center justify-between cursor-auto'>
                                    <span className='text-[#102039] font-semibold text-[24px] leading-[1.333em] mb-0 travel_top_text'>$3500</span>
                                    <a className='bg-[#102039] hover:bg-[#3fd0d4] text-white py-[10px] px-[25px] cursor-pointer text-[16px] border-none leading-[1.6em] inline-flex justify-center items-center gap-[10px] outline-none rounded-[5px] shadow-none font-semibold deliver' style={{transition: "all 0.4s ease"}}>
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* third */}
                    <div className='flex-shrink-0 w-full max-w-[100%] px-[12px] bs:flex bs:w-[33.33%]'>
                        <div className='max-w-[515px] mx-auto bg-white cursor-pointer' style={{boxShadow:"0px 0px 45px 0px rgba(0, 0, 0, 0.1)"}}>
                            <a className='shadow-none overflow-hidden block relative' onMouseEnter={()=> setBgBlue3(true)} onMouseLeave={()=> setBgBlue3(false)} style={{transition: "all 0.3s ease"}}>
                                <img className='border-none rounded-none shadow-none h-auto max-w-[100%] hover:scale-105 cursor-pointer' style={{transition: "all 1s ease",verticalAlign:"middle"}} src={img3} alt='img1'/>
                                <div className={`left-[20px] top-[20px] ${bgBlue3 === true ? "bg-[#3fd0d4]" : "bg-white"} pt-[17px] pr-[58px] pb-[17px] pl-[31px]  ${bgBlue3 === true ? "text-white" : "text-[#102039]"} font-semibold text-[18px] leading-[1.667em] absolute travel_top_text`} style={{clipPath:"polygon(0 0, 100% 0, 85% 100%, 0% 100%)",transition:"all 0.4s ease"}}>5 Day 4 Night</div>
                            </a>
                            <div className='w-full pt-[22px] pr-[25px] pb-[30px] pl-[25px]'>
                                <h2 className='mb-[10px] font-semibold text-[24px] leading-[1.333em] text-[#102039]'>
                                    <a className='shadow-none travel_top_text hover:text-[#3fd0d4]' style={{transition:"all 0.3s ease"}}>Famous for its skyscrapers</a>
                                </h2>
                                <p className='flex items-center gap-[10px] my-0 cursor-auto'>
                                    <img src={earth} width={16} alt='earth'/>
                                    <p className='text-[#666666] deliver'>New York City, USA</p>
                                </p>
                                <hr className='mt-[22px] mb-[20px]'/>
                                <div className='flex items-center justify-between cursor-auto'>
                                    <span className='text-[#102039] font-semibold text-[24px] leading-[1.333em] mb-0 travel_top_text'>$5500</span>
                                    <a className='bg-[#102039] hover:bg-[#3fd0d4] text-white py-[10px] px-[25px] cursor-pointer text-[16px] border-none leading-[1.6em] inline-flex justify-center items-center gap-[10px] outline-none rounded-[5px] shadow-none font-semibold deliver' style={{transition: "all 0.4s ease"}}>
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className='h-[80px] bs:h-[140px] w-full'></div>
        </div>
    </div>
  )
}

export default PopularTours