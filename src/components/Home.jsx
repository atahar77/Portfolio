import React from 'react'
import atahar from '../assets/atahar.png'
import './Home.css'
import { Link } from 'react-scroll'

const Home = () => {

  return (
    <section className='mainsec'>
        <div className='data'>
            <p className='hello'>Hello</p>
            <span className='name'>I'm <span className='atahar'>Atahar</span> <br/>SoftWare Developer</span>
            <p className='intro'>I am a skilled developer with expertise in both software and web development, creating efficient applications and user-friendly, responsive websites that deliver seamless experiences</p>
            <button className='hire'>Hire me</button>
        </div>
        <img  className='myimage' src={atahar} alt="" />
    </section>
  )
}

export default Home
