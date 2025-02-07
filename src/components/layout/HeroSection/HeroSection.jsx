import React from 'react'
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
    
  return (
    <div className='w-full full-landing-image'>
        <div className=''> {/* max-w */}
            <div className='relative w-full justify-center items-center mx-auto'>

                <div className='absolute z-30 bs:w-[76.5%] 2xl:w-[77.8%] flex justify-center items-center'>
                    <div className='opacity-80 h-[682px] top-0 mt-[-6.4rem] bg-[#238da2] bs:w-[35.6%] 2xl:w-[42.4%] mx-auto'>
                    </div>
                </div>
            </div>

            <div className='w-full justify-center absolute top-[32%] items-center mx-auto'>

                {/* lets */}
                <div className='text-white absolute  z-50  flex justify-center items-center mx-auto w-full'>
                    <h1 style={{letterSpacing:"7.5px"}} className='uppercase text_lets text-[1.375rem] bs:text-[1.5rem]  2xl:text-[1.5625rem]'>Lets Travel The World With Us</h1>
                </div>

                {/* Travel Top */}
                <div className='text-white flex-col mt-16 absolute z-50  flex justify-center items-center mx-auto w-full'>
                    <div style={{letterSpacing:"2px"}} className='travel_top_text font-bold text-[100px] bw:text-6xl bs:text-[5rem] 2xl:text-[6.5rem]'>Travel Top Destination</div>
                    <div style={{letterSpacing:"2px"}} className='mt-8 travel_top_text font-bold text-[100px] bw:text-6xl bs:text-[5rem] 2xl:text-[6.5rem]'>of The World</div>
                </div>
            </div>

            <div className='w-full justify-center absolute top-[85%] items-center mx-auto'>
                <div className='bg-[#5C7F7B] p-8 w-[72%] h-24 mx-auto'>
                    <div className='bg-white flex'>
                        <div>
                            <input type='text' placeholder='Where to?'/>
                        </div>
                        <div>
                            <select>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div>
                            <select>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div className='bg-sky-400'>
                            <FaSearch size={20}/>
                            <h1>Find Now</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;