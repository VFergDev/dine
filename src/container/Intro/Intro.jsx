import React, { useRef, useState } from "react";
import "./Intro.css";
import { meal } from "../../constants";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();
  const handlePlayVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <section className="app__video">
      <video
        src={meal}
        ref={videoRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />

      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handlePlayVideo}
        >
          {playVideo ? 
            <BsPauseFill color="#fff" fontSize={30} />
           : 
            <BsFillPlayFill color="#fff" fontSize={30} />
          }
        </div>
      </div>
    </section>
  );
};

export default Intro;
