import React  from 'react'
import heroImg from '../../../assets/HeroSection/hero_2.png'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { motion } from 'framer-motion';
import { IoLocationSharp } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { FaRegCompass } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa";

const HeroSection = () => {
   
  return (
    <div>
        <div className='h-[880px] 3xl:h-auto pt-[145px] pb-[30px] bg-[#c0ffff]'>
            <div className='pl-[8%] 3xl:pl-0 max-w-[1920px] w-[100%] relative mx-auto flex items-center h-[100%] z-[2]'>
                {/* hero img */}
                <div className='max-w-[48%] absolute right-[3%] top-[57%] transform -translate-y-1/2'>
                    <img src={heroImg} alt='hero_img' className='border-none rounded-none shadow-none h-auto max-w-[100%]' style={{verticalAlign:"middle"}}/>
                </div>
                {/* hero text */}
                <div className='relative z-[2] max-w-[780px]'>
                    <h3 className='mb-[15px] text-[#3fd0d4] font-semibold text-[24px] leading-[1.333em] travel_top_text'>Find Next PlaceTo Visit</h3>
                    <h1 className='mb-[30px] font-semibold text-[75px] leading-[1.11em] travel_top_text text-[#102039]'>Tour Travel & Adventure Camping</h1>
                    <p className='mb-[40px] max-w-[600px] text-[18px] deliver leading-[1.667em] text-[#666666]'>Denouncing pleasure and praising pain was born and will give you complete great explorer of the truth the master-builder.</p>
                    <div className='flex items-center gap-y-[30px] gap-x-[35px] flex-wrap'>
                        <a className='border-none py-[15px] px-[30px] leading-[1.6em] inline-flex justify-center items-center gap-[10px] outline-none text-white rounded-[5px] bg-[#3fd0d4] font-semibold text-[18px] deliver' style={{transition: "all 0.4s ease"}}>
                            Read More <MdOutlineArrowRightAlt size={28}/>
                        </a>
                        <div className='flex items-center gap-[10px]'>
                            <div className=''>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <g clip-path="url(#clip0_348_2009)">
                                        <path d="M0 30C0 13.458 13.458 0 30 0C36.6809 0 43.0043 2.14943 48.2869 6.216L41.3154 15.272C38.0491 12.7577 34.1363 11.4286 30 11.4286C19.7597 11.4286 11.4286 19.7597 11.4286 30C11.4286 40.2403 19.7597 48.5714 30 48.5714C38.2477 48.5714 45.2566 43.1677 47.672 35.7143H30V24.2857H60V30C60 46.542 46.542 60 30 60C13.458 60 0 46.542 0 30Z" fill="#3FD0D4"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_348_2009">
                                        <rect width="60" height="60" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </p>
                            </div>

                            <div className='max-w-[155px]'>
                                {/* <div className='w-[157px] h-[26px] relative text-[#ffc107] text-[24px] tracking-[5px] overflow-hidden'> */}
                                    {/* before */}
                                    {/* <div className="hero-section-before-1"></div> */}
                                    {/* <div className='w-[98%] absolute top-0 left-0 h-[100%] overflow-hidden'> */}
                                        {/* before */}
                                        {/* <div className="hero-section-before-2"></div> */}
                                    {/* </div> */}
                                {/* </div> */}
                                <div className='flex flex-row gap-1 items-center'>
                                    <FaStar className='text-[#FFC107]' size={28}/>
                                    <FaStar className='text-[#FFC107]' size={28}/>
                                    <FaStar className='text-[#FFC107]' size={28}/>
                                    <FaStar className='text-[#FFC107]' size={28}/>
                                    <FaStar className='text-[#FFC107]' size={28}/>
                                </div>
                                <div className='font-normal text-[25px] leading-[1.44em] deliver text-[#666666]'>4.9 Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* animation images */}
            <div>
                {/* first */}
                <div className="absolute left-[40%] top-[60%] text-white">
                    {/* Location Icon */}
                    <motion.div
                        className="absolute bottom-5 right-10 w-44 h-44"
                        initial={{ scale: 0.1, opacity: 0.5 }}
                        animate={{
                            scale: [0.1, 1.5],  
                            opacity: 0.5,     
                        }}
                        transition={{
                            duration: 11,  
                            repeat: Infinity,
                            repeatType: "loop", 
                            ease: "linear"
                        }}
                    >
                        <IoLocationSharp size={100}/>
                    </motion.div>
                </div>

                {/* second */}
                <div className="absolute left-[60%] top-[50%] text-white">
                    {/* Location Icon */}
                    <motion.div
                        className="absolute bottom-5 right-10 w-44 h-44"
                        initial={{ scale: 0.1, opacity: 0.5 }}
                        animate={{
                            scale: [0.1, 1.5],  
                            opacity: 0.5,     
                        }}
                        transition={{
                            duration: 8,  
                            repeat: Infinity,
                            repeatType: "loop", 
                            ease: "linear"
                        }}
                    >
                        <FaCarAlt size={100}/>
                    </motion.div>
                </div>

                {/* third */}
                <div className="absolute left-[20%] top-[52%] text-white">
                    {/* Location Icon */}
                    <motion.div
                        className="absolute bottom-5 right-10 w-44 h-44"
                        initial={{ scale: 0.1, opacity: 0.5 }}
                        animate={{
                            scale: [0.1, 1.5], 
                            opacity: 0.5,     
                        }}
                        transition={{
                            duration: 12, 
                            repeat: Infinity,
                            repeatType: "loop", 
                            ease: "linear"
                        }}
                    >
                        <FaPlane size={100}/>
                    </motion.div>
                </div>

                {/* fourth */}
                <div className="absolute left-[92%] top-[52%] text-white">
                    {/* Location Icon */}
                    <motion.div
                        className="absolute bottom-5 right-10 w-44 h-44"
                        initial={{ scale: 0.1, opacity: 0.5 }}
                        animate={{
                            scale: [0.1, 1.5],  
                            opacity: 0.5,   
                        }}
                        transition={{
                            duration: 15,  
                            repeat: Infinity,
                            repeatType: "loop", 
                            ease: "linear"
                        }}
                    >
                        <FaGlobe size={100}/>
                    </motion.div>
                </div>

                {/* five */}
                <div className="absolute left-[27%] top-[112%] text-white">
                    {/* Location Icon */}
                    <motion.div
                        className="absolute bottom-5 right-10 w-44 h-44"
                        initial={{ scale: 0.1, opacity: 0.5 }}
                        animate={{
                            scale: [0.1, 1.5],  
                            opacity: 0.5,   
                        }}
                        transition={{
                            duration: 12,  
                            repeat: Infinity,
                            repeatType: "loop", 
                            ease: "linear"
                        }}
                    >
                        <GiEarthAmerica size={100}/>
                    </motion.div>
                </div>

                {/* six */}
                <div className="absolute left-[65%] top-[112%] text-white">
                    {/* Location Icon */}
                    <motion.div
                        className="absolute bottom-5 right-10 w-44 h-44"
                        initial={{ scale: 0.1, opacity: 0.5 }}
                        animate={{
                            scale: [0.1, 1.5],  
                            opacity: 0.5,     
                        }}
                        transition={{
                            duration: 13,  
                            repeat: Infinity,
                            repeatType: "loop", 
                            ease: "linear"
                        }}
                    >
                        <FaRegCompass size={100}/>
                    </motion.div>
                </div>

                {/* seven */}
                <div className="border border-black absolute left-[99%] top-[112%] text-white">
                    {/* Location Icon */}
                    <motion.div
                        className="absolute bottom-5 right-10 w-44 h-44"
                        initial={{ scale: 0.1, opacity: 0.5 }}
                        animate={{
                            scale: [0.1, 1.5],  
                            opacity: 0.5,     
                        }}
                        transition={{
                            duration: 10, 
                            repeat: Infinity,
                            repeatType: "loop", 
                            ease: "linear"
                        }}
                    >
                        <FaHotel size={100}/>
                    </motion.div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HeroSection;