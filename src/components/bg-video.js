import React from "react"
import Video from "../videos/tyler-hero.mp4"

const BackgroundVideo = () => {
  return (
    <video
      className="background-video"
      autoPlay
      loop
      muted
      playsInline

    >
      <source src={Video} type="video/mp4" />
    </video>
  )
}

export default BackgroundVideo
