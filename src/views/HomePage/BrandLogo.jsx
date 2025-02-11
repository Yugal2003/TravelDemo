import React from 'react'

const BrandLogo = () => {
  return (
    <div>
        <div>{/* max-w */}
            <div className='w-full justify-center items-center mx-auto flex flex-col'>
                <div className='h-[40px] bs:h-[76px] w-full'></div>
                <div className='w-full justify-center items-center mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px] px-[12px]'>
                    <div className='flex w-full items-center justify-center bs:justify-around flex-wrap gap-y-[20px] gap-x-[30px] bs:gap-y-[15px] bs:gap-x-[24px]'>
                        {/* first */}
                        <div className=''>
                            <img className='border-none rounded-0 shadow-none h-auto max-w-[100%]' style={{verticalAlign:"middle"}} src="https://travelpro-wp.laralink.com/wp-content/uploads/2024/03/brand_1.svg" alt='img_brand_log'/>
                        </div>
                        <div className=''>
                            <img className='border-none rounded-0 shadow-none h-auto max-w-[100%]' style={{verticalAlign:"middle"}} src="https://travelpro-wp.laralink.com/wp-content/uploads/2024/03/brand_2.svg" alt='img_brand_log'/>
                        </div>
                        <div className=''>
                            <img className='border-none rounded-0 shadow-none h-auto max-w-[100%]' style={{verticalAlign:"middle"}} src="https://travelpro-wp.laralink.com/wp-content/uploads/2024/03/brand_3.svg" alt='img_brand_log'/>
                        </div>
                        <div className=''>
                            <img className='border-none rounded-0 shadow-none h-auto max-w-[100%]' style={{verticalAlign:"middle"}} src="https://travelpro-wp.laralink.com/wp-content/uploads/2024/03/brand_4.svg" alt='img_brand_log'/>
                        </div>
                        <div className=''>
                            <img className='border-none rounded-0 shadow-none h-auto max-w-[100%]' style={{verticalAlign:"middle"}} src="https://travelpro-wp.laralink.com/wp-content/uploads/2024/03/brand_1.svg" alt='img_brand_log'/>
                        </div>
                    </div>
                </div>
                <div className='h-[80px] bs:h-[135px] w-full'></div>
            </div>
        </div>
    </div>
  )}

  export default BrandLogo;