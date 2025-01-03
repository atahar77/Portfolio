import React from "react";
import './About.css'

const About = () => {
  return (
    <section className="About">
      <h1 className="myfullname">Mohammed Atahar Hajee Nagireddypalli</h1>
      <p className="introduction">
      I'm a passionate <span className="role">Full-Stack Web Developer</span> and <span className="role">Software Developer</span>. I specialize in creating dynamic, user-friendly applications and websites that provide seamless experiences. With a strong foundation in both front-end and back-end development, I focus on building scalable, efficient solutions using modern technologies.
      </p>
      <div className="educate">
      <div className="intern">
          <p>Internship</p>
          <p>Gabriel India Limited</p>
          <p>IT Intern</p>
          <p>Jan[2024] - June[2024]</p>
        </div>

        <div className="btech">
          <p>B-Tech [Computer Science and Engineering]</p>
          <p>SRM Institute of Science and Technology</p>
          <p>CGPA : 9.17</p>
          <p>Graduation Year: 2024</p>
        </div>
      </div>
    </section>
  )
};

export default About;
