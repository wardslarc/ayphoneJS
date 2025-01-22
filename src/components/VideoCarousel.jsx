import React, { useEffect } from 'react';
import { useRef, useState } from 'react'
import { highlightsSlides } from '../constants'


const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  })

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;

    if(span[videoId]){
        //animate the progress of the video
        let anim =gsap.to(span[videoId], {
            onUpdate: () =>{

            },

            onComplete: () =>{

            
            },
        })
    }
  },[videoId, startPlay])

  return (
    <>
      <div className="flex items-center">
        {highlightsSlides.map((list, i) =>(
            <div key={list.id} id="slider">
                <div className='video-carousel_container'>
                    <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                        <video id ="video" playsInline={true} preload='auto' muted>
                            <source src={list.video} type="video/mp4" />
                        </video>
                    </div>
                    <div className= "absolute top-12 left-[5%] z-10" >
                        {list.textLists.map((text)=>(
                            <p key={text} className="md:text-xl font-medium">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        ))}
      </div>
    </>
  )
}

export default VideoCarousel
