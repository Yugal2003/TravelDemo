// import React from 'react'
// import { MdKeyboardArrowRight } from "react-icons/md";
// import img1 from '../../assets/PopularDestination/popular_destination_1.jpeg';
// import img2 from '../../assets/PopularDestination/popular_destination_2.jpeg';
// import img3 from '../../assets/PopularDestination/popular_destination_3.jpeg';
// import img4 from '../../assets/PopularDestination/popular_destination_4.jpeg';
// import img5 from '../../assets/PopularDestination/popular_destination_5.jpeg';

// const PopularDestination = () => {
    
//   return (
//     <div>
//         <div className=' bg-[#ecffff]'>
//             <div className='h-[75px] bs:h-[135px] w-full'></div>
//             <div className='w-full mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px] px-[12px]'>
//                 {/* first */}
//                 <div>
//                     <h3 className='mb-[5px] uppercase tracking-[5px] text-[#3fd0d4] font-normal text-[24px] leading-[1.333em]'>POPULAR DESTINATION</h3>
//                     <h2 className='font-semibold text-[56px] leading-[1.327em]'>Popular Destinations</h2>
//                 </div>
//                 <div className='h-[40px] bs:h-[55px] w-full'></div>
//                 <div className='flex'>
//                     {/* first */}
//                     <div className='flex-[3] h-[450px] flex items-end relative overflow-hidden cursor-pointer' style={{transition: "all 0.4s ease"}}>
//                         <a className='absolute h-[100%] w-[100%] left-0 top-0 shadow-none bg-cover bg-no-repeat bg-center' style={{transition: "all 0.4s ease",backgroundImage:`url(${img1})`}}></a>
//                         <a className='h-[55px] w-[55px] bg-white text-[#102039] right-[18px] top-[24px] z-[1] rounded-full shadow-none flex items-center justify-center absolute' style={{transition: "all 0.4s ease",transform: "translate(0px, 0px) scale(1) rotate(360deg)"}}>
//                             <MdKeyboardArrowRight size={28}/>
//                         </a>
//                         <div className='opacity-[1] left-0 relative z-[2] w-[100%] py-[44px] px-[34px]' style={{transition: "all 0.4s ease",transitionDelay:"0.3s"}}>
//                             <h2 className='text-white text-[35px] leading-[1.34em]'>
//                                 <a className='shadow-none' style={{transition: "all 0.3s ease"}}>Eiffel Tower</a>
//                             </h2>
//                         </div>
//                     </div>
//                     {/* second */}
//                     <div className='flex-[1.3] h-[450px] flex items-end relative overflow-hidden cursor-pointer' style={{transition: "all 0.4s ease"}}>
//                         <a className='absolute h-[100%] w-[100%] left-0 top-0 shadow-none bg-cover bg-no-repeat bg-center' style={{transition: "all 0.4s ease",backgroundImage:`url(${img2})`}}></a>
//                         <a className='h-[55px] w-[55px] bg-white text-[#102039] right-[18px] top-[24px] z-[1] rounded-full shadow-none flex items-center justify-center absolute' style={{transition: "all 0.4s ease",transform: "translate(0px, 0px) scale(0) rotate(360deg)"}}>
//                             <MdKeyboardArrowRight size={28}/>
//                         </a>
//                         <div className='opacity-0 left-[80px] relative z-[2] w-[100%] py-[44px] px-[34px]' style={{transition: "all 0.2s ease"}}>
//                             <h2 className='text-white text-[35px] leading-[1.34em]'>
//                                 <a className='shadow-none' style={{transition: "all 0.3s ease"}}>Pryde Mountains</a>
//                             </h2>
//                         </div>
//                     </div>
//                     {/* third */}
//                     <div className='flex-[1] h-[450px] flex items-end relative overflow-hidden cursor-pointer' style={{transition: "all 0.4s ease"}}>
//                         <a className='absolute h-[100%] w-[100%] left-0 top-0 shadow-none bg-cover bg-no-repeat bg-center' style={{transition: "all 0.4s ease",backgroundImage:`url(${img3})`}}></a>
//                         <a className='h-[55px] w-[55px] bg-white text-[#102039] right-[18px] top-[24px] z-[1] rounded-full shadow-none flex items-center justify-center absolute' style={{transition: "all 0.6s ease",transform: "translate(0px, 0px) scale(0) rotate(360deg)"}}>
//                             <MdKeyboardArrowRight size={28}/>
//                         </a>
//                         <div className='opacity-0 left-[80px] relative z-[2] w-[100%] py-[44px] px-[34px]' style={{transition: "all 0.2s ease"}}>
//                             <h2 className='text-white text-[35px] leading-[1.34em]'>
//                                 <a className='shadow-none' style={{transition: "all 0.3s ease"}}>Lao Lading Island</a>
//                             </h2>
//                         </div>
//                     </div>
//                     {/* fourth */}
//                     <div className='flex-[1] h-[450px] flex items-end relative overflow-hidden cursor-pointer' style={{transition: "all 0.4s ease"}}>
//                         <a className='absolute h-[100%] w-[100%] left-0 top-0 shadow-none bg-cover bg-no-repeat bg-center' style={{transition: "all 0.3s ease",backgroundImage:`url(${img4})`}}></a>
//                         <a className='h-[55px] w-[55px] bg-white text-[#102039] right-[18px] top-[24px] z-[1] rounded-full shadow-none flex items-center justify-center absolute' style={{transition: "all 0.6s ease",transform: "translate(0px, 0px) scale(0) rotate(360deg)"}}>
//                             <MdKeyboardArrowRight size={28}/>
//                         </a>
//                         <div className='opacity-0 left-[80px] relative z-[2] w-[100%] py-[44px] px-[34px]' style={{transition: "all 0.2s ease"}}>
//                             <h2 className='text-white text-[35px] leading-[1.34em]'>
//                                 <a className='shadow-none' style={{transition: "all 0.3s ease"}}>Ton Kwen Temple</a>
//                             </h2>
//                         </div>
//                     </div>
//                     {/* five */}
//                     <div className='flex-[1] h-[450px] flex items-end relative overflow-hidden cursor-pointer' style={{transition: "all 0.4s ease"}}>
//                         <a className='absolute h-[100%] w-[100%] left-0 top-0 shadow-none bg-cover bg-no-repeat bg-center' style={{transition: "all 0.3s ease",backgroundImage:`url(${img5})`}}></a>
//                         <a className='h-[55px] w-[55px] bg-white text-[#102039] right-[18px] top-[24px] z-[1] rounded-full shadow-none flex items-center justify-center absolute' style={{transition: "all 0.6s ease",transform: "translate(0px, 0px) scale(0) rotate(360deg)"}}>
//                             <MdKeyboardArrowRight size={28}/>
//                         </a>
//                         <div className='opacity-0 left-[80px] relative z-[2] w-[100%] py-[44px] px-[34px]' style={{transition: "all 0.2s ease"}}>
//                             <h2 className='text-white text-[35px] leading-[1.34em]'>
//                                 <a className='shadow-none' style={{transition: "all 0.3s ease"}}>Taj Mahal</a>
//                             </h2>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='h-[80px] bs:h-[140px] w-full'></div>
//         </div>
//     </div>
//   )
// }

// export default PopularDestination;








import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import img1 from '../../assets/PopularDestination/popular_destination_1.jpeg';
import img2 from '../../assets/PopularDestination/popular_destination_2.jpeg';
import img3 from '../../assets/PopularDestination/popular_destination_3.jpeg';
import img4 from '../../assets/PopularDestination/popular_destination_4.jpeg';
import img5 from '../../assets/PopularDestination/popular_destination_5.jpeg';

const PopularDestination = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
        <div className=' bg-[#ecffff]'>
            <div className='h-[75px] bs:h-[135px] w-full'></div>
            <div className='w-full mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px] px-[12px]'>
                {/* first */}
                <div>
                    <h3 className='mb-[5px] uppercase tracking-[3px] bs:tracking-[5px] text-[#3fd0d4] font-normal text-[20px] bs:text-[22px] 2xl:text-[24px] leading-[1.333em] text_lets'>POPULAR DESTINATION</h3>
                    <h2 className='font-semibold text-[38px] bs:text-[44px] 2xl:text-[56px] leading-[1.327em] travel_top_text'>Popular Destinations</h2>
                </div>
                <div className='h-[40px] bs:h-[55px] w-full'></div>
                <div 
                  className='flex flex-col md:flex-row'
                  onMouseLeave={() => setActiveIndex(0)}
                >
                    {/* first */}
                    <div 
                      className='h-[300px] md:h-[450px] flex-none md:flex items-end relative overflow-hidden cursor-pointer' 
                      style={{
                        transition: "all 0.4s ease",
                        flex: window.innerWidth >= 768 ? (activeIndex === 0 ? 3 : 1.3) : "unset"
                      }}
                      onMouseEnter={() => setActiveIndex(0)}
                    >
                        <a className='absolute h-[100%] w-[100%] left-0 top-0 shadow-none bg-cover bg-no-repeat bg-center' style={{transition: "all 0.4s ease", backgroundImage: `url(${img1})`}}></a>
                        <a className='h-[55px] w-[55px] bg-white text-[#102039] left-[40px] 2xl:left-auto bottom-[50px] 2xl:bottom-auto right-[18px] top-[24px] z-[1] rounded-full shadow-none hidden md:flex items-center justify-center absolute' style={{
                            transition: "all 0.4s ease",
                            transform: activeIndex === 0 ? "translate(0px, 0px) scale(1) rotate(360deg)" : "translate(0px, 0px) scale(0) rotate(360deg)"
                          }}>
                            <MdKeyboardArrowRight size={28}/>
                        </a>
                        <div className='absolute bottom-0 left-0 md:relative z-[2] w-[100%] p-[30px] 2xl:py-[44px] 2xl:px-[34px]' style={{
                            transition: "all 0.4s ease",
                            opacity: activeIndex === 0 ? 1 : 0,
                            left: activeIndex === 0 ? 0 : '80px',
                            transitionDelay: activeIndex === 0 ? "0.3s" : "0s"
                          }}>
                            <h2 className='text-white text-[30px] 2xl:text-[35px] leading-[1.34em]'>
                                <a className='shadow-none travel_top_text font-bold md:hover:underline' style={{transition: "all 0.3s ease"}}>Eiffel Tower</a>
                            </h2>
                        </div>
                    </div>
                    {/* second */}
                    <div 
                      className='h-[300px] md:h-[450px] flex-none md:flex items-end relative overflow-hidden cursor-pointer' 
                      style={{
                        transition: "all 0.4s ease",
                        flex: window.innerWidth >= 768 ? (activeIndex === 1 ? 3 : 1.3) : "unset"
                      }}
                      onMouseEnter={() => setActiveIndex(1)}
                    >
                        <a className='absolute h-[100%] w-[100%] left-0 top-0 shadow-none bg-cover bg-no-repeat bg-center' style={{transition: "all 0.4s ease", backgroundImage: `url(${img2})`}}></a>
                        <a className='h-[55px] w-[55px] bg-white text-[#102039] left-[40px] 2xl:left-auto bottom-[50px] 2xl:bottom-auto right-[18px] top-[24px] z-[1] rounded-full shadow-none hidden md:flex items-center justify-center absolute' style={{
                            transition: "all 0.4s ease",
                            transform: activeIndex === 1 ? "translate(0px, 0px) scale(1) rotate(360deg)" : "translate(0px, 0px) scale(0) rotate(360deg)"
                          }}>
                            <MdKeyboardArrowRight size={28}/>
                        </a>
                        <div className='absolute bottom-0 left-0 md:relative z-[2] w-[100%] py-[44px] px-[34px]' style={{
                            transition: "all 0.4s ease",
                            opacity: activeIndex === 1 ? 1 : 0,
                            left: activeIndex === 1 ? 0 : '80px',
                            transitionDelay: activeIndex === 1 ? "0.3s" : "0s"
                          }}>
                            <h2 className='text-white text-[30px] 2xl:text-[35px] leading-[1.34em]'>
                                <a className='shadow-none travel_top_text font-bold md:hover:underline' style={{transition: "all 0.3s ease"}}>Pryde Mountains</a>
                            </h2>
                        </div>
                    </div>
                    {/* third */}
                    <div 
                      className='h-[300px] md:h-[450px] flex-none md:flex items-end relative overflow-hidden cursor-pointer' 
                      style={{
                        transition: "all 0.4s ease",
                        flex: window.innerWidth >= 768 ? (activeIndex === 2 ? 3 : 1) : "unset"
                      }}
                      onMouseEnter={() => setActiveIndex(2)}
                    >
                        <a className='absolute h-[100%] w-[100%] left-0 top-0 shadow-none bg-cover bg-no-repeat bg-center' style={{transition: "all 0.4s ease", backgroundImage: `url(${img3})`}}></a>
                        <a className='h-[55px] w-[55px] bg-white text-[#102039] left-[40px] 2xl:left-auto bottom-[50px] 2xl:bottom-auto right-[18px] top-[24px] z-[1] rounded-full shadow-none hidden md:flex items-center justify-center absolute' style={{
                            transition: "all 0.6s ease",
                            transform: activeIndex === 2 ? "translate(0px, 0px) scale(1) rotate(360deg)" : "translate(0px, 0px) scale(0) rotate(360deg)"
                          }}>
                            <MdKeyboardArrowRight size={28}/>
                        </a>
                        <div className='absolute bottom-0 left-0 md:relative z-[2] w-[100%] py-[44px] px-[34px]' style={{
                            transition: "all 0.2s ease",
                            opacity: activeIndex === 2 ? 1 : 0,
                            left: activeIndex === 2 ? 0 : '80px',
                            transitionDelay: activeIndex === 2 ? "0.3s" : "0s"
                          }}>
                            <h2 className='text-white text-[30px] 2xl:text-[35px] leading-[1.34em]'>
                                <a className='shadow-none travel_top_text font-bold md:hover:underline' style={{transition: "all 0.3s ease"}}>Lao Lading Island</a>
                            </h2>
                        </div>
                    </div>
                    {/* fourth */}
                    <div 
                      className='h-[300px] md:h-[450px] flex-none md:flex items-end relative overflow-hidden cursor-pointer' 
                      style={{
                        transition: "all 0.4s ease",
                        flex: window.innerWidth >= 768 ? (activeIndex === 3 ? 3 : 1) : "unset"
                      }}
                      onMouseEnter={() => setActiveIndex(3)}
                    >
                        <a className='absolute h-[100%] w-[100%] left-0 top-0 shadow-none bg-cover bg-no-repeat bg-center' style={{transition: "all 0.3s ease", backgroundImage: `url(${img4})`}}></a>
                        <a className='h-[55px] w-[55px] bg-white text-[#102039] left-[40px] 2xl:left-auto bottom-[50px] 2xl:bottom-auto right-[18px] top-[24px] z-[1] rounded-full shadow-none hidden md:flex items-center justify-center absolute' style={{
                            transition: "all 0.6s ease",
                            transform: activeIndex === 3 ? "translate(0px, 0px) scale(1) rotate(360deg)" : "translate(0px, 0px) scale(0) rotate(360deg)"
                          }}>
                            <MdKeyboardArrowRight size={28}/>
                        </a>
                        <div className='absolute bottom-0 left-0 md:relative z-[2] w-[100%] py-[44px] px-[34px]' style={{
                            transition: "all 0.2s ease",
                            opacity: activeIndex === 3 ? 1 : 0,
                            left: activeIndex === 3 ? 0 : '80px',
                            transitionDelay: activeIndex === 3 ? "0.3s" : "0s"
                          }}>
                            <h2 className='text-white text-[30px] 2xl:text-[35px] leading-[1.34em]'>
                                <a className='shadow-none travel_top_text font-bold md:hover:underline' style={{transition: "all 0.3s ease"}}>Ton Kwen Temple</a>
                            </h2>
                        </div>
                    </div>
                    {/* five */}
                    <div 
                      className='h-[300px] md:h-[450px] flex-none md:flex items-end relative overflow-hidden cursor-pointer' 
                      style={{
                        transition: "all 0.4s ease",
                        flex: window.innerWidth >= 768 ? (activeIndex === 4 ? 3 : 1) : "unset"
                      }}
                      onMouseEnter={() => setActiveIndex(4)}
                    >
                        <a className='absolute h-[100%] w-[100%] left-0 top-0 shadow-none bg-cover bg-no-repeat bg-center' style={{transition: "all 0.3s ease", backgroundImage: `url(${img5})`}}></a>
                        <a className='h-[55px] w-[55px] bg-white text-[#102039] left-[40px] 2xl:left-auto bottom-[50px] 2xl:bottom-auto right-[18px] top-[24px] z-[1] rounded-full shadow-none hidden md:flex items-center justify-center absolute' style={{
                            transition: "all 0.6s ease",
                            transform: activeIndex === 4 ? "translate(0px, 0px) scale(1) rotate(360deg)" : "translate(0px, 0px) scale(0) rotate(360deg)"
                          }}>
                            <MdKeyboardArrowRight size={28}/>
                        </a>
                        <div className='absolute bottom-0 left-0 md:relative z-[2] w-[100%] py-[44px] px-[34px]' style={{
                            transition: "all 0.2s ease",
                            opacity: activeIndex === 4 ? 1 : 0,
                            left: activeIndex === 4 ? 0 : '80px',
                            transitionDelay: activeIndex === 4 ? "0.3s" : "0s"
                          }}>
                            <h2 className='text-white text-[30px] 2xl:text-[35px] leading-[1.34em]'>
                                <a className='shadow-none travel_top_text font-bold md:hover:underline' style={{transition: "all 0.3s ease"}}>Taj Mahal</a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[80px] bs:h-[140px] w-full'></div>
        </div>
    </div>
  )
}

export default PopularDestination