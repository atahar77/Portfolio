import React from 'react'
import './Project.css'
import notes from '../assets/notes.png'
import Aitripplanner from '../assets/Aitripplanner.png'
import blog from '../assets/blog.png'
import spotify from '../assets/spotify.png'
import finance from '../assets/finance.png'
import Task from '../assets/Task.png'

const projects = [
  {id:1, title:'Blog App', imgSrc:blog},
  {id:2, title:'AI trip Planner', imgSrc:Aitripplanner},
  {id:3, title:'Spotify Clone', imgSrc:spotify},
  {id:4, title:'Finance App', imgSrc:finance},
  {id:5, title:'Task Management App', imgSrc:Task},
  {id:6, title:'Notes App', imgSrc:notes},
]

const Project = () => {
  return (
    <section className='proje'>
        <h1 className='port'>Portfolio</h1>
        <span className='parintro'>"Explore my portfolio of web development and software projects, where creativity and technical expertise come together to deliver innovative, user-centered solutions. From responsive websites to scalable applications, I focus on high-quality, functional, and aesthetically pleasing results."</span>
        <div className='pimages'>
          {projects.map((project) => (
            <div key={project.id} className='Image-container'>
              <img src={project.imgSrc} className='pimg' />
              <div className='overlay'>
                <p className='title'>{project.title}</p>
              </div>
            </div>
          ))}
        </div>

    </section>
  )
}

export default Project
