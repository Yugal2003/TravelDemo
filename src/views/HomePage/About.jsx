import React from 'react'
import { motion } from 'framer-motion'  
import img_logo from '../../assets/Aboutus/about_logo.png';
import { MdDone } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <div className=''>
        <div>
          <div className='h-[80px] bs:h-[140px] w-full'></div>
          <div className='w-full flex flex-col bs:flex-row justify-center items-center mx-auto'>

                <div className='flex gap-[40px] bs:gap-0 flex-col bs:flex-row w-full items-center justify-center max-w-full  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px]'>
                    {/* img */}
                    <div className='bs:w-[41.33%] px-[0.6rem]'>
                        <img src={img_logo} alt='img_logo' className='object-cover'/>
                    </div>

                    {/* text */}
                    <div className='bs:w-[50%] bs:ml-[8.33%] px-[0.8rem]'>
                        <div className='flex'>
                            <h1 style={{letterSpacing:"4px"}} className='text-[20px] bs:text-[22px] 2xl:text-[24px] text_lets text-[#3fd0d4]'>ABOUT US</h1>
                        </div>
                        <div className='mt-2'>
                        <motion.div 
                            initial={{ x: "10%", opacity: 0 }} // Start off-screen to the right
                            whileInView={{ x: 0, opacity: 1 }}  // Move to original position
                            transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
                            viewport={{ once: true }} // Ensures animation happens only once
                        >
                            <h1  className='text-[#102039] w-[100%] bw:h-full leading-[3rem] 2xl:leading-[4.5rem] travel_top_text font-semibold text-[38px] bs:text-[44px] 2xl:text-[56px]'>We are Professional Planners For your</h1>
                            </motion.div>
                        </div>

                        <div className='flex gap-5 mt-6 bs:mt-6 2xl:mt-7'>
                          <div>
                             <h1 className='w-[60px] h-[2px] bg-[#3fd0d4] mt-3'></h1>
                          </div>
                          <div>
                             <h1 className='deliver text-[16px] text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tem por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do</h1>
                          </div>
                        </div>

                        <div className='flex gap-5 mt-6'>
                          <div>
                             <h1 className='w-[60px]'></h1>
                          </div>
                          <div>
                             <h1 className='text-[#3fd0d4] font-medium deliver text-[18px]'>Speak to our Destination Experts at Direct Call +1 546 378 654</h1>
                          </div>
                        </div>

                        {/* <div className='mt-6 w-full flex justify-center border border-black items-center mx-auto'>
                          <h1 className='text-[#3fd0d4] lorem text-[18px]'>Speak to our Destination Experts at Direct Call +1 546 378 654</h1>
                        </div> */}

                        <div className='flex flex-col gap-4 mt-9'>
                          <div className='flex gap-2 items-center'>
                            <span className='rounded-full p-[5px] text-[18px]  bg-[#3fd0d4]'><MdDone size={14} color='white'/></span>
                            <h1 className='text-[#666666] font-normal text-[18px] deliver'>All placges and activiates are carefully picked by us.</h1>
                          </div>
                          <div className='flex gap-2 items-center'>
                            <span className='rounded-full p-[5px] text-[18px]  bg-[#3fd0d4]'><MdDone size={14} color='white'/></span>
                            <h1 className='text-[#666666] font-normal text-[18px] deliver'>98 Course Completitation Rates</h1>
                          </div>
                          <div className='flex gap-2 items-center'>
                            <span className='rounded-full p-[5px] text-[18px]  bg-[#3fd0d4]'><MdDone size={14} color='white'/></span>
                            <h1 className='text-[#666666] font-normal text-[18px] deliver'>We are an award winning agency</h1>
                          </div>
                          <div className='flex gap-2 items-center'>
                            <span className='rounded-full p-[5px] text-[18px]  bg-[#3fd0d4]'><MdDone size={14} color='white'/></span>
                            <h1 className='text-[#666666] font-normal text-[18px] deliver'>Trusted by more than 80,000 customers</h1>
                          </div>
                        </div>
                        <div className='mt-12 flex py-[8px] px-[4px] sm:py-[11px] sm:px-[25px] bs:py-[15px] bs:px-[35px] border-none leading-[1.6em] rounded-md justify-center items-center gap-[5px] sm:gap-[10px] shadow-none hover:bg-[#102039] bg-[#3fd0d4] w-[30%] sm:w-[35%] bw:w-[33%] md:w-[25%] bs:w-[42%] bm:w-[35%] 2xl:w-[30%]'>
                          <div className=''>
                            <button className='text-[12px] sm:text-[18px] text-white font-medium'>Read More</button>
                          </div>
                          <div>
                            <BsArrowRight color='white' size={18}/>
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

export default About;