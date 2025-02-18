import React from 'react';
import footer_img from '../../../assets/Footer/footer_bg.jpeg';
import letter from '../../../assets/Footer/letter.png';

const Footer = () => {
  return (
    <div className=''>
        <div> {/* max-w */}
          <div style={{backgroundImage:`url(${footer_img})`}} className='relative w-full bg-[#102039] text-white bg-cover bg-no-repeat bg-center mt-[200px] bs:mt-0'>
            {/* first div */}
            <div className='relative text-white'>
              {/* before */}
              <div className="footer-before"></div>

              <div className='relative max-w-[1630px] px-[12px] mx-auto w-full text-white' style={{zIndex:"2"}}>
                <div className='flex flex-col bs:flex-row items-center justify-around py-[48px] px-[30px] gap-[15px] rounded-[5px] bg-[#3fd0d4] text-white'>
                  <div className='flex-none w-[100px] text-white'>
                    <img src={letter} alt='letter' className='h-auto max-w-[100%] text-white' style={{verticalAlign:"middle",border:"0"}}/>
                  </div>
                  <h2 className='text-white font-bold text-[32px] 2xl:text-[40px] leading-[1.45em] mb-0 travel_top_text'>Subscribe Our Newslatter</h2>
                  <p className='mb-[15px] mt-0 text-white deliver'><strong>Error:</strong> Contact form not found.</p>
                </div>
              </div>
            </div>

            {/* first conatiner */}
            <div className='w-[100%] mx-auto max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px] px-[12px]'>
              <div className='flex flex-col bs:flex-row mt-[30px] bs:mt-0 gap-0 bs:gap-y-[40px] bs:gap-x-0 bs:pt-[100px] bs:pb-[60px] bs:ml-[-25px] bs:mr-[-25px] text-white'>
                  {/* first */}
                  <div className='border-b border-gray-400 bs:border-r bs:border-b-0 bs:border-gray-400 flex-1 py-[35px] px-0 bs:py-[15px] bs:px-[25px] text-white'></div>
                  {/* second */}
                  <div className='border-b border-gray-400 bs:border-r bs:border-b-0 bs:border-gray-400 flex-1 py-[35px] px-0 bs:py-[15px] bs:px-[25px] text-white'>
                    <div className=''>
                      <h3 className='mb-[20px] bs:mb-[35px] text-white font-semibold text-[20px] bs:text-[22px] 2xl:text-[24px] leading-[1.333em] travel_top_text'>Useful Links</h3>
                      <div className=''>
                        <ul className='p-0 my-0 mx-[-7px] flex flex-wrap gap-y-[18px] gap-x-0' style={{listStyle:"none"}}>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>Home</a>
                          </li>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>About Us</a>
                          </li>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>Contacts</a>
                          </li>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>Destination</a>
                          </li>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>Tours</a>
                          </li>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>Blog</a>
                          </li>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>Terms of Services</a>
                          </li>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>Privacy Policy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* third */}
                  <div className='flex-1 py-[35px] px-0 bs:py-[15px] bs:px-[25px] text-white'>
                    <div className=''>
                      <h3 className='mb-[20px] bs:mb-[35px] text-white font-semibold text-[20px] bs:text-[22px] 2xl:text-[24px] leading-[1.333em] travel_top_text'>Contact Info</h3>
                      <div className=''>
                        <ul className='p-0 my-0 mx-[-7px] flex flex-wrap gap-y-[18px] gap-x-0' style={{listStyle:"none"}}>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>Santorini, Greece</a>
                          </li>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>Machu Picchu, Peru</a>
                          </li>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>New York City, USA</a>
                          </li>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>Rome, Italy</a>
                          </li>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>Paris, France</a>
                          </li>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>Africa Portugal Mexico</a>
                          </li>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>Machu Picchu, Peru</a>
                          </li>
                          <li className='mb-0 w-[50%] py-0 px-[7px] deliver hover:text-[#3fd0d4] cursor-pointer'>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='' style={{textDecoration:"none",transition: "all 0.3s ease"}}>New York City, USA</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            {/* second conatiner */}
            <div className='w-[100%] mx-auto max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px] px-[12px]'>
              <div className='flex flex-col md:flex-row justify-center text-center md:justify-between flex-wrap gap-y-[5px] gap-x-[30px] py-[24px] px-0 border-t border-t-gray-400'>
                <div className='text-white deliver'>Copyright © 2024 Travelpro . All rights reserved.</div>
                <ul className='flex gap-y-[5px] gap-x-[25px] flex-wrap justify-center m-0 p-0' style={{listStyle:"none"}}>
                  <li>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer" className='deliver' style={{textDecoration:"none",transition: "all 0.3s ease"}}>Terms of Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer;