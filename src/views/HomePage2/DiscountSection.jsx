import React from 'react'
import backImg from '../../assets/DiscountSection/banner_bg_2.jpeg'
import { HiArrowLongRight } from "react-icons/hi2";
import img1 from '../../assets/DiscountSection/first.png';
import img2 from '../../assets/DiscountSection/second.png';
import img3 from '../../assets/DiscountSection/third.png';
import img4 from '../../assets/DiscountSection/four.png';
import img5 from '../../assets/DiscountSection/five.png';
import img6 from '../../assets/DiscountSection/six.png';
import { motion } from 'framer-motion'  

const DiscountSection = () => {
  return (
    <div>
        <div className='relative bg-cover bg-no-repeat bg-center bg-fixed' style={{backgroundImage:`url(${backImg})`}}>
            <div className='h-[80px] bs:h-[150px] w-full'></div>

            {/* container */}
            <div className='w-full justify-center items-center mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px]'>
                <div className='gap-y-[40px] gap-x-0 flex flex-wrap'>
                    {/* first */}
                    <div className='w-full bs:w-[50%] max-w-[100%] px-[12px]'>
                        <div>
                        <motion.div 
                            initial={{ x: "5%", opacity: 0 }} // Start off-screen to the right
                            whileInView={{ x: 0, opacity: 1 }}  // Move to original position
                            transition={{ duration: 0.7, ease: "easeOut" }} // Smooth animation
                            viewport={{ once: true }} // Ensures animation happens only once
                    >
                            <h3 className='mb-[10px] tracking-[3px] text-white font-medium text-[20px] bs:text-[22px] 2xl:text-[24px] leading-[1.333em] text_lets'>27 DISCOUNT OFFER </h3>
                        </motion.div>
                            <h1 className='mb-[20px] text-white font-bold text-[38px] bs:text-[44px] 2xl:text-[56px] leading-[1.327em] travel_top_text'>Discount Popup Examples to Elevate</h1>
                            <p className='mb-[40px] text-[#b2bfc7] text-[18px] leading-[1.667em] deliver'>
                                Denouncing pleasure and praising pain was born and will give you <br/> complete great explorer of the truth the master-builder.
                            </p>
                            <a className='border-none py-[11px] px-[25px] bs:py-[15px] bs:px-[35px] leading-[1.6em] inline-flex justify-center items-center gap-[10px] outline-none text-white hover:text-[#3fd0d4] bg-[#3fd0d4] hover:bg-white cursor-pointer shadow-none font-semibold text-[18px] deliver rounded-[5px]' style={{transition: "all 0.4s ease"}}>
                                Read More <HiArrowLongRight size={20}/>
                            </a>
                        </div>
                    </div>
                    {/* second */}
                    <div className='w-full bs:w-[50%] max-w-[100%] px-[12px]'>
                        <div className='overflow-hidden'>
                            <div className='grid grid-cols-3 w-[calc(100%+2px)] mb-[-1px]'>
                                {/* first */}
                                <div className='flex items-center justify-center min-h-[180px] border-b border-r border-[#8f999e] p-[15px] overflow-hidden'>
                                    <img src={img1} alt='img1'/>
                                </div>
                                <div className='flex items-center justify-center min-h-[180px] border-b border-r border-[#8f999e] p-[15px] overflow-hidden'>
                                    <img src={img2} alt='img1'/>
                                </div>
                                <div className='flex items-center justify-center min-h-[180px] border-b border-r border-[#8f999e] p-[15px] overflow-hidden'>
                                    <img src={img3} alt='img1'/>
                                </div>
                                <div className='flex items-center justify-center min-h-[180px] border-b border-r border-[#8f999e] p-[15px] overflow-hidden'>
                                    <img src={img4} alt='img1'/>
                                </div>
                                <div className='flex items-center justify-center min-h-[180px] border-b border-r border-[#8f999e] p-[15px] overflow-hidden'>
                                    <img src={img5} alt='img1'/>
                                </div>
                                <div className='flex items-center justify-center min-h-[180px] border-b border-r border-[#8f999e] p-[15px] overflow-hidden'>
                                    <img src={img6} alt='img1'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-[80px] bs:h-[150px] w-full'></div>
        </div>
    </div>
  )
}

export default DiscountSection;