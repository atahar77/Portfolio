import React, { useState } from 'react'
import { Link } from 'react-scroll'
import file from '../assets/file.png'
import './Navbar.css'
import menu from '../assets/menu.png'



const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 85, // 70px offset (adjust as needed)
        behavior: 'smooth',
      });
    }
  };



  return (
    <nav className='main'>
        <img className='logo' src={file} alt="" />
        <div className='menu'>
            <Link activeClass='active' to='mainsec' spy={true} smooth={true} offset={-110} duration={500} className='link'>Home</Link>
            <Link activeClass='active' to='myfullname' spy={true} smooth={true} offset={-150} duration={500} className='link'>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-85} duration={500} className='link' >Skills</Link>
            <Link activeClass='active' to='proje' spy={true} smooth={true} offset={-95} duration={500}className='link'>Projects</Link>
        </div>
        <button className='btn' onClick={handleContact}>
              Contact me
        </button>

        <img src={menu} alt="" className='mobbutt' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navimenu' style={{display : showMenu? 'flex': 'none'}}>
        <Link activeClass='active' to='mainsec' spy={true} smooth={true} offset={-70} duration={500} className='listi' >Home</Link>
            <Link activeClass='active' to='myfullname' spy={true} smooth={true} offset={-85} duration={500} className='listi' >About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-85} duration={500} className='listi' >Skills</Link>
            <Link activeClass='active' to='proje' spy={true} smooth={true} offset={-95} duration={500}className='listi' >Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-95} duration={500}className='listi' >Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
