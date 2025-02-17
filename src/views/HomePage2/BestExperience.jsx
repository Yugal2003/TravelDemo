import React, { useState } from 'react';
import girlImg from '../../assets/Experience/girl_img.png';
import { motion } from 'framer-motion';

const BestExperience = () => {
    
    const [bgBlue,setBgBlue] = useState(false);
    const [bgBlue1,setBgBlue1] = useState(false);
    const [bgBlue2,setBgBlue2] = useState(false);
    const [bgBlue3,setBgBlue3] = useState(false);

  return (
    <div>
        <div>
            <div className='h-[75px] bs:h-[135px] w-full'></div>

            {/* container */}
            <div className='w-full justify-center items-center mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px] px-[12px]'>
                <div className='text-center'>
                    <h3 className='mb-[5px] uppercase tracking-[5px] text-[#3fd0d4] font-normal text-[24px] leading-[1.333em] text_lets'>Why Choose Us</h3>
                    <motion.div 
                            initial={{ y: "40%", opacity: 0 }} // Start off-screen to the right
                            whileInView={{ y: 0, opacity: 1 }}  // Move to original position
                            transition={{ duration: 0.7, ease: "easeOut" }} // Smooth animation
                            viewport={{ once: true }} // Ensures animation happens only once
                    >
                        <h2 className='font-semibold text-[56px] leading-[1.327em] travel_top_text'>Get The Best Travel Experience</h2>
                    </motion.div>
                </div>
                <div className='h-[40px] bs:h-[55px] w-full'></div>
                <div className='flex w-[100%] justify-between items-center'>
                    {/* first */}
                    <div className='w-[22%] flex-none'>
                        <div className='gap-y-[45px] gap-x-0 flex flex-wrap'>
                            {/* first */}
                            <div className='bs:w-[100%] flex-none max-w-[100%]' onMouseEnter={()=> setBgBlue(true)} onMouseLeave={()=> setBgBlue(false)}>
                                <div>
                                    <div className={`w-[70px] h-[70px] border-2 border-[#d9d9d9] rounded-full p-[10px] mb-[20px] flex items-center justify-center ${bgBlue === true ? "bg-[#3fd0d4]" : "bg-white"}`} style={{transition: "all 0.4s ease"}}>
                                        <p>
                                            <svg className={`${bgBlue ? "fill-white" : "fill-[#3fd0d4]"}`} xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23">
                                                <g clip-path="url(#clip0_379_69)">
                                                <path d="M4.28571 1.42857V2.85714H2.14286C0.959821 2.85714 0 3.81696 0 5V7.14286H20V5C20 3.81696 19.0402 2.85714 17.8571 2.85714H15.7143V1.42857C15.7143 0.638393 15.0759 0 14.2857 0C13.4955 0 12.8571 0.638393 12.8571 1.42857V2.85714H7.14286V1.42857C7.14286 0.638393 6.50446 0 5.71429 0C4.92411 0 4.28571 0.638393 4.28571 1.42857ZM20 8.57143H0V20.7143C0 21.8973 0.959821 22.8571 2.14286 22.8571H17.8571C19.0402 22.8571 20 21.8973 20 20.7143V8.57143Z" />
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_379_69">
                                                <rect width="20" height="22.8571" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </p>
                                    </div>
                                    <h2 className='mb-[12px] font-semibold text-[24px] leading-[1.333em] travel_top_text'>Set Travel Plan</h2>
                                    <p className='mb-0 deliver text-[#666666]'>Distinctively impact client-centered ideas via future-proof paradigms.</p>
                                </div>
                            </div>
                            <div className='bs:w-[100%] flex-none max-w-[100%]' onMouseEnter={()=> setBgBlue1(true)} onMouseLeave={()=> setBgBlue1(false)}>
                                <div>
                                    <div className={`w-[70px] h-[70px] border-2 border-[#d9d9d9] rounded-full p-[10px] mb-[20px] flex items-center justify-center  ${bgBlue1 === true ? "bg-[#3fd0d4]" : "bg-white"}`} style={{transition: "all 0.4s ease"}}>
                                        <p>
                                            <svg className={`${bgBlue1 ? "fill-white" : "fill-[#3fd0d4]"}`} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                                <g clip-path="url(#clip0_379_100)">
                                                <path d="M0 1.5625C0 0.698242 0.698242 0 1.5625 0H23.4375C24.3018 0 25 0.698242 25 1.5625C25 2.42676 24.3018 3.125 23.4375 3.125V21.875C24.3018 21.875 25 22.5732 25 23.4375C25 24.3018 24.3018 25 23.4375 25H14.8438V22.6562C14.8438 21.3623 13.7939 20.3125 12.5 20.3125C11.2061 20.3125 10.1562 21.3623 10.1562 22.6562V25H1.5625C0.698242 25 0 24.3018 0 23.4375C0 22.5732 0.698242 21.875 1.5625 21.875V3.125C0.698242 3.125 0 2.42676 0 1.5625ZM4.6875 5.46875V7.03125C4.6875 7.46094 5.03906 7.8125 5.46875 7.8125H7.03125C7.46094 7.8125 7.8125 7.46094 7.8125 7.03125V5.46875C7.8125 5.03906 7.46094 4.6875 7.03125 4.6875H5.46875C5.03906 4.6875 4.6875 5.03906 4.6875 5.46875ZM11.7188 4.6875C11.2891 4.6875 10.9375 5.03906 10.9375 5.46875V7.03125C10.9375 7.46094 11.2891 7.8125 11.7188 7.8125H13.2812C13.7109 7.8125 14.0625 7.46094 14.0625 7.03125V5.46875C14.0625 5.03906 13.7109 4.6875 13.2812 4.6875H11.7188ZM17.1875 5.46875V7.03125C17.1875 7.46094 17.5391 7.8125 17.9688 7.8125H19.5312C19.9609 7.8125 20.3125 7.46094 20.3125 7.03125V5.46875C20.3125 5.03906 19.9609 4.6875 19.5312 4.6875H17.9688C17.5391 4.6875 17.1875 5.03906 17.1875 5.46875ZM5.46875 9.375C5.03906 9.375 4.6875 9.72656 4.6875 10.1562V11.7188C4.6875 12.1484 5.03906 12.5 5.46875 12.5H7.03125C7.46094 12.5 7.8125 12.1484 7.8125 11.7188V10.1562C7.8125 9.72656 7.46094 9.375 7.03125 9.375H5.46875ZM10.9375 10.1562V11.7188C10.9375 12.1484 11.2891 12.5 11.7188 12.5H13.2812C13.7109 12.5 14.0625 12.1484 14.0625 11.7188V10.1562C14.0625 9.72656 13.7109 9.375 13.2812 9.375H11.7188C11.2891 9.375 10.9375 9.72656 10.9375 10.1562ZM17.9688 9.375C17.5391 9.375 17.1875 9.72656 17.1875 10.1562V11.7188C17.1875 12.1484 17.5391 12.5 17.9688 12.5H19.5312C19.9609 12.5 20.3125 12.1484 20.3125 11.7188V10.1562C20.3125 9.72656 19.9609 9.375 19.5312 9.375H17.9688ZM16.0156 18.75C16.665 18.75 17.2021 18.2178 17.041 17.5879C16.5234 15.5615 14.6875 14.0625 12.5 14.0625C10.3125 14.0625 8.47168 15.5615 7.95898 17.5879C7.79785 18.2129 8.33984 18.75 8.98438 18.75H16.0156Z"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_379_100">
                                                <rect width="25" height="25" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </p>
                                    </div>
                                    <h2 className='mb-[12px] font-semibold text-[24px] leading-[1.333em] travel_top_text'>Luxary Hotel</h2>
                                    <p className='mb-0 deliver text-[#666666]'>Distinctively impact client-centered ideas via future-proof paradigms.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second */}
                    <div className='flex-1 w-[22%]'>
                        <div className='flex justify-center items-center'>
                            <img src={girlImg} alt='girl_img' className='max-w-[100%] h-auto shadow-none border-none' style={{verticalAlign:"middle"}}/>
                        </div>
                    </div>
                    {/* third */}
                    <div className='w-[22%] flex-none'>
                        <div className='gap-y-[45px] gap-x-0 flex flex-wrap'>
                            {/* first */}
                            <div className='bs:w-[100%] flex-none max-w-[100%]' onMouseEnter={()=> setBgBlue2(true)} onMouseLeave={()=> setBgBlue2(false)}>
                                <div>
                                    <div className={`w-[70px] h-[70px] border-2 border-[#d9d9d9] rounded-full p-[10px] mb-[20px] flex items-center justify-center ${bgBlue2 === true ? "bg-[#3fd0d4]" : "bg-white"}`} style={{transition: "all 0.4s ease"}}>
                                        <p>
                                            <svg className={`${bgBlue2 ? "fill-white" : "fill-[#3fd0d4]"}`} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                                <g clip-path="url(#clip0_380_102)">
                                                <path d="M12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66117C18.9946 1.31696 15.8152 0 12.5 0C9.18479 0 6.00537 1.31696 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C6.00537 23.683 9.18479 25 12.5 25ZM14.9756 15.874L7.92969 18.584C6.98242 18.9502 6.0498 18.0176 6.41602 17.0703L9.12598 10.0244C9.28711 9.60938 9.60938 9.28711 10.0244 9.12598L17.0703 6.41602C18.0176 6.0498 18.9502 6.98242 18.584 7.92969L15.874 14.9756C15.7178 15.3906 15.3906 15.7129 14.9756 15.874ZM14.0625 12.5C14.0625 12.0856 13.8979 11.6882 13.6049 11.3951C13.3118 11.1021 12.9144 10.9375 12.5 10.9375C12.0856 10.9375 11.6882 11.1021 11.3951 11.3951C11.1021 11.6882 10.9375 12.0856 10.9375 12.5C10.9375 12.9144 11.1021 13.3118 11.3951 13.6049C11.6882 13.8979 12.0856 14.0625 12.5 14.0625C12.9144 14.0625 13.3118 13.8979 13.6049 13.6049C13.8979 13.3118 14.0625 12.9144 14.0625 12.5Z"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_380_102">
                                                <rect width="25" height="25" fill="#3fd0d4"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </p>
                                    </div>
                                    <h2 className='mb-[12px] font-semibold text-[24px] leading-[1.333em] travel_top_text'>Explore Around</h2>
                                    <p className='mb-0 deliver text-[#666666]'>Distinctively impact client-centered ideas via future-proof paradigms.</p>
                                </div>
                            </div>
                            <div className='bs:w-[100%] flex-none max-w-[100%]' onMouseEnter={()=> setBgBlue3(true)} onMouseLeave={()=> setBgBlue3(false)}>
                                <div>
                                    <div className={`w-[70px] h-[70px] border-2 border-[#d9d9d9] rounded-full p-[10px] mb-[20px] flex items-center justify-center ${bgBlue3 === true ? "bg-[#3fd0d4]" : "bg-white"}`} style={{transition: "all 0.4s ease"}}>
                                        <p>
                                            <svg className={`${bgBlue3 ? "fill-white" : "fill-[#3fd0d4]"}`} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                                <g clip-path="url(#clip0_379_98)">
                                                <path d="M15 2.8125C8.26758 2.8125 2.8125 8.26758 2.8125 15V17.3438C2.8125 18.123 2.18555 18.75 1.40625 18.75C0.626953 18.75 0 18.123 0 17.3438V15C0 6.71484 6.71484 0 15 0C23.2852 0 30 6.71484 30 15V23.4434C30 26.291 27.6914 28.5996 24.8379 28.5996L18.375 28.5938C17.8887 29.4316 16.9805 30 15.9375 30H14.0625C12.5098 30 11.25 28.7402 11.25 27.1875C11.25 25.6348 12.5098 24.375 14.0625 24.375H15.9375C16.9805 24.375 17.8887 24.9434 18.375 25.7812L24.8438 25.7871C26.1387 25.7871 27.1875 24.7383 27.1875 23.4434V15C27.1875 8.26758 21.7324 2.8125 15 2.8125ZM8.4375 12.1875H9.375C10.4121 12.1875 11.25 13.0254 11.25 14.0625V20.625C11.25 21.6621 10.4121 22.5 9.375 22.5H8.4375C6.36914 22.5 4.6875 20.8184 4.6875 18.75V15.9375C4.6875 13.8691 6.36914 12.1875 8.4375 12.1875ZM21.5625 12.1875C23.6309 12.1875 25.3125 13.8691 25.3125 15.9375V18.75C25.3125 20.8184 23.6309 22.5 21.5625 22.5H20.625C19.5879 22.5 18.75 21.6621 18.75 20.625V14.0625C18.75 13.0254 19.5879 12.1875 20.625 12.1875H21.5625Z"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_379_98">
                                                <rect width="30" height="30" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </p>
                                    </div>
                                    <h2 className='mb-[12px] font-semibold text-[24px] leading-[1.333em] travel_top_text'>Support 24/7</h2>
                                    <p className='mb-0 deliver text-[#666666]'>Distinctively impact client-centered ideas via future-proof paradigms.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-[75px] bs:h-[135px] w-full'></div>
        </div>
    </div>
  )
}

export default BestExperience;