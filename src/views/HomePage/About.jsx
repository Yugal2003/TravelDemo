import React from 'react'
import img_logo from '../../assets/Aboutus/about_logo.png';
import { MdDone } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <div className='mt-[450px]'>
        <div>
          <div className='w-full flex flex-col bs:flex-row justify-center items-center mx-auto'>

                {/* above 992px */}
                <div className='flex flex-col bs:flex-row w-full items-center justify-center max-w-full px-4 bw:px-0 bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px]'>
                    {/* img */}
                    <div className='bs:w-[41.33%] px-[0.6rem] border border-black'>
                        <img src={img_logo} alt='img_logo' className='object-cover'/>
                    </div>

                    {/* text */}
                    <div className='bs:w-[50%] bs:ml-[8.33%]'>
                        <div className='flex'>
                            <h1 style={{letterSpacing:"2px"}} className='text-[20px] bs:text-[22px] 2xl:text-[24px] text_lets text-[#3fd0d4]'>ABOUT US</h1>
                        </div>
                        <div className='mt-2'>
                            <h1 style={{lineHeight:"64px"}} className='text-[#102039] travel_top_text font-bold text-[38px] bs:text-[44px] 2xl:text-[56px]'>We are Professional Planners For your</h1>
                        </div>

                        <div className='flex gap-6 mt-4'>
                          <div>
                             <h1 className='w-[60px] h-[2px] bg-[#3fd0d4] mt-3'></h1>
                          </div>
                          <div>
                             <h1 className='lorem text-[1rem] text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tem por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do</h1>
                          </div>
                        </div>

                        <div className='mt-4 w-full flex justify-center items-center mx-auto pr-6'>
                          <h1 className='text-[#3fd0d4] lorem text-[16px] font-semibold'>Speak to our Destination Experts at Direct Call +1 546 378 654</h1>
                        </div>
                        <div className='flex flex-col gap-4 mt-8'>
                          <div className='flex gap-2 items-center'>
                            <span className='rounded-full p-1 text-[18px] lorem bg-[#3fd0d4]'><MdDone size={14} color='white'/></span>
                            <h1 className='text-[#666666] font-medium'>All placges and activiates are carefully picked by us.</h1>
                          </div>
                          <div className='flex gap-2 items-center'>
                            <span className='rounded-full p-1 text-[18px] lorem bg-[#3fd0d4]'><MdDone size={14} color='white'/></span>
                            <h1 className='text-[#666666] font-medium'>98 Course Completitation Rates</h1>
                          </div>
                          <div className='flex gap-2 items-center'>
                            <span className='rounded-full p-1 text-[18px] lorem bg-[#3fd0d4]'><MdDone size={14} color='white'/></span>
                            <h1 className='text-[#666666] font-medium'>We are an award winning agency</h1>
                          </div>
                          <div className='flex gap-2 items-center'>
                            <span className='rounded-full p-1 text-[18px] lorem bg-[#3fd0d4]'><MdDone size={14} color='white'/></span>
                            <h1 className='text-[#666666] font-medium'>Trusted by more than 80,000 customers</h1>
                          </div>
                        </div>
                        <div className='mt-12 flex w-40 p-4 rounded-md items-center gap-2 hover:bg-[#102039] bg-[#3fd0d4]'>
                          <div className=''>
                            <button className='text-[18px] text-white font-semibold'>Read More</button>
                          </div>
                          <div>
                            <BsArrowRight color='white' size={18}/>
                          </div>
                        </div>
                    </div>
                </div>

                {/* below 992px */}
                <div>

                </div>
          </div>
        </div>
    </div>
  )
}

export default About;