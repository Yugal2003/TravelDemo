import React from 'react'
import girl_img from '../../assets/TravelPoint/girl.jpeg'
import img_back from '../../assets/TravelPoint/back_img.png'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


const GuideSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div>
        <div> {/* max-w */}
          <div className='w-full justify-center items-center mx-auto max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px]'>
              <div className='flex flex-wrap'>
                {/* left side */}
                <div className='w-[100%] bw:w-[50%] max-w-[100%]'>
                  <div className='relative pb-[6px] pl-[45px]'>
                    <img src={girl_img} alt='girl_img' className='relative z-[2] border-none h-auto shadow-none max-w-[100%]'/>
                    <div style={{backgroundImage : `url(${img_back})`,backgroundPosition : "right center",backgroundRepeat:"no-repeat"}} className='absolute right-[-75px] top-[24px] w-[60vw] h-[100%] object-contain'></div>
                  </div>
                </div>
                {/* right side */}
                <div className='ml-0 bs:ml-[8.333%] w-auto bs:w-[41.666%] max-w-[100%]'>
                    <div>
                      <h3 className=' uppercase tracking-[5px] text-[#3fd0d4] font-normal text-[20px] bs:text-[22px] 2xl:text-[24px] leading-[1.33em] text_lets px-0 bs:px-[0.75rem]'>TRAVEL POINT</h3>
                      <h2 className='font-semibold mt-[5px] text-[38px] bs:text-[44px] 2xl:text-[56px] leading-[1.327em] travel_top_text text-[#102039] px-0 bs:px-[0.75rem]'>Discover The World With Our Guide</h2>
                      <p className='mt-[15px] deliver text-[16px] text-[#666666] px-0 bs:px-[0.75rem]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                    </div>
                    {/* second */}
                    <div className='h-[40px] bs:h-[55px] w-full'></div>
                    {/* third */}
                    <div ref={ref} className='gap-y-[24px] relative flex flex-wrap w-full'>
                        <div className='absolute h-[110px] w-[110px] right-[-50px] top-[-65px] bg-[#3fd0d4] hidden bs:flex items-center justify-center flex-shrink-0 max-w-[100%] px-0 bs:px-[1.5rem] rounded-[50%] border border-red-500'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="36" viewBox="0 0 40 36" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.522 18.002C35.522 19.629 36.858 20.9528 38.5 20.9528C39.328 20.9528 40 21.6186 40 22.439V27.7916C40 32.318 36.284 36 31.716 36H8.286C3.718 36 0 32.318 0 27.7916V22.439C0 21.6186 0.672 20.9528 1.5 20.9528C3.144 20.9528 4.48 19.629 4.48 18.002C4.48 16.4166 3.198 15.2236 1.5 15.2236C1.102 15.2236 0.722 15.067 0.44 14.7876C0.158 14.5082 0 14.1296 0 13.7373L0.00400019 8.21028C0.00400019 3.68402 3.72 0 8.288 0H31.712C36.28 0 39.998 3.68402 39.998 8.21028L40 13.5649C40 13.9573 39.842 14.3378 39.562 14.6152C39.28 14.8946 38.9 15.0512 38.5 15.0512C36.858 15.0512 35.522 16.375 35.522 18.002ZM24.504 19.296L26.862 17.021C27.272 16.6286 27.414 16.05 27.236 15.515C27.06 14.9798 26.6 14.5994 26.044 14.522L22.786 14.0504L21.328 11.1254C21.078 10.622 20.57 10.3089 20.004 10.3069H20C19.436 10.3069 18.928 10.6201 18.674 11.1234L17.216 14.0504L13.964 14.52C13.402 14.5994 12.942 14.9798 12.764 15.515C12.588 16.05 12.73 16.6286 13.138 17.021L15.496 19.296L14.94 22.5124C14.844 23.0672 15.07 23.6182 15.53 23.9492C15.79 24.1334 16.092 24.2286 16.398 24.2286C16.632 24.2286 16.868 24.171 17.084 24.0582L20 22.5402L22.91 24.0542C23.414 24.3216 24.012 24.28 24.47 23.9472C24.932 23.6182 25.158 23.0672 25.062 22.5124L24.504 19.296Z" fill="white"/>
                          </svg>
                        </div>
                        
                        <div className='w-[100%] bw:w-[50%] px-0 bw:px-[0.8rem] max-w-[100%]'>
                            <div style={{border:"1px solid rgb(63,208,212)"}} className='rounded-[6px] pt-[24px] pb-[33px] text-center'>
                              <h3 className='flex justify-center mb-[10px] text-[#3fd0d4] font-semibold text-[40px] leading-[1.45em]'>
                                <span className='travel_top_text'>{inView ? <CountUp start={0} end={502} duration={1} /> : "0"}</span>
                                <span className='text-[#3fd0d4] font-light'>+</span>
                              </h3>
                              <p className='text-[#666666] text-[18px] leading-[1.667em] mb-0 deliver'>Holiday Package</p>
                            </div>
                        </div>

                        <div className='w-[100%] bw:w-[50%] px-0 bw:px-[0.8rem] max-w-[100%]'>
                            <div style={{border:"1px solid rgb(63,208,212)"}} className='rounded-[6px] pt-[24px] pb-[33px] text-center'>
                              <h3 className='flex justify-center mb-[10px] text-[#3fd0d4] font-semibold text-[40px] leading-[1.45em]'>
                                <span className='travel_top_text'>{inView ? <CountUp start={0} end={100} duration={1} /> : "0"}</span>
                                <span className='text-[#3fd0d4] font-light'>+</span>
                              </h3>
                              <p className='text-[#666666] text-[18px] leading-[1.667em] mb-0 deliver'>Luxury Hotel</p>
                            </div>
                        </div>

                        <div className='w-[100%] bw:w-[50%] px-0 bw:px-[0.8rem] max-w-[100%]'>
                            <div style={{border:"1px solid rgb(63,208,212)"}} className='rounded-[6px] pt-[24px] pb-[33px] text-center'>
                              <h3 className='flex justify-center mb-[10px] text-[#3fd0d4] font-semibold text-[40px] leading-[1.45em]'>
                                <span className='travel_top_text'>{inView ? <CountUp start={0} end={77} duration={1} /> : "0"}</span>
                                <span className='text-[#3fd0d4] font-light'>+</span>
                              </h3>
                              <p className='text-[#666666] text-[18px] leading-[1.667em] mb-0 deliver'>Premium Airlines</p>
                            </div>
                        </div>

                        <div className='w-[100%] bw:w-[50%] px-0 bw:px-[0.8rem] max-w-[100%]'>
                            <div style={{border:"1px solid rgb(63,208,212)"}} className='rounded-[6px] pt-[24px] pb-[33px] text-center'>
                              <h3 className='flex justify-center mb-[10px] text-[#3fd0d4] font-semibold text-[40px] leading-[1.45em]'>
                                <span className='travel_top_text'>{inView ? <CountUp start={0} end={2} duration={1} /> : "0"}</span>
                                <span className='text-[#3fd0d4] font-light'>+</span>
                              </h3>
                              <p className='text-[#666666] text-[18px] leading-[1.667em] mb-0 deliver'>Happy Customer</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
              </div>
          </div>
          <div className='h-[80px] bs:h-[135px] w-full'></div>
        </div>
    </div>
  )
}

export default GuideSection;