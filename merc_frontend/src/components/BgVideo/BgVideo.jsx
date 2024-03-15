import React from "react";
import VideoBg from "../../assets/media/m_fe.mp4";
import "./BgVideo.css";

export default function BgVideo({ children }) {
  
  return (
    <>
      <div className="hero px-[1rem] md:px-[5rem] pt-[2rem]">
        {children}
        <video autoPlay loop muted playsInline className="video">
          <source src={VideoBg} type="video/mp4"/>
        </video>
      </div>
    </>
  );
}
