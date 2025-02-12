import React,{useState} from 'react'
import videoimg from '../../assets/VideoSection/video_block.jpeg';
import { FaLocationDot } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const VideoSection = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <div className='relative'>{/* max-w */}
            <div className='w-full justify-center items-center mx-auto flex flex-col max-w-auto  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px] px-[12px]'>
                    <div style={{backgroundImage:`url(${videoimg})`}} className='w-full h-[100%] min-h-[720px] rounded-[40px] overflow-hidden bg-cover bg-no-repeat bg-center relative'>
                        <button onClick={()=> setIsOpen(true)} className='atag w-[120px] h-[120px] text-white absolute top-[50%] left-[50%] shadow-none bg-[#3fd0d4] flex items-center justify-center' style={{borderRadius:"50%",transition: "all 0.4s ease",transform: "translate(-50%, -50%)",zIndex:"2"}}>
                            {/* before */}
                            {/* <div className=""> */}
                                <div className="svg-before"></div>
                            {/* </div> */}
                            <svg style={{zIndex:"3",verticalAlign:"middle",position:""}} width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.9921 17.8114L9.63992 0.951019C7.66105 -0.267256 5.26855 -0.317908 3.23984 0.815524C1.21113 1.94878 0 4.01294 0 6.3367V39.9039C0 43.4175 2.83109 46.2914 6.31071 46.3104C6.32021 46.3104 6.32971 46.3105 6.33902 46.3105C7.42642 46.3104 8.55958 45.9696 9.61794 45.3238C10.4693 44.8043 10.7384 43.693 10.219 42.8417C9.69952 41.9902 8.58807 41.7212 7.73693 42.2407C7.2419 42.5426 6.75844 42.6988 6.33016 42.6987C5.01727 42.6916 3.61159 41.5669 3.61159 39.904V6.33679C3.61159 5.33994 4.13113 4.4547 5.00127 3.96853C5.87149 3.48236 6.89764 3.50407 7.74543 4.02606L35.0977 20.8864C35.9198 21.3926 36.3902 22.2366 36.3882 23.2021C36.3862 24.1674 35.9124 25.0095 35.0857 25.514L15.31 37.6224C14.4594 38.1432 14.192 39.2549 14.7128 40.1054C15.2335 40.956 16.3453 41.2234 17.1959 40.7026L36.9693 28.5956C38.8625 27.4407 39.9955 25.4272 40 23.2093C40.0045 20.9916 38.8797 18.9735 36.9921 17.8114Z" fill="currentColor"></path>
                            </svg>
                             {/* after */}
                             {/* <div className=""> */}
                                <div className="svg-after"></div>
                            {/* </div> */}
                        </button>

                        <h2 className='left-0 bottom-0 w-[100%] p-[50px] bs:py-[70px] bs:px-[80px] text-white font-semibold text-[42px] 2xl:text-[60px] leading-[1.334em] mb-0 absolute travel_top_text'>Our Journey <br/> in Videos</h2>

                        <span className='deliver flex items-center gap-[15px] absolute right-[5%] top-[5.5%] pl-[15px] text-white text-[20px] leading-[1.4em]'>
                            <FaLocationDot style={{textRendering:"auto"}} className='font-black inline-block leading-[1] text-white text-[20px]'>
                                {/* before */}
                                <div className="relative">
                                    <div className="i-before"></div>
                                </div>
                            </FaLocationDot>
                            Location Mountain Strait, Any State
                        </span>
                    </div>
            </div>

            {/* Modal - YouTube Video Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
                <div className="relative w-[100%] h-[100%] 2xl:w-[92%] 3xl:w-[54%] 3xl:h-[76%] mx-[1rem] 2xl:mx-0 mt-[2rem] 3xl:mt-[1.5rem] aspect-video">
                    {/* Close Button */}
                    <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-[0px] right-[0px] bg-red-700 p-2.5 shadow-md"
                    >
                    <RxCross1 size={20} className='text-white hover:text-black'/>
                    </button>

                    {/* YouTube Video */}
                    <iframe 
                    className="w-[100%] h-[100%]"
                    src="https://www.youtube.com/embed/eSUmkFPln_U"
                    title="YouTube Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    />
                </div>
                </div>
            )}
        </div>
    </div>
  )}

export default VideoSection;