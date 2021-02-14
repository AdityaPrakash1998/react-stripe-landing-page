import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from "./context"
const Hero = () => {
  const {closeSubmenu} = useGlobalContext();

  return <section className="hero" onMouseOver={closeSubmenu}>
    <div className="hero-center">
      <article className="hero-info">
        <h1>Payment Infrastructure for the internet</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est vel dolorem beatae nulla quam pariatur, soluta totam minima ad.
        </p>
        <button className="btn">Start Now</button>
      </article>
      <article className="hero-images">
        <img src={phoneImg} alt="Phone" className="phone-img"/>
      </article>
    </div>
  </section>
}

export default Hero
