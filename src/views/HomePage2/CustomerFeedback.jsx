import React, { useState, useRef } from 'react';
import girl_img from '../../assets/CustomerFeedback/testimonial_right.jpeg';
import quote from '../../assets/CustomerFeedback/Quote.png';
import img3 from '../../assets/CustomerFeedback/testimonial_avatar_1.jpeg';
import img2 from '../../assets/CustomerFeedback/testimonial_avatar_2.jpeg';
import img1 from '../../assets/CustomerFeedback/testimonial_avatar_3.jpeg';
import drag from '../../assets/CustomerFeedback/drag.png';

const CustomerFeedback = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    {
      image: img1,
      name: "Alexon Shen",
      location: "California, USA",
      quote: "“Quality Services Good!”",
      feedback: "Completely reinvent worldwide testing new proceds with cooperative initiatives. Seemly leverage market excellent best practices chains"
    },
    {
      image: img2,
      name: "John Doe",
      location: "New York, USA",
      quote: "“Excellent Experience!”",
      feedback: "Revolutionizing testing procedures through collaborative efforts and leveraging existing best practices for optimal results."
    },
    {
      image: img3,
      name: "Jane Smith",
      location: "London, UK",
      quote: "“Outstanding Quality!”",
      feedback: "Transforming global testing standards with innovative approaches and seamless market integration."
    }
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.pageX;
    const diff = startX - currentX;

    if (diff > 50) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsDragging(false);
    } else if (diff < -50) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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
                            <div 
                                className='relative drag'
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                ref={sliderRef}
                                >
                                {isHovering && (
                                    <img 
                                    src={drag} 
                                    alt="drag" 
                                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 opacity-75'
                                    />
                                )}
                            <div className='overflow-hidden relative block m-0 p-0' style={{width:"636px"}}>
  <div 
    className='flex transition-transform duration-400 ease-in-out' 
    style={{ 
      transform: `translateX(-${currentSlide * 33.3}%)`,
      width: `${slides.length * 100}%`
    }}
  >
    {slides.map((slide, index) => (
      <div 
        key={index}
        className='w-full opacity-100 transition-opacity duration-400 ease-in-out'
        style={{ flex: `0 0 ${100 / slides.length}%` }}
      >
        <div className='w-full inline-block'>
          <div className='bg-white flex items-center gap-[30px] mt-[30px] rounded-[5px] relative' 
               style={{ filter: "drop-shadow(10px 5px 50px rgba(220, 220, 220, 0.3))", padding: "0px 65px 30px 30px" }}>
            {/* Slide content remains the same */}
            <div className='mt-[-30px]'>
              <div className='w-[150px] h-[150px] mb-[19px] rounded-[5px] overflow-hidden'>
                <img 
                  src={slide.image} 
                  className='border-none shadow-none h-auto max-w-full' 
                  alt='avatar' 
                  style={{ display: "initial" }}
                />
              </div>
              <div className=''>
                <h3 className='mb-[5px] font-medium leading-[1.333em]'>
                  {slide.name}
                </h3>
                <p className='text-[#3fd0d4]'>
                  {slide.location}
                </p>
              </div>
            </div>
            <div className=''>
              <p className='text-[#102039] font-medium text-[24px] leading-[1.333em] mb-[15px]' style={{ fontStyle: "italic" }}>
                {slide.quote}
              </p>
              <p className=''>
                {slide.feedback}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
                            </div>
                            {/* Carousel Controls */}
                            <div className='flex'>
                                <ul className='p-0 m-0 mt-[35px] flex gap-[5px]' style={{ listStyle: "none" }}>
                                    {slides.map((_, index) => (
                                    <li 
                                        key={index}
                                        className='h-[20px] w-[20px] rounded-full m-0 flex items-center justify-center relative overflow-hidden'
                                    >
                                        <button
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-[12px] w-[12px] border-2 border-[#3fd0d4] rounded-full p-0 cursor-pointer transition-all duration-600 ${
                                            currentSlide === index ? 'bg-[#3fd0d4] scale-133' : 'bg-transparent'
                                        }`}
                                        style={{ textIndent: "100px" }}
                                        >
                                        {index + 1}
                                        </button>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* second */}
                    <div className='bs:w-[50%] max-w-[100%] px-[12px]'>
                        <div className='w-full h-full z-[1] pr-[12px] ml-[40px] rounded-[5px] relative overflow-hidden'>
                            <img src='' alt='girl_img' className='border-none shadow-none max-w-[100%] h-[100%] w-[100%] object-cover' style={{verticalAlign:"middle"}}/>
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