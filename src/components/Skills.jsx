import React from "react";
import "./Skills.css";

import HTML from "../assets/icons/HTML.svg";
import CSS from "../assets/icons/CSS.svg";
import JavaScript from "../assets/icons/JavaScript.svg";
import ReactDark from "../assets/icons/ReactDark.svg";
import NodeJSDark from "../assets/icons/NodeJSDark.svg";
import ExpressJSDark from "../assets/icons/ExpressJSDark.svg";
import MongoDB from "../assets/icons/MongoDB.svg";
import JavaDark from "../assets/icons/JavaDark.svg";
import SpringDark from "../assets/icons/SpringDark.svg";
import MySQLDark from "../assets/icons/MySQLDark.svg";
import PythonDark from "../assets/icons/PythonDark.svg";
import VercelDark from "../assets/icons/VercelDark.svg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="what">What I do</span>
      <p className="explain">
      "I am a passionate full-stack web developer and software developer, focused on building scalable, high-performance applications. With a strong emphasis on creating seamless user experiences and delivering robust, data-driven solutions, I aim to transform ideas into efficient, innovative digital products."
      </p>
          <div className="image-contain">
            <img className="Skillbar" src={HTML} alt="" />
            <img className="Skillbar" src={CSS} alt="" />
            <img className="Skillbar" src={JavaScript} alt="" />
            <img className="Skillbar" src={ReactDark} alt="" />
          
            <img className="Skillbar" src={NodeJSDark} alt="" />
            <img className="Skillbar" src={ExpressJSDark} alt="" />
            <img className="Skillbar" src={MongoDB} alt="" />
            <img className="Skillbar" src={JavaDark} alt="" />



            <img className="Skillbar" src={SpringDark} alt="" />
            <img className="Skillbar" src={PythonDark} alt="" />
            <img className="Skillbar" src={MySQLDark} alt="" />
            <img className="Skillbar" src={VercelDark} alt="" />
        </div>
    </section>
  );
};

export default Skills;
