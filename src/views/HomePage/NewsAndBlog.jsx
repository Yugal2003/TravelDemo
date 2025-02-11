import React from 'react'
import img1 from '../../assets/NewAndBlogs/blog-1-300x169.jpeg';
import img2 from '../../assets/NewAndBlogs/blog-2-300x169.jpeg';
import personImg from '../../assets/NewAndBlogs/person.png'

const NewsAndBlog = () => {
  return (
    <div>
         <div>{/* max-w */}
            <div className='w-full justify-center items-center mx-auto flex flex-col max-w-[1630px]'>
                {/* first */}
                <div className='text-center w-full'>
                    <h3 className='mb-[5px] uppercase tracking-[3px] bs:tracking-[5px] text-[#3fd0d4] font-normal text-[20px] bs:text-[22px] 2xl:text-[24px] leading-[1.333em] text_lets'>News & Blogs</h3>
                    <h2 style={{visibility:"visible",animationDuration:"0.8s",animationDelay:"0.2s",animationName:"fadeInUp"}} className='font-semibold text-[38px] bs:text-[44px] 2xl:text-[56px] leading-[1.327em] mb-0 travel_top_text'>Last Minute Amazing Deals</h2>
                </div>

                <div className='h-[40px] bs:h-[55px] w-full'></div>

                <div className='gap-y-[24px] flex flex-wrap flex-shrink-0 max-w-[100%] w-full' style={{flex:"0 0 auto"}}>
                    {/* first */}
                    <div className='w-[100%] bs:w-[50%] max-w-[100%] px-[12px]'>
                        <div style={{boxShadow: "0px 0px 45px 0px rgba(0, 0, 0, 0.1)"}} className='pr-0 sm:pr-[20px] bm:pr-[30px] gap-[20px] bm:gap-[30px] flex flex-col sm:flex-row bg-white min-h-[350px] bm:min-h-[400px]'>
                            <a href='#' className='block flex-none w-[100%] sm:w-[42%] bm:w-[48%] shadow-none relative overflow-hidden' style={{textDecoration:"none",transition: "all 0.3s ease"}}>
                                <img src={img1} className='block h-[100%] object-cover border-none shadow-none max-w-[100%] hover:scale-105' style={{transition: "all 1s ease",verticalAlign:"middle"}} alt='img'/>
                                <div className='flex items-center gap-0 right-0 bottom-0 absolute'>
                                    <span className='py-[9px] px-[16px] bg-[#3fd0d4] text-white deliver'>7</span>
                                    <span className='py-[9px] px-[16px] bg-[#102039] text-white deliver'>Mar 2024</span>
                                </div>
                            </a>
                            {/* right side */}
                            <div className='pt-[10px] pr-[20px] pb-[30px] pl-[20px] sm:pt-[30px] sm:pr-[0px] sm:pb-[30px] sm:pl-[0px] flex items-center'>
                                <div>
                                    {/* first */}
                                    <div className='flex items-center gap-[15px] mb-[17px]'>
                                        <div className='w-[45px] h-[45px] rounded-[50%]'>
                                            <img src={personImg} alt='' className='block w-[100%] h-[100%] object-cover border-none shadow-none max-w-[100%] rounded-[50%]' style={{verticalAlign:"middle"}}/>
                                        </div>
                                        <div className='deliver text-[#666666]'>
                                            By.<br/>travelpro
                                        </div>
                                    </div>

                                    <h2 className='mb-[20px] font-semibold text-[24px] leading-[1.333em] text-[#102039] travel_top_text'>
                                        <a href='#' className='overflow-hidden shadow-none font-semibold text-[20px] bs:text-[22px] 2xl:text-[24px] leading-[1.333em] travel_top_text hover:text-[#3fd0d4]' style={{transition: "all 0.3s ease",textOverflow:"ellipsis"}}>Our Business Thrives To Contribute Global</a>
                                    </h2>

                                    <p className='mb-[35px] overflow-hidden mt-0 deliver text-[#666666]' style={{textOverflow:"ellipsis"}}>
                                        In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English
                                    </p>

                                    <div className='flex items-center justify-between pl-[20px] bg-[#f8f8f8]'>
                                        <a href='#' className='shadow-none text-[#666666] deliver flex items-center gap-x-1.5 hover:text-[#3fd0d4]' style={{transition: "all 0.3s ease"}}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask01" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                                <rect width="20" height="20" fill="#D9D9D9"></rect></mask>
                                                <g mask="url(#mask01)"><path d="M1.66675 18.3337V3.33366C1.66675 2.87533 1.83008 2.48283 2.15675 2.15616C2.48286 1.83005 2.87508 1.66699 3.33341 1.66699H16.6667C17.1251 1.66699 17.5176 1.83005 17.8442 2.15616C18.1704 2.48283 18.3334 2.87533 18.3334 3.33366V13.3337C18.3334 13.792 18.1704 14.1845 17.8442 14.5112C17.5176 14.8373 17.1251 15.0003 16.6667 15.0003H5.00008L1.66675 18.3337ZM3.33341 14.3128L4.31258 13.3337H16.6667V3.33366H3.33341V14.3128Z" fill="currentColor"></path></g>
                                            </svg>
                                            No Comments
                                        </a>
                                        <a href='#' className='deliver flex items-center gap-[8px] text-white shadow-none hover:bg-[#3fd0d4] bg-[#102039] custom-clip-path pt-[14px] pr-[20px] pb-[14px] pl-[40px] xl:pr-[25px] xl:pl-[53px]' style={{transition: "all 0.4s ease"}}>
                                            More
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip02)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.15616 4.59014L1.31712 0.0641602C1.24542 0.0224266 1.164 0.000298672 1.08104 0H1.07968C0.996674 0.000329659 0.915216 0.022469 0.843465 0.0641992C0.771208 0.105407 0.711218 0.165101 0.669653 0.237153C0.628087 0.309204 0.606443 0.391019 0.606942 0.474199V9.52607C0.606614 9.60931 0.628283 9.69115 0.669757 9.76332C0.711231 9.83548 0.771035 9.89541 0.843117 9.93703C0.915198 9.97864 0.996997 10.0005 1.08023 10.0003C1.16346 10.0002 1.24518 9.97801 1.3171 9.93611L9.15616 5.41012C9.22813 5.36857 9.2879 5.30881 9.32946 5.23684C9.37101 5.16487 9.39289 5.08323 9.39289 5.00013C9.39289 4.91702 9.37101 4.83538 9.32946 4.76341C9.2879 4.69145 9.22813 4.63168 9.15616 4.59014Z" fill="currentColor"></path></g><defs><clipPath id="clip02"><rect width="10" height="10" fill="currentColor"></rect></clipPath></defs>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* second */}
                    <div className='w-[100%] bs:w-[50%] max-w-[100%] px-[12px]'>
                        <div style={{boxShadow: "0px 0px 45px 0px rgba(0, 0, 0, 0.1)"}} className='pr-0 sm:pr-[20px] bm:pr-[30px] gap-[20px] bm:gap-[30px] flex flex-col sm:flex-row bg-white min-h-[350px] bm:min-h-[400px]'>
                            <a href='#' className='block flex-none w-[100%] sm:w-[42%] bm:w-[48%] shadow-none relative overflow-hidden' style={{textDecoration:"none",transition: "all 0.3s ease"}}>
                                <img src={img2} className='block h-[100%] object-cover border-none shadow-none max-w-[100%] hover:scale-105' style={{transition: "all 1s ease",verticalAlign:"middle"}} alt='img'/>
                                <div className='flex items-center gap-0 right-0 bottom-0 absolute'>
                                    <span className='py-[9px] px-[16px] bg-[#3fd0d4] text-white deliver'>7</span>
                                    <span className='py-[9px] px-[16px] bg-[#102039] text-white deliver'>Mar 2024</span>
                                </div>
                            </a>
                            {/* right side */}
                            <div className='pt-[10px] pr-[20px] pb-[30px] pl-[20px] sm:pt-[30px] sm:pr-[0px] sm:pb-[30px] sm:pl-[0px] flex items-center'>
                                <div>
                                    {/* first */}
                                    <div className='flex items-center gap-[15px] mb-[17px]'>
                                        <div className='w-[45px] h-[45px] rounded-[50%]'>
                                            <img src={personImg} alt='' className='block w-[100%] h-[100%] object-cover border-none shadow-none max-w-[100%] rounded-[50%]' style={{verticalAlign:"middle"}}/>
                                        </div>
                                        <div className='deliver text-[#666666]'>
                                            By.<br/>travelpro
                                        </div>
                                    </div>

                                    <h2 className='mb-[20px] font-semibold text-[24px] leading-[1.333em] text-[#102039] travel_top_text'>
                                        <a href='#' className='overflow-hidden shadow-none font-semibold text-[20px] bs:text-[22px] 2xl:text-[24px] leading-[1.333em] travel_top_text hover:text-[#3fd0d4]' style={{transition: "all 0.3s ease",textOverflow:"ellipsis"}}>Designing Better Linke Website And Email</a>
                                    </h2>

                                    <p className='mb-[35px] overflow-hidden mt-0 deliver text-[#666666]' style={{textOverflow:"ellipsis"}}>
                                        In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English
                                    </p>

                                    <div className='flex items-center justify-between pl-[20px] bg-[#f8f8f8]'>
                                        <a href='#' className='shadow-none text-[#666666] deliver flex items-center gap-x-1.5 hover:text-[#3fd0d4]' style={{transition: "all 0.3s ease"}}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask01" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                                <rect width="20" height="20" fill="#D9D9D9"></rect></mask>
                                                <g mask="url(#mask01)"><path d="M1.66675 18.3337V3.33366C1.66675 2.87533 1.83008 2.48283 2.15675 2.15616C2.48286 1.83005 2.87508 1.66699 3.33341 1.66699H16.6667C17.1251 1.66699 17.5176 1.83005 17.8442 2.15616C18.1704 2.48283 18.3334 2.87533 18.3334 3.33366V13.3337C18.3334 13.792 18.1704 14.1845 17.8442 14.5112C17.5176 14.8373 17.1251 15.0003 16.6667 15.0003H5.00008L1.66675 18.3337ZM3.33341 14.3128L4.31258 13.3337H16.6667V3.33366H3.33341V14.3128Z" fill="currentColor"></path></g>
                                            </svg>
                                            No Comments
                                        </a>
                                        <a href='#' className='deliver flex items-center gap-[8px] text-white shadow-none hover:bg-[#3fd0d4] bg-[#102039] custom-clip-path pt-[14px] pr-[20px] pb-[14px] pl-[40px] xl:pr-[25px] xl:pl-[53px]' style={{transition: "all 0.4s ease"}}>
                                            More
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip02)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.15616 4.59014L1.31712 0.0641602C1.24542 0.0224266 1.164 0.000298672 1.08104 0H1.07968C0.996674 0.000329659 0.915216 0.022469 0.843465 0.0641992C0.771208 0.105407 0.711218 0.165101 0.669653 0.237153C0.628087 0.309204 0.606443 0.391019 0.606942 0.474199V9.52607C0.606614 9.60931 0.628283 9.69115 0.669757 9.76332C0.711231 9.83548 0.771035 9.89541 0.843117 9.93703C0.915198 9.97864 0.996997 10.0005 1.08023 10.0003C1.16346 10.0002 1.24518 9.97801 1.3171 9.93611L9.15616 5.41012C9.22813 5.36857 9.2879 5.30881 9.32946 5.23684C9.37101 5.16487 9.39289 5.08323 9.39289 5.00013C9.39289 4.91702 9.37101 4.83538 9.32946 4.76341C9.2879 4.69145 9.22813 4.63168 9.15616 4.59014Z" fill="currentColor"></path></g><defs><clipPath id="clip02"><rect width="10" height="10" fill="currentColor"></rect></clipPath></defs>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
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

export default NewsAndBlog