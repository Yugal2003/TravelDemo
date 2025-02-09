import React from 'react'
import banner_img from '../../assets/Experience/banner_bg.jpeg';

const ExperienceSection = () => {
  return (
    <div>
        <div>{/* max-w */}
            <div style={{backgroundImage:`url(${banner_img})`}} className='w-full justify-center items-center mx-auto flex flex-col bg-[#102039] bg-cover bg-no-repeat bg-center'>
                <div className='h-[70px] bs:h-[125px] w-full'></div>
                <div className='w-full justify-center items-center mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px] px-[12px]'>
                    <div className='max-w-[480px] ml-auto text-white'>
                        <h2 className=''></h2>
                    </div>
                </div>
                <div className='h-[80px] bs:h-[140px] w-full'></div>
            </div>
        </div> 
    </div>
  )
}

export default ExperienceSection;