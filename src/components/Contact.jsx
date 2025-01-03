import React, { useRef } from 'react'
import './Contact.css'
import github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';


const openInNewTab = (url) => {
    window.open(url, '_blank');
};


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const name = form.current["your_name"].value.trim();
    const email = form.current["your_email"].value.trim();
    const message = form.current["message"].value.trim();

    if (!name || !email || !message) {
        // Show an alert or error message if any field is empty
        alert("Please fill in all fields before submitting.");
        return; // Prevent email from being sent
    }

        emailjs
          .sendForm('service_fwbpgfh', 'template_h9t58cs', form.current, {
            publicKey: 'gG2Bfnk2jEfsFeSh-',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };


  return (
    <section id="contact">
        <h1 className="headcont">Contact Me</h1>
        <span className="cinfo">Please fill out the form below to discuss any work opportunies.</span>
        <form className='contactform' ref={form} onSubmit={sendEmail}>
            <input type="text" className='ninput' placeholder='Your Name' name='your_name'/>
            <input type="text" className="ninput" placeholder='Your Email' name='your_email'/>
            <textarea className='msg' name='message' placeholder='Your Message..' rows='5'></textarea>
            <button className="submit" type='submit' value='send'>Submit</button>
        </form>
        <div className="slinks">
            <Link onClick={()=> openInNewTab('https://github.com/atahar77')}><img src={github} alt="" className="socilink" /></Link>
            <Link onClick={() => openInNewTab('https://www.linkedin.com/in/atahar-hajee-122699228/')}> <img src={Linkedin} alt="" className="socillink" /></Link>
            <Link  onClick={()=> openInNewTab('https://www.instagram.com/urstrulyatahar/')}><img src={instagram} alt="" className="socilink" /></Link>
        </div>
    </section>
  )
}

export default Contact
