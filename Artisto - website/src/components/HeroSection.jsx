import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css'


const handleLoadedMetadata = (event) => {
  console.log("Metadata loaded!", event);
};


function HeroSection() {
  return (
    <div className='hero-container'>

<video src="/assets/videos/videoHome2.mp4"  autoPlay loop muted onLoadedMetadata={handleLoadedMetadata} controls />

{/* <video src='/assets/videos/videoHome2.mp4' autoPlay loop muted onLoadedMetadata="this.playbackRate=0.5" /> */}
<h1 className='text'>"A painting is not just a picture; it’s a world waiting to be explored."</h1>
      <p className='paragraph'>"Collecting art is not just about owning beauty, but preserving history and emotion."</p>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div> */}
    </div>
  )
}

export default HeroSection