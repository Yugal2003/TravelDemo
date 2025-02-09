import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/PopularDestination/popular_destination_1.jpeg';
import img2 from '../../assets/PopularDestination/popular_destination_2.jpeg';
import img3 from '../../assets/PopularDestination/popular_destination_3.jpeg';
import img4 from '../../assets/PopularDestination/popular_destination_4.jpeg';
import img5 from '../../assets/PopularDestination/popular_destination_5.jpeg';


const PopularDestination = () => {

  return (
    <div className=''>
        <div> {/* max-w */}
            <div className='w-full justify-center items-center mx-auto flex flex-col'>
                
                {/* container */}
                <div className='w-full justify-center items-center mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px] px-[12px]'>
                    <div className='w-full justify-center items-center mx-auto flex flex-col'>
                        <h3 className='text-[#3fd0d4] uppercase tracking-[3px] bs:tracking-[5px] font-normal leading-[1.333em] text_lets text-[20px] bs:text-[22px] 2xl:text-[24px]'>Popular Destination</h3>
                        <motion.div 
                            initial={{ y: "40%", opacity: 0 }} // Start off-screen to the right
                            whileInView={{ y: 0, opacity: 1 }}  // Move to original position
                            transition={{ duration: 0.7, ease: "easeOut" }} // Smooth animation
                            viewport={{ once: true }} // Ensures animation happens only once
                        >
                        <h2 className='text-[#102039] travel_top_text text-[38px] bs:text-[44px] 2xl:text-[56px] font-semibold flex justify-center items-center text-center'>Popular Destinations</h2>

                            </motion.div>
                    </div>
                    <div className='w-full h-[40px] bs:h-[55px]'></div>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 bs:grid-cols-3 gap-[24px]'>
                        <div>
                            <a href='https' className='h-[410px] block shadow-none overflow-hidden rounded-lg relative' style={{textDecoration : "none",transition: "all 0.3s ease"}}>
                                <div className='h-[100%] w-[100%]'>
                                    <img className='hover:scale-105 object-cover border-none rounded-none shadow-none max-w-[100%] h-[100%] w-[100%]' style={{transition: "all 1s ease",verticalAlign:"middle"}} src={img1} alt='img'/>
                                </div>
                                <div className='w-[100%] p-[35px] bm:p-[50px] left-0 bottom-0 absolute' style={{pointerEvents : "none"}}>
                                    <h2 className='mb-[7px] text-white font-medium text-[30px] 2xl:text-[35px] leading-[1.34em] p-0 travel_top_text'>Eiffel Tower</h2>
                                    <p className='text-white font-medium text-[18px] leading-[1.667em] my-0 deliver'>Paris, 24 Trips</p>
                                </div>
                            </a>
                        </div>

                        {/* second */}
                        <div className='bs:col-span-2'>
                            <a href='https' className='h-[410px] block shadow-none overflow-hidden relative' style={{textDecoration:"none",borderRadius:"8px",transition: "all 0.3s ease"}}>
                                <div className='h-[100%] w-[100%]'>
                                    <img src={img2} className='hover:scale-105 object-cover border-none shadow-none max-w-[100%] h-[100%] w-[100%]' style={{transition: "all 1s ease",verticalAlign:"middle"}} alt='img'/>
                                </div>
                                <div className='w-[100%] p-[35px] bm:p-[50px] left-0 bottom-0 absolute' style={{pointerEvents:"none"}}>
                                    <h2 className='mb-[7px] text-white font-medium text-[30px] 2xl:text-[35px] leading-[1.34em] p-0 travel_top_text'>Pryde Mountains</h2>
                                    <p className='text-white font-medium text-[18px] leading-[1.667em] my-0 deliver'>Paris, 24 Trips</p>
                                </div>
                            </a>
                        </div>

                        {/* third */}
                        <div className=''>
                            <a href='https' className='h-[410px] block shadow-none overflow-hidden relative' style={{textDecoration:"none",borderRadius:"8px",transition: "all 0.3s ease"}}>
                                <div className='h-[100%] w-[100%]'>
                                    <img src={img3} className='hover:scale-105 object-cover border-none shadow-none max-w-[100%] h-[100%] w-[100%]' style={{transition: "all 1s ease",verticalAlign:"middle"}} alt='img'/>
                                </div>
                                <div className='w-[100%] p-[35px] bm:p-[50px] left-0 bottom-0 absolute' style={{pointerEvents:"none"}}>
                                    <h2 className='mb-[7px] text-white font-medium text-[30px] 2xl:text-[35px] leading-[1.34em] p-0 travel_top_text'>Lao Lading Island</h2>
                                    <p className='text-white font-medium text-[18px] leading-[1.667em] my-0 deliver'>Paris, 24 Trips</p>
                                </div>
                            </a>
                        </div>

                        {/* four */}
                        <div className=''>
                            <a href='https' className='h-[410px] block shadow-none overflow-hidden relative' style={{textDecoration:"none",borderRadius:"8px",transition: "all 0.3s ease"}}>
                                <div className='h-[100%] w-[100%]'>
                                    <img src={img4} className='hover:scale-105 object-cover border-none shadow-none max-w-[100%] h-[100%] w-[100%]' style={{transition: "all 1s ease",verticalAlign:"middle"}} alt='img'/>
                                </div>
                                <div className='w-[100%] p-[35px] bm:p-[50px] left-0 bottom-0 absolute' style={{pointerEvents:"none"}}>
                                    <h2 className='mb-[7px] text-white font-medium text-[30px] 2xl:text-[35px] leading-[1.34em] p-0 travel_top_text'>Ton Kwen Temple</h2>
                                    <p className='text-white font-medium text-[18px] leading-[1.667em] my-0 deliver'>Paris, 24 Trips</p>
                                </div>
                            </a>
                        </div>
                        {/* fifth */}
                        <div className=''>
                            <a href='https' className='h-[410px] block shadow-none overflow-hidden relative' style={{textDecoration:"none",borderRadius:"8px",transition: "all 0.3s ease"}}>
                                <div className='h-[100%] w-[100%]'>
                                    <img src={img5} className='hover:scale-105 object-cover border-none shadow-none max-w-[100%] h-[100%] w-[100%]' style={{transition: "all 1s ease",verticalAlign:"middle"}} alt='img'/>
                                </div>
                                <div className='w-[100%] p-[35px] bm:p-[50px] left-0 bottom-0 absolute' style={{pointerEvents:"none"}}>
                                    <h2 className='mb-[7px] text-white font-medium text-[30px] 2xl:text-[35px] leading-[1.34em] p-0 travel_top_text'>Taj Mahal</h2>
                                    <p className='text-white font-medium text-[18px] leading-[1.667em] my-0 deliver'>Paris, 24 Trips</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='h-[80px] bs:h-[140px] w-full'></div>
            </div>
        </div>
    </div>
  )}

export default PopularDestination;