// import React from 'react'
// import { FaSearch } from "react-icons/fa";
// import { motion } from 'framer-motion'  

// const HeroSection = () => {
    
//   return (
//     <div className='w-full mt-24 herosection_container'>
//         <div className=''> {/* max-w */}
//             <div className='w-full justify-center items-center mx-auto max-w-full  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px]'>

                

//                 {/* lets Travel Top  */}
//                 <div className='w-full flex flex-col gap-8 justify-center pt-[8.5rem] items-center mx-auto'>

//                     {/* lets  */}
//                     <div className='text-white z-50  flex justify-center items-center mx-auto w-full'>
//                         <h1 style={{letterSpacing:"7.5px"}} className='uppercase text_lets text-[1.375rem] bs:text-[1.5rem]  2xl:text-[1.5625rem]'>Lets Travel The World With Us</h1>
//                     </div>

//                     {/* Travel Top */}
//                     {/* <div style={{letterSpacing:"2px"}} className='mt-8 travel_top_text font-bold text-[100px] bw:text-6xl bs:text-[5rem] 2xl:text-[6.5rem]'></div> */}

//                     <div className='text-white z-50  flex text-center justify-center items-center mx-auto w-full px-[75px]'>
//                         <motion.div 
//                             initial={{ y: "20%", opacity: 0 }} // Start off-screen to the right
//                             whileInView={{ y: 0, opacity: 1 }}  // Move to original position
//                             transition={{ duration: 0.7, ease: "easeOut" }} // Smooth animation
//                             viewport={{ once: true }} // Ensures animation happens only once
//                         >
//                             <div className='flex leading-[1.33em] gap-8 flex-col travel_top_text font-bold text-[100px] bw:text-6xl bs:text-[5rem] 2xl:text-[6.25rem]'><span>Travel Top Destination</span><span>of The World</span></div>
//                         </motion.div>
//                     </div>
//                 </div>
//                 </div>
//                 {/* input + select */}
//                 <div className='w-full justify-center mt-[5.6rem] items-center mx-auto absolute z-30'>
//                     <div className='bg-form p-8 w-full justify-center items-center h-auto mx-auto'>
//                         <div className='bg-white flex flex-row w-full justify-center items-center rounded-md mx-auto'>
//                             <div className='flex items-center px-[20px] w-[26%] border-r border-r-gray-300'>
//                                 <input type='text' className='placeholder:text-gray-400 focus:outline-none font-medium' placeholder='Where to?'/>
//                             </div>
//                             <div className='flex items-center px-[20px] w-[26%] border-r border-r-gray-300'>
//                                 <select className='w-full focus:outline-none'>
//                                     <option className='font-bold'>Destination</option>
//                                     <option>Africa Portugal Mexico</option>
//                                     <option>Machu Pichhu, Peru</option>
//                                     <option>New York City, USA</option>
//                                     <option>Paris, France</option>
//                                     <option>Rome, Italy</option>
//                                     <option>Santorini, Greece</option>
//                                 </select>
//                             </div>
//                             <div className='flex items-center px-[20px] w-[26%] border-r border-r-gray-300'>
//                                 <select className='w-full focus:outline-none'>
//                                     <option className='font-bold'>Duration</option>
//                                     <option>2 Days Tour</option>
//                                     <option>3 Days Tour</option>
//                                     <option>4 Days Tour</option>
//                                     <option>5 Days Tour</option>
//                                     <option>6 Days Tour</option>
//                                     <option>7 Days Tour</option>
//                                 </select>
//                             </div>
//                             <div className='bg-[#3fd0d4] rounded-r-md text-[#102039] duration-100 cursor-pointer hover:text-white hover:bg-[#102039] justify-center gap-[15px] flex items-center w-[22%] h-[75px]'>
//                                 <FaSearch className='' size={20}/>
//                                 <h1 className='text-[16px]  travel_top_text font-semibold'>Find Now</h1>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
           
            
//             <div className='popup_box_1'></div>
//             <div className='popup_box_2'></div>

//         </div>
//     </div>
//   )
// }

// export default HeroSection;


import React from 'react'
import { FaSearch } from "react-icons/fa";
import backImg from '../../../assets/HeroSection/hero_bg.jpeg';
import { motion } from 'framer-motion'  

const HeroSection = () => {
  return (
    <div className='pt-[490px] pb-[395px] px-0 relative overflow-hidden bg-fixed flex items-center justify-center z-0 full-landing' style={{WebkitBoxAlign:"center",WebkitBoxPack:"center",backgroundImage:`url(${backImg})`}}>
        <div className='relative z-[2] max-w-full  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px] w-full px-[12px]'>
            <div className='text-center'>
                <h3 className='tracking-[4px] bs:tracking-[7.5px] mb-[12px] text-white text-[22px] bs:text-[24px] leading-[1.44em] uppercase text_lets'>Lets Travel The World With Us</h3>
                <motion.div 
                            initial={{ y: "20%", opacity: 0 }} // Start off-screen to the right
                            whileInView={{ y: 0, opacity: 1 }}  // Move to original position
                            transition={{ duration: 0.7, ease: "easeOut" }} // Smooth animation
                            viewport={{ once: true }} // Ensures animation happens only once
                        >
                    <h1 className='mb-[40px] bs:mb-[75px] text-white text-[46px] bw:text-[56px] bs:text-[80px] 2xl:text-[100px] leading-[1.33em] travel_top_text font-bold' style={{visibility:"visible",animationDuration:"0.8s",animationDelay:"0.2s",animationName:"fadeInUp"}}><span className='block bs:hidden '>Travel Top Destination of The World</span> <span className='hidden bs:block'>Travel Top Destination <br/>of The World</span></h1>
                </motion.div>
            </div>
            <div className='bg-form mx-auto py-[15px] px-[15px] bs:py-[24px] bs:px-[28px]'>
                <form className='flex flex-col md:flex-row bg-white rounded-[5px]'>
                    <div className='md:border-r md:border-r-white py-0 px-[20px] md:flex-1 flex items-center h-[50px] md:h-auto flex-none'>
                        <input type='text' placeholder='Where to?' style={{border:"upset",outlineOffset:"-2px",transition: "all 0.4s ease"}}/>
                    </div>
                    <div className='md:border-r md:border-r-white py-0 px-[20px] md:flex-1 flex items-center h-[50px] md:h-auto flex-none'>
                        <select className='w-[100%] outline-none'>
                            <option>Destination</option>
                            <option>Africa Portugal Mexico</option>
                            <option>Machu Picchu, Peru</option>
                            <option>New York City, USA</option>
                            <option>Paris, France</option>
                            <option>Rome, Italy</option>
                            <option>Santorini, Greece</option>
                        </select>
                    </div>
                    <div className='md:border-r md:border-r-white py-0 px-[20px] md:flex-1 flex items-center h-[50px] md:h-auto flex-none'>
                        <select className='w-[100%] outline-none'>
                            <option>Duration</option>
                            <option>2 Days Tour</option>
                            <option>3 Days Tour</option>
                            <option>4 Days Tour</option>
                            <option>5 Days Tour</option>
                            <option>6 Days Tour</option>
                            <option>7 Days Tour</option>
                        </select>
                    </div>
                    {/* <input type='text' placeholder=''/> */}
                    <div className='flex-1 flex items-center h-[50px] md:h-auto '>
                        <button className='border-none w-[100%] bg-[#3fd0d4] text-[#102039] h-[50px] bs:h-[75px] gap-[10px] bs:gap-[15px] flex items-center justify-center' style={{fontWeight:"700",borderRadius:"0px 5px 5px 0px",transition: "all 0.3s ease",cursor:"pointer"}}>
                            <FaSearch size={20}/>Find Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div className='hidden bs:block h-[530px] 2xl:h-[580px] w-[380px] 2xl:w-[501px] opacity-[0.55] top-0 left-[343px] bg-[#3fd0d4] absolute'></div>
        {/* <div className='opacity-[0.45] bottom-[-210px] right-[-140px] border border-black h-[505px] rounded-[50%] bg-[#3fd0d4] absolute'></div>
        <div className='opacity-[0.7] right-[-10px] z-[1] bottom-[-370px] h-[510px] rounded-[50%] bg-[#3fd0d4] absolute'></div> */}
        <div className='opacity-[0.45] bottom-[-210px] right-[-140px] w-[498px] h-[510px] rounded-[50%] bg-[#3fd0d4] absolute'></div>
        <div className='opacity-[0.7] right-[-10px] z-[1] bottom-[-370px] w-[498px] h-[510px] rounded-[50%] bg-[#3fd0d4] absolute'></div>
    </div>
  )
}

export default HeroSection