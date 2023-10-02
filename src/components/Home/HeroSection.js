import React from 'react'
import HeroImg from "../../assests/undraw_Travel.png" 
import "./herosection.scss"

const Herosection = () => {
  return (
    <>
    <div className="hero-Container">
        <div className="hero-left">
            <p>"Unlock Your Travels: Store, Swap, and Explore <br/> Your Ultimate Destination for Bag Storage and Traveler's Clothing Exchange."
</p>
<button>CLICK HERE</button>
        </div>
        <div className="hero-right">
            <img src={HeroImg} alt=''></img>
        </div>
    </div>
    </>
  )
}

export default Herosection