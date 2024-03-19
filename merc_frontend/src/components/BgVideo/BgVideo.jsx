import React from "react";
import VideoBg from "../../assets/media/m_fe.mp4";
import "./BgVideo.css";

export default function BgVideo() {
  
  return (
    <>
      <div className="hero">
        <div className="overlay"></div>
        <video autoPlay loop muted playsInline className="video">
          <source src={VideoBg} type="video/mp4"/>
        </video>
      </div>
    </>
  );
}
