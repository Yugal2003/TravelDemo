import React, { useState } from 'react'
import img1 from '../../assets/PopularTours/package_img_1.jpeg';
import img2 from '../../assets/PopularTours/package_img_2.jpeg';
import img3 from '../../assets/PopularTours/package_img_3.jpeg';
import img4 from '../../assets/PopularTours/package_img_4.jpeg';
import { FaLocationDot } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { motion } from 'framer-motion'  

const PopularTours = () => {

  const [activeBgColor, setActiveBgColor] = useState(null);
  
  const tourPackages = [
    { id: 1, image: img1, location: 'Santorini, Greece', duration: '3 Days', description: 'Famous for its whitewashed',price: "4500" },
    { id: 2, image: img2, location: 'Machu Pichhu, Peru', duration: '4 Days', description: 'An ancient Incan city',price: "3500" },
    { id: 3, image: img3, location: 'New York City, USA', duration: '5 Days', description: 'Famous for its skyscrapers',price: "5500" },
    { id: 4, image: img4, location: 'Rome, Italy', duration: '6 Days', description: 'Proof That Bahamas Beauty',price: "6500" }
  ];
  return (
    <div className=''>
        <div> {/* max-w */}
            <div className='w-full justify-center items-center mx-auto flex flex-col'>
                
                {/* container */}
                <div className='w-full justify-center items-center mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px] px-[12px]'>
                    <div className='w-full justify-center items-center mx-auto flex flex-col'>
                        <h3 className='text-[#3fd0d4] uppercase tracking-[3px] bs:tracking-[5px] font-normal leading-[1.333em] text_lets text-[20px] bs:text-[22px] 2xl:text-[24px]'>CHOOSE YOUR PACKAGE</h3>
                        <motion.div 
                            initial={{ y: "40%", opacity: 0 }} // Start off-screen to the right
                            whileInView={{ y: 0, opacity: 1 }}  // Move to original position
                            transition={{ duration: 0.7, ease: "easeOut" }} // Smooth animation
                            viewport={{ once: true }} // Ensures animation happens only once
                        >
                        <h2 className='text-[#102039] travel_top_text text-[38px] bs:text-[44px] 2xl:text-[56px] font-semibold flex justify-center items-center text-center'>Popular Tours Packages</h2>

                            </motion.div>
                    </div>
                    <div className='w-full h-[40px] bs:h-[55px]'></div>
                </div>

                {/* container-image */}
                <div className='max-w-[1630px] mx-auto w-full flex'>
                  <div className='flex flex-wrap w-full mx-auto gap-y-[24px] bs:gap-y-0'>
                     {
                      tourPackages.map((ele,id) => (
                        <div key={id} className='w-[100%] bw:w-[50%] bs:w-[25%] px-[12px]'>
                          <div style={{backgroundImage: `url(${ele.image})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}} className='h-full w-full pt-[155%] overflow-hidden group rounded-md relative'>
                            <div style={{background: "linear-gradient(0deg, rgba(16, 32, 57, 0.8) 13.54%, rgba(63, 208, 212, 0) 100%)",transition :"all 0.4s ease"}} className='inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100 transition-all duration-500 left-0 top-0 opacity-0 rounded-sm h-full w-full absolute'></div>
                            <div style={{opacity:"1",transition :"all 0.5s ease"}} className='w-full bm:py-[50px] py-[30px] px-[25px] bm:px-[30px] left-0 bottom-0 absolute'>
                              <div className='flex items-center flex-wrap gap-y-[5px] gap-x-[22px] mb-[16px] text-white opacity-0 group-hover:opacity-100 transition-all duration-500'>
                                <div className='flex gap-[6px] items-center text-white deliver'>
                                  <FaLocationDot size={16} color='white'/>{ele.location}
                                </div>
                                <div className='flex gap-[6px] items-center text-white deliver'>
                                <FiClock size={16} color='white'/>{ele.duration}
                                </div>
                              </div>
                              <h2 className='mb-[25px] text-[20px] bs:text-[22px] 2xl:text-[24px] text-white font-medium leading-[1.33em] opacity-0 group-hover:opacity-100 transition-all duration-500 travel_top_text'>{ele.description}</h2>
                              <div onMouseOut={()=> setActiveBgColor(null)} onMouseMove={()=>setActiveBgColor(id)} className='flex flex-wrap cursor-pointer items-center justify-between gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-500'>
                                  <h2 style={{transition :"all 0.4s ease"}} className={`${activeBgColor === id ? "text-[#102039]" : "text-white"} ${activeBgColor === id ?"bg-white":"bg-[#3fd0d4]"} rounded-md flex gap-4 font-medium text-[18px] deliver  py-[9px] px-[18px] bm:py-[12px] bm:px-[25px] leading-[1.6em] justify-center items-center outline-none`}>
                                    Book Now
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="currentColor">
                                          <path d="M19.5866 5.69629H0.41235C0.184269 5.69629 0 5.46776 0 5.1849C0 4.90204 0.184269 4.67352 0.41235 4.67352H18.5906L16.0881 1.57004C15.927 1.37028 15.927 1.04587 16.0881 0.846109C16.2492 0.646349 16.5108 0.646349 16.6718 0.846109L19.8792 4.82374C19.9977 4.97076 20.0325 5.1897 19.9681 5.38147C19.9036 5.57164 19.7529 5.69629 19.5866 5.69629Z" fill="currentColor"/>
                                          <path d="M16.3435 9.11986C16.2384 9.11986 16.1333 9.08012 16.0538 8.99935C15.8935 8.83909 15.8935 8.57884 16.0538 8.41858L19.2487 5.22371C19.4089 5.06345 19.6692 5.06345 19.8294 5.22371C19.9897 5.38396 19.9897 5.64422 19.8294 5.80448L16.6346 8.99935C16.5538 9.08012 16.4487 9.11986 16.3435 9.11986Z" fill="currentColor"/>
                                        </svg>
                                    </p>
                                  </h2>
                                  <span className='text-white font-medium leading-[1.33em] text-[20px] bs:text-[22px] 2xl:text-[24px] deliver'>${ele.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                     }
                  </div>
                  
                </div>

              <div className='h-[80px] bs:h-[135px] w-full'></div>

            </div>
        </div>
    </div>
  )
}

export default PopularTours;