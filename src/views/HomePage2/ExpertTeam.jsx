import React, { useState } from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import img1 from '../../assets/Experience/person_1.jpeg';
import img2 from '../../assets/Experience/person_2.jpeg';
import img3 from '../../assets/Experience/person_3.jpeg';

const ExpertTeam = () => {

    const [bgBlue1,setBgBlue1] = useState(false);
    const [bgBlue2,setBgBlue2] = useState(false);
    const [bgBlue3,setBgBlue3] = useState(false);
    const [bgBlue4,setBgBlue4] = useState(false);

  return (
    <div>
        <div>
            <div className='h-[75px] bs:h-[135px] w-full'></div>
            <div className='w-full mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px] px-[0px]'>
                <div className='text-center'>
                    <h3 className='mb-[5px] uppercase tracking-[5px] text-[#3fd0d4] font-normal text-[24px] leading-[1.333em] text_lets'>Travel Agents</h3>
                    <h2 className='font-semibold text-[56px] leading-[1.327em] travel_top_text'>Our Experts Team Member</h2>
                </div>
                <div className='h-[40px] bs:h-[55px] w-full'></div>
                <div className='gap-y-[30px] gap-x-0 flex flex-wrap'>
                    {/* first */}
                    <div className='bs:w-[33.33%] max-w-[100%] group'>
                        <div className='mb-[13px] max-w-[420px] mx-auto relative'>
                            <div className='rounded-full relative z-[1] block overflow-hidden'>
                                <img src={img1} className='block w-[100%] h-[100%] object-cover border-none shadow-none max-w-[100%]' alt='img1' style={{transition: "all 1s ease",verticalAlign:"middle"}}/>
                                {/* after */}
                                <div className="person-11"></div>
                            </div>

                            <div className='transform translate-x-[-50%] translate-y-[-50%] scale-[1] top-[50%] left-[50%] w-full z-10 text-center absolute opacity-0 group-hover:opacity-100' style={{transition: "all 0.6s ease"}}>
                                <h2 className='mb-[8px] text-white font-medium text-[24px] leading-[1.333em] transition-all duration-300 translate-y-2 group-hover:translate-y-0 travel_top_text'>David Cooper</h2>
                                <p className='mb-[20px] text-white transition-all duration-300 translate-y-2 group-hover:translate-y-0 font-normal deliver'>Project Manager</p>
                                <div className='flex items-center gap-[10px] justify-center transition-all duration-300 translate-y-2 group-hover:translate-y-0'>
                                    <p className={`hover:cursor-pointer flex items-center justify-center w-[36px] h-[36px] border border-white rounded-full ${bgBlue1 === true ? "bg-white" : ""} ${bgBlue1 === true ? "text-[#3fd0d4]" : "text-white"} shadow-none`} onMouseEnter={()=> setBgBlue1(true)} onMouseLeave={()=> setBgBlue1(false)} style={{transition: "all 0.4s ease"}}>
                                        <TiSocialFacebook size={20}/>
                                    </p>
                                    <p className={`hover:cursor-pointer flex items-center justify-center w-[36px] h-[36px] border border-white rounded-full ${bgBlue2 === true ? "bg-white" : ""} ${bgBlue2 === true ? "text-[#3fd0d4]" : "text-white"} shadow-none`} onMouseEnter={()=> setBgBlue2(true)} onMouseLeave={()=> setBgBlue2(false)} style={{transition: "all 0.4s ease"}}>
                                        <FaTwitter size={20}/>
                                    </p>
                                    <p className={`hover:cursor-pointer flex items-center justify-center w-[36px] h-[36px] border border-white rounded-full ${bgBlue3 === true ? "bg-white" : ""} ${bgBlue3 === true ? "text-[#3fd0d4]" : "text-white"} shadow-none`} onMouseEnter={()=> setBgBlue3(true)} onMouseLeave={()=> setBgBlue3(false)} style={{transition: "all 0.4s ease"}}>
                                        <IoLogoInstagram size={20}/>
                                    </p>
                                    <p className={`hover:cursor-pointer flex items-center justify-center w-[36px] h-[36px] border border-white rounded-full ${bgBlue4 === true ? "bg-white" : ""} ${bgBlue4 === true ? "text-[#3fd0d4]" : "text-white"} shadow-none`} onMouseEnter={()=> setBgBlue4(true)} onMouseLeave={()=> setBgBlue4(false)} style={{transition: "all 0.4s ease"}}>
                                        <TiSocialLinkedin size={20}/>
                                    </p>
                                </div>
                            </div>
                            {/* after */}
                            <div className='person-12'></div>
                        </div>
                    </div>

                     {/* second */}
                     <div className='bs:w-[33.33%] max-w-[100%] group'>
                        <div className='mb-[13px] max-w-[420px] mx-auto relative'>
                            <div className='rounded-full relative z-[1] block overflow-hidden'>
                                <img src={img2} className='block w-[100%] h-[100%] object-cover border-none shadow-none max-w-[100%]' alt='img1' style={{transition: "all 1s ease",verticalAlign:"middle"}}/>
                                {/* after */}
                                <div className="person-11"></div>
                            </div>

                            <div className='transform translate-x-[-50%] translate-y-[-50%] scale-[1] top-[50%] left-[50%] w-full z-10 text-center absolute opacity-0 group-hover:opacity-100' style={{transition: "all 0.6s ease"}}>
                                <h2 className='mb-[8px] text-white font-medium text-[24px] leading-[1.333em] transition-all duration-300 translate-y-2 group-hover:translate-y-0 travel_top_text'>David Cooper</h2>
                                <p className='mb-[20px] text-white transition-all duration-300 translate-y-2 group-hover:translate-y-0 deliver'>Project Manager</p>
                                <div className='flex items-center gap-[10px] justify-center transition-all duration-300 translate-y-2 group-hover:translate-y-0'>
                                    <p className={`hover:cursor-pointer flex items-center justify-center w-[36px] h-[36px] border border-white rounded-full ${bgBlue1 === true ? "bg-white" : ""} ${bgBlue1 === true ? "text-[#3fd0d4]" : "text-white"} shadow-none`} onMouseEnter={()=> setBgBlue1(true)} onMouseLeave={()=> setBgBlue1(false)} style={{transition: "all 0.4s ease"}}>
                                        <TiSocialFacebook size={20}/>
                                    </p>
                                    <p className={`hover:cursor-pointer flex items-center justify-center w-[36px] h-[36px] border border-white rounded-full ${bgBlue2 === true ? "bg-white" : ""} ${bgBlue2 === true ? "text-[#3fd0d4]" : "text-white"} shadow-none`} onMouseEnter={()=> setBgBlue2(true)} onMouseLeave={()=> setBgBlue2(false)} style={{transition: "all 0.4s ease"}}>
                                        <FaTwitter size={20}/>
                                    </p>
                                    <p className={`hover:cursor-pointer flex items-center justify-center w-[36px] h-[36px] border border-white rounded-full ${bgBlue3 === true ? "bg-white" : ""} ${bgBlue3 === true ? "text-[#3fd0d4]" : "text-white"} shadow-none`} onMouseEnter={()=> setBgBlue3(true)} onMouseLeave={()=> setBgBlue3(false)} style={{transition: "all 0.4s ease"}}>
                                        <IoLogoInstagram size={20}/>
                                    </p>
                                    <p className={`hover:cursor-pointer flex items-center justify-center w-[36px] h-[36px] border border-white rounded-full ${bgBlue4 === true ? "bg-white" : ""} ${bgBlue4 === true ? "text-[#3fd0d4]" : "text-white"} shadow-none`} onMouseEnter={()=> setBgBlue4(true)} onMouseLeave={()=> setBgBlue4(false)} style={{transition: "all 0.4s ease"}}>
                                        <TiSocialLinkedin size={20}/>
                                    </p>
                                </div>
                            </div>
                            {/* after */}
                            <div className='person-12'></div>
                        </div>
                    </div>

                     {/* third */}
                     <div className='bs:w-[33.33%] max-w-[100%] group'>
                        <div className='mb-[13px] max-w-[420px] mx-auto relative'>
                            <div className='rounded-full relative z-[1] block overflow-hidden'>
                                <img src={img3} className='block w-[100%] h-[100%] object-cover border-none shadow-none max-w-[100%]' alt='img1' style={{transition: "all 1s ease",verticalAlign:"middle"}}/>
                                {/* after */}
                                <div className="person-11"></div>
                            </div>

                            <div className='transform translate-x-[-50%] translate-y-[-50%] scale-[1] top-[50%] left-[50%] w-full z-10 text-center absolute opacity-0 group-hover:opacity-100' style={{transition: "all 0.6s ease"}}>
                                <h2 className='mb-[8px] text-white font-medium text-[24px] leading-[1.333em] transition-all duration-300 translate-y-2 group-hover:translate-y-0 travel_top_text'>David Cooper</h2>
                                <p className='mb-[20px] text-white transition-all duration-300 translate-y-2 group-hover:translate-y-0 deliver'>Project Manager</p>
                                <div className='flex items-center gap-[10px] justify-center transition-all duration-300 translate-y-2 group-hover:translate-y-0'>
                                    <p className={`hover:cursor-pointer flex items-center justify-center w-[36px] h-[36px] border border-white rounded-full ${bgBlue1 === true ? "bg-white" : ""} ${bgBlue1 === true ? "text-[#3fd0d4]" : "text-white"} shadow-none`} onMouseEnter={()=> setBgBlue1(true)} onMouseLeave={()=> setBgBlue1(false)} style={{transition: "all 0.4s ease"}}>
                                        <TiSocialFacebook size={20}/>
                                    </p>
                                    <p className={`hover:cursor-pointer flex items-center justify-center w-[36px] h-[36px] border border-white rounded-full ${bgBlue2 === true ? "bg-white" : ""} ${bgBlue2 === true ? "text-[#3fd0d4]" : "text-white"} shadow-none`} onMouseEnter={()=> setBgBlue2(true)} onMouseLeave={()=> setBgBlue2(false)} style={{transition: "all 0.4s ease"}}>
                                        <FaTwitter size={20}/>
                                    </p>
                                    <p className={`hover:cursor-pointer flex items-center justify-center w-[36px] h-[36px] border border-white rounded-full ${bgBlue3 === true ? "bg-white" : ""} ${bgBlue3 === true ? "text-[#3fd0d4]" : "text-white"} shadow-none`} onMouseEnter={()=> setBgBlue3(true)} onMouseLeave={()=> setBgBlue3(false)} style={{transition: "all 0.4s ease"}}>
                                        <IoLogoInstagram size={20}/>
                                    </p>
                                    <p className={`hover:cursor-pointer flex items-center justify-center w-[36px] h-[36px] border border-white rounded-full ${bgBlue4 === true ? "bg-white" : ""} ${bgBlue4 === true ? "text-[#3fd0d4]" : "text-white"} shadow-none`} onMouseEnter={()=> setBgBlue4(true)} onMouseLeave={()=> setBgBlue4(false)} style={{transition: "all 0.4s ease"}}>
                                        <TiSocialLinkedin size={20}/>
                                    </p>
                                </div>
                            </div>
                            {/* after */}
                            <div className='person-12'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[80px] bs:h-[140px] w-full'></div>
        </div>
    </div>
  )
}

export default ExpertTeam;