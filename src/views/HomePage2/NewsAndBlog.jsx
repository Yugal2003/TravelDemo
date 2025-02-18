import React, { useState } from 'react'
import img1 from '../../assets/NewAndBlogs/blog-1-300x169.jpeg';
import img2 from '../../assets/NewAndBlogs/blog-2-300x169.jpeg';
import img3 from '../../assets/NewAndBlogs/blog-3.jpeg'

import { FaRegCircleUser } from "react-icons/fa6";
import { BsChat } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const NewsAndBlog = () => {

    const [hoverIndex, setHoverIndex] = useState(null);
    
    const imageData = [
        {
            imgUrl : img1,
            date : "7 Mar",
            Title : "Our Business Thrives To Contribute Global",
            comment : "No Comments"
        },
        {
            imgUrl : img2,
            date : "7 Mar",
            Title : "Designing Better Linke Website And Email",
            comment : "No Comments"
        },
        {
            imgUrl : img3,
            date : "15 Feb",
            Title : "Useful VS Code Esions Front- End Develop",
            comment : "1 Comment"
        }
    ]
  return (
    <div>
        <div className='bg-[#ecffff]'>
            <div className='h-[75px] bs:h-[135px] w-full'></div>
            {/* container */}
            <div className='w-full justify-center items-center mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px]'>
                {/* first */}
                <div className='text-center'>
                    <h3 className='mb-[5px] uppercase tracking-[5px] text-[#3fd0d4] font-normal text-[24px] leading-[1.333em]'>News & Blogs</h3>
                    <h2 className='font-semibold text-[56px] leading-[1.327em]'>Last Minute Amazing Deals</h2>
                </div>
                {/* second */}
                <div className='h-[40px] bs:h-[55px] w-full'></div>
                {/* third */}
                <div className='gap-y-[24px] gap-x-0 flex flex-wrap'>
                    {/* first */}
                    {
                        imageData.map((ele,index)=> {
                            return(
                                    <div key={index}
                                    onMouseEnter={()=> setHoverIndex(index)}
                                    onMouseLeave={()=> setHoverIndex(null)} 
                                    className='bs:w-[33.33%] max-w-full px-[12px]'>
                                        <article className='bg-white' style={{boxShadow:"0px 0px 25px 0px rgba(0, 0, 0, 0.1)"}}>
                                            <a className='shadow-none block relative overflow-hidden' style={{transition:"all 0.3s ease"}}>
                                                <img src={ele.imgUrl} alt='' className='cursor-pointer w-full max-h-[400px] object-cover border-none rounded-none shadow-none h-auto max-w-full' style={{transition: "all 1s ease"}}/>
                                                <div className={`${hoverIndex === index ? "bg-[#3fd0d4]" : "bg-[#102039]"} w-[60px] h-[60px] rounded-[2px] flex items-center justify-center text-center py-[10px] px-[15px] top-[30px] right-[30px] z-[1] leading-[1.2em] text-white font-medium text-[16px] absolute`} style={{transition: "all 0.4s ease"}}>{ele.date}</div>
                                                <div className='cursor-pointer opacity-[1] w-[calc(100%-60px)] h-[calc(100%-60px)] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transform border border-white rounded-[5px] absolute' style={{transition: "all 0.3s ease"}}></div>
                                            </a>
                                            <div className='py-[20px] px-[30px]'>
                                                <ul className='flex items-center gap-[20px] mb-[10px] m-0 p-0 list-none'>
                                                    <li className='flex items-center gap-[6px] deliver'>
                                                        <FaRegCircleUser size={15}/>
                                                        <sapn className='text-[#666666]'>By. </sapn> <span style={{transition:"all 0.3s ease"}} className='hover:text-[#3fd0d4] text-[#666666] cursor-pointer'>travelpro</span>
                                                    </li>
                                                    <li className='flex items-center gap-[6px] deliver'>
                                                        <BsChat size={15}/>
                                                        <span className='hover:text-[#3fd0d4] text-[#666666] cursor-pointer' style={{transition:"all 0.3s ease"}}>{ele.comment}</span>
                                                    </li>
                                                </ul>
                                                <h2 className='mb-[18px] font-semibold text-[24px] leading-[1.333em] travel_top_text text-[#102039] hover:text-[#3fd0d4] cursor-pointer' style={{transition:"all 0.3s ease"}}>{ele.Title}</h2>
                                                <hr className='mb-[16px] bg-transparent border-t border-t-[#dfdada] p-0 opacity-[1]'/>
                                                <a className='cursor-pointer deliver flex items-center justify-between shadow-none text-[#102039] hover:text-[#3fd0d4] font-medium text-[18px] leading-[1.667em]' style={{transition:"all 0.3s ease"}}>
                                                    Read More
                                                    <FaArrowRightLong size={18}/>
                                                </a>
                                            </div>
                                        </article>
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='h-[80px] bs:h-[140px] w-full'></div>
        </div>
    </div>
  )
}

export default NewsAndBlog;