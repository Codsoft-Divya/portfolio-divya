import React from 'react'
import { Link } from 'react-router-dom';
import './Section.css'
import Project1 from '../../Assets/Images/Project1.png'
import QuizApp from '../../Assets/Images/QuizApp.png'
import Ecomm from '../../Assets/Images/Ecomm.png'
import Netflix from '../../Assets/Images/Netflix.png'


const SectionProjects = () => {
  return (
    <div className="projects">
        <div className='project-container'>
            <div className="project-container-column1">
                <div className='project-container-column1-project1'>
                    <Link to="/project/1">
                        <img src={Project1} alt="Reactjs projects with features" />
                        <h4>Web App With Comprhensive features</h4>
                        <br />
                        <br />
                    </Link>
                </div>
                <div className='project-container-column1-project2'>
                    <Link to="/project/2">
                        <img src={QuizApp} alt="Reactjs projects" />
                        <h4>Quiz App</h4>
                        <br />
                        <br />
                    </Link>
                </div>
                <div className='project-container-column1-project3'>
                    <Link to="/project/3">
                        <img src={Ecomm} alt="" />
                        <h4>Ed-Tech Web Application</h4>
                        <br />
                        <br />
                    </Link>
                </div>
            </div>
            <div className="project-container-column2">
                <div className='project-container-column2-project1'>
                    <Link to="/project/4">
                        <img src={Ecomm} alt="" />
                        <h4>E-Commerce</h4>
                        <br />
                        <br />
                    </Link>
                </div>
                <div className='project-container-column2-project2'>
                    <Link to="/project/5">
                        <img src={Netflix} alt="" />
                        <h4>Netflix Clone</h4>
                        <br />
                        <br />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionProjects