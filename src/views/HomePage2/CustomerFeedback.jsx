import React from 'react'
import  girl_img from '../../assets/CustomerFeedback/testimonial_right.jpeg';
import quote from '../../assets/CustomerFeedback/Quote.png';
import img1 from '../../assets/CustomerFeedback/testimonial_avatar_1.jpeg'
import img2 from '../../assets/CustomerFeedback/testimonial_avatar_2.jpeg'
import img3 from '../../assets/CustomerFeedback/testimonial_avatar_3.jpeg'
import drag from '../../assets/CustomerFeedback/drag.png'

const CustomerFeedback = () => {
  return (
    <div>
        <div className='relative'>
            <div className='h-[80px] bs:h-[140px] w-full'></div>
            <div className='w-full justify-center items-center mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px]'>
                <div className='gap-y-[40px] gap-x-0 flex flex-wrap'>
                    {/* first */}
                    <div className='bs:w-[50%] max-w-[100%] px-[12px]'>
                        <div>
                            <h3 className='mb-[5px] uppercase tracking-[5px] text-[#3fd0d4] font-normal text-[24px] leading-[1.333em] text_lets'>TESTIMONIALS</h3>
                            <h2 className='font-semibold text-[56px] leading-[1.327em] mb-0 travel_top_text'>Our Valuable Customers Awesome Feedback</h2>
                        </div>
                        <div className='h-[20px] bs:h-[20px] w-full'></div>
                        <p className='my-0 text-[#666666] deliver'>Completely reinvent worldwide testing procedures with cooperative initiatives to leverage existing excellent best practices with functional</p>
                        <div className='h-[30px] bs:h-[40px] w-full'></div>
                        <div className='flex flex-col'>
                            <div className='relative block border border-black drag'>
                                <div className='overflow-visible relative block m-0 p-0'>
                                    <div className='w-[636px] opacity-[1] block float-left h-[100%] min-h-[1px]' style={{visibility:"visible",transition: "all 0.4s ease"}}>
                                        <div>
                                            <div className='w-full inline-block'>
                                                <div className='bg-white flex items-center gap-[30px] mt-[30px] rounded-[5px] relative' style={{filter:"drop-shadow(10px 5px 50px rgba(220, 220, 220, 0.3))",padding:"0px 65px 30px 30px"}}>
                                                    {/* first */}
                                                    <div className='mt-[-30px]'>
                                                        <div className='w-[150px] h-[150px] mb-[19px] rounded-[5px] overflow-hidden'>
                                                            <img src={img3} className='border-none shadow-none h-auto max-w-full' alt='first' style={{display:"initial"}}/>
                                                        </div>
                                                        <div className=''>
                                                            <h3 className='mb-[5px] font-medium leading-[1.333em]'>Alexon Shen</h3>
                                                            <p className='text-[#3fd0d4]'>California, USA</p>
                                                        </div>
                                                    </div>
                                                    <div className=''>
                                                        <p className='text-[#102039] font-medium text-[24px] leading-[1.333em] mb-[15px]' style={{fontStyle:"italic"}}>“Quality Servies Good!”</p>
                                                        <p className=''>
                                                            Completely reinvent worldwide testing new proceds with cooperative initiatives. Seemly leverage market excellent best practices chains
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* carousel */}
                            <div className='flex'>
                                <ul className='p-0 m-0 mt-[35px] flex gap-[5px]' style={{listStyle:"none"}}>
                                    <li className='h-[20px] w-[20px] rounded-full m-0 flex items-center justify-center relative overflow-hidden'>
                                        <button className='h-[12px] w-[12px] border-2 border-[#3fd0d4] rounded-full bg-transparent p-0 cursor-pointer' style={{textIndent:"100px",transition: "all 0.4s ease"}}>
                                            1
                                        </button>
                                    </li>
                                    <li className='opacity-[1] h-[20px] w-[20px] rounded-full m-0 flex items-center justify-center relative overflow-hidden' style={{visibility:"visible"}}>
                                        <button className='bg-[#3fd0d4] h-[12px] w-[12px] border-2 border-[#3fd0d4] rounded-full p-0 cursor-pointer' style={{textIndent:"100px",transition: "all 0.4s ease",transform: "scale(1.333)"}}>
                                            2
                                        </button>
                                    </li>
                                    <li className='h-[20px] w-[20px] rounded-full m-0 flex items-center justify-center relative overflow-hidden'>
                                        <button className='h-[12px] w-[12px] border-2 border-[#3fd0d4] rounded-full bg-transparent p-0 cursor-pointer' style={{textIndent:"100px",transition: "all 0.4s ease"}}>
                                            3
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div>
                            <div className='relative block'>
                                <div className='overflow-visible transform translate-x-[0] translate-y-[0] translate-z-[0] relative block p-0 m-0'>
                                    <div className='opacity-[1] w-[4452px] transform translate-x-[-636px] translate-y-[0px] translate-z-[0px] relative top-0 left-0 block mx-auto'>
                                        <div className='cutomer-feed'></div>
                                        <div className='w-[636px] opacity-0 block h-[100%] min-h-[1px]' style={{visibility:"hidden",transition: "all 0.4s ease",float:"left"}}>
                                            <div className='' style={{visibility:"hidden"}}>
                                                <div className='w-full inline-block'>
                                                    <div className='bg-white flex items-center gap-[30px] mt-[30px] rounded-[5px] relative' style={{padding:"0px 65px 30px 30px",filter:"drop-shadow(10px 5px 50px rgbs(220,220,220, 0.3))"}}>
                                                        <div className='mt-[-30px]'>
                                                            <div className='w-[150px] h-[150px] mb-[19px] rounded-[5px] overflow-hidden'>
                                                                <img src={img1} alt=''/>
                                                            </div>
                                                            <div className=''>
                                                                <h3 className='mb-[5px] font-medium text-[24px] leading-[1.333em]'>Alexon Shen</h3>
                                                                <p className='text-[#3fd0d4]'>California, USA</p>
                                                            </div>
                                                        </div>
                                                        <div className=''>
                                                            <p className='text-[#102039] font-medium text-[24px] leading-[1.333em] mb-[15px] mt-0' style={{fontStyle:"italic"}}>“Quality Servies Good!”</p>
                                                            <p className=''>Completely reinvent worldwide testing new proceds with cooperative initiatives. Seemly leverage market excellent best practices chains</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[636px] opacity-0 block h-[100%] min-h-[1px]' style={{visibility:"hidden",transition: "all 0.4s ease",float:"left"}}>
                                            <div className='' style={{visibility:"hidden"}}>
                                                <div className='w-full inline-block'>
                                                <div className='bg-white flex items-center gap-[30px] mt-[30px] rounded-[5px] relative' style={{padding:"0px 65px 30px 30px",filter:"drop-shadow(10px 5px 50px rgbs(220,220,220, 0.3))"}}>
                                                        <div className='mt-[-30px]'>
                                                            <div className='w-[150px] h-[150px] mb-[19px] rounded-[5px] overflow-hidden'>
                                                                <img src={img2} alt=''/>
                                                            </div>
                                                            <div className=''>
                                                                <h3 className='mb-[5px] font-medium text-[24px] leading-[1.333em]'>Alexon Shen</h3>
                                                                <p className='text-[#3fd0d4]'>California, USA</p>
                                                            </div>
                                                        </div>
                                                        <div className=''>
                                                            <p className='text-[#102039] font-medium text-[24px] leading-[1.333em] mb-[15px] mt-0' style={{fontStyle:"italic"}}>“Quality Servies Good!”</p>
                                                            <p className=''>Completely reinvent worldwide testing new proceds with cooperative initiatives. Seemly leverage market excellent best practices chains</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[636px] opacity-[1] block h-[100%] min-h-[1px]' style={{visibility:"hidden",transition: "all 0.4s ease",float:"left"}}>
                                            <div className='' style={{visibility:"hidden"}}>
                                                <div className='w-full inline-block'>
                                                <div className='bg-white flex items-center gap-[30px] mt-[30px] rounded-[5px] relative' style={{padding:"0px 65px 30px 30px",filter:"drop-shadow(10px 5px 50px rgbs(220,220,220, 0.3))"}}>
                                                        <div className='mt-[-30px]'>
                                                            <div className='w-[150px] h-[150px] mb-[19px] rounded-[5px] overflow-hidden'>
                                                                <img src={img3} alt=''/>
                                                            </div>
                                                            <div className=''>
                                                                <h3 className='mb-[5px] font-medium text-[24px] leading-[1.333em]'>Alexon Shen</h3>
                                                                <p className='text-[#3fd0d4]'>California, USA</p>
                                                            </div>
                                                        </div>
                                                        <div className=''>
                                                            <p className='text-[#102039] font-medium text-[24px] leading-[1.333em] mb-[15px] mt-0' style={{fontStyle:"italic"}}>“Quality Servies Good!”</p>
                                                            <p className=''>Completely reinvent worldwide testing new proceds with cooperative initiatives. Seemly leverage market excellent best practices chains</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* second */}
                    <div className='bs:w-[50%] max-w-[100%] px-[12px]'>
                        <div className='w-full h-full z-[1] pr-[12px] ml-[40px] rounded-[5px] relative overflow-hidden'>
                            <img src={girl_img} alt='girl_img' className='border-none shadow-none max-w-[100%] h-[100%] w-[100%] object-cover' style={{verticalAlign:"middle"}}/>
                            <div className='w-[25px] h-[316px] bg-[#3fd0d4] right-0 top-[50%] translate-y-[-50%] absolute' style={{clipPath: "polygon(0% 5%, 100% 0%, 100% 95%, 0% 100%)"}}></div>
                            <div className='h-[289px] rotate-45 bg-[#3fd0d4] left-[-20px] bottom-[-110px] p-[15px] rounded-[181px] absolute'>
                                <img src={quote} alt='quote' className='border-none shadow-none h-auto max-w-full'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[80px] bs:h-[140px] w-full'></div>
        </div>
    </div>
  )
}

export default CustomerFeedback;