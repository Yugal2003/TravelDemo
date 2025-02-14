import React from 'react'
import { motion } from 'framer-motion';
import img1 from '../../assets/GettingStarted/working_process_1.png';
import img2 from '../../assets/GettingStarted/working_process_2.png';
import img3 from '../../assets/GettingStarted/working_process_3.jpeg';

const ExperienceSection = () => {
  return (
    <div>
        <div>{/* max-w */}
            <div className='w-full justify-center items-center mx-auto flex flex-col'>
                <div className='h-[80px] bs:h-[135px] w-full'></div>
                <div className='w-full justify-center items-center mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px] px-[12px]'>
                    {/* first */}
                    <div className='text-center'>
                        <h3 className='mb-[5px] uppercase tracking-[5px] text-[#3fd0d4] font-normal text-[20px] bs:text-[22px] 2xl:text-[24px] leading-[1.333em] text_lets'>
                            HOW IT WORKS
                        </h3> 
                        <motion.div 
                            initial={{ y: "40%", opacity: 0 }} // Start off-screen to the right
                            whileInView={{ y: 0, opacity: 1 }}  // Move to original position
                            transition={{ duration: 0.7, ease: "easeOut" }} // Smooth animation
                            viewport={{ once: true }} // Ensures animation happens only once
                        >
                            <h2 className='text-[38px] bs:text-[44px] 2xl:text-[56px] font-semibold leading-[1.327em] travel_top_text text-[#102039]' style={{visibility:"visible",animationDuration:"0.8s", animationDelay:"0.2s",animationName:"fadeInUp"}}>
                                Getting Started? It’s Simple
                            </h2>
                        </motion.div>  
                    </div>

                    {/* second */}
                    <div className='w-full h-[40px] bs:h-[55px]'></div>

                    {/* third */}
                    <div className='grid grid-cols-1 bs:grid-cols-3 gap-[50px] bs:gap-[86px]'>
                        {/* first */}
                        <div className='text-center relative'>
                            {/* before */}
                            <div className="relative arrow-container">
                                <div className="arrow-before"></div>
                            </div>

                            <div className='w-[300px] h-[300px] mx-auto p-[33px] mb-[42px] rounded-full relative text-center' style={{border:"1px dashed rgb(63,208,212)"}}>
                                <img src={img1} className='border-none shadow-none h-auto max-w-[100%] rounded-full text-center' style={{verticalAlign:"middle"}} alt='img'/>
                                <span className='h-[80px] w-[80px] right-0 top-0 bg-[#3fd0d4] font-semibold text-[22px] bs:text-[24px] leading-[1.44em] rounded-full text-white items-center justify-center absolute flex text-center deliver'>01</span>
                            </div>
                            <h2 className='mb-[15px] font-semibold text-[22px] bs:text-[24px] 2xl:text-[25px] leading-[1.44em] text-[#102039] p-0 travel_top_text'>Get Travel Insurence</h2>
                            <p className='m-0 text-center  text-[#666666] deliver'>We provide a range of digital marketing lutions including website design.</p>
                        </div>

                        {/* second */}
                        <div className='text-center relative'>
                            {/* before */}
                            <div className="relative arrow-container">
                                <div className="arrow-before"></div>
                            </div>

                            <div className='w-[300px] h-[300px] mx-auto p-[33px] mb-[42px] rounded-full relative text-center' style={{border:"1px dashed rgb(63,208,212)"}}>
                                <img src={img2} className='border-none shadow-none h-auto max-w-[100%] rounded-full text-center' style={{verticalAlign:"middle"}} alt='img'/>
                                <span className='h-[80px] w-[80px] right-0 top-0 bg-[#3fd0d4] font-semibold text-[22px] bs:text-[24px] leading-[1.44em] rounded-full text-white items-center justify-center absolute flex text-center deliver'>02</span>
                            </div>
                            <h2 className='mb-[15px] font-semibold text-[22px] bs:text-[24px] 2xl:text-[25px] leading-[1.44em] text-[#102039] p-0 travel_top_text'>Compare & Book</h2>
                            <p className='m-0 text-center  text-[#666666] deliver'>We provide a range of digital marketing lutions including website design.</p>
                        </div>

                        {/* third */}
                        <div className='text-center relative'>
                            <div className='w-[300px] h-[300px] mx-auto p-[33px] mb-[42px] rounded-full relative text-center' style={{border:"1px dashed rgb(63,208,212)"}}>
                                <img src={img3} className='border-none shadow-none h-auto max-w-[100%] rounded-full text-center' style={{verticalAlign:"middle"}} alt='img'/>
                                <span className='h-[80px] w-[80px] right-0 top-0 bg-[#3fd0d4] font-semibold text-[22px] bs:text-[24px] leading-[1.44em] rounded-full text-white items-center justify-center absolute flex text-center deliver'>03</span>
                            </div>
                            <h2 className='mb-[15px] font-semibold text-[22px] bs:text-[24px] 2xl:text-[25px] leading-[1.44em] text-[#102039] p-0 travel_top_text'>Book a Room</h2>
                            <p className='m-0 text-center  text-[#666666] deliver'>We provide a range of digital marketing lutions including website design.</p>
                        </div>
                    </div>
                </div>
                <div className='h-[80px] bs:h-[133px] w-full'></div>
            </div>
        </div>
    </div>
  )}


  export default ExperienceSection;