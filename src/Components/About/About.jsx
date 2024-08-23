import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './About.css'
import SectionEmail from '../Section/SectionEmail'
import mainImage from '..//..//Assets/Images/Divya.png'

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='about'>
        <div className='about-container'>
            <Header />
            <div className='about-container-title'>
            Full Stack Developer committed to<br /> 
            designing robust, full-spectrum <br /> 
            applications with user-centric design.<br />
            </div>
            <div className='about-container-desc'>
                I'm Divya, a beginner full stack developer with some experience in dynamic startup environments.<br />
                I've led end-to-end design projects, focusing on optimizing user experiences and driving<br />
                product evolution. I excel in problem-solving,prioritizing user needs, and delivering high-quality designs<br />
                enhance user satisfaction.<br />
                <br />
                In previous roles, I led projects that improved product metrics and user engagement. I manage design projects<br />
                from planning and user esearch to UI/UX design and team collaboration. With a strong foundation in design <br />
                thinking and usability, I use various tools and methods to achieve impactful results.<br />
                <br />
                
                My expertise is in creating intuitive user interfaces and fostering teamwork between design, engineering, and <br/>
                product management. I am dedicated to delivering results that meet user needs and business objectives.<br />
                <br />
            </div>
            <div className='about-container-image'>
                <img src={mainImage} alt="full Stack developer" />
            </div>
            <div className='about-container-experience'>
                Work Experience
                <div className='about-container-experience-column'>
                    <div className='about-container-experience-column-2'>
                        <h2>Digital Markerter</h2>
                        <h5>Freelance</h5>
                        <h5>2018-2023</h5>
                    </div>
                </div>
            </div>
            <div className='about-container-education'>
                Education
                <div className='about-container-education-container'>
                    <div className='about-container-education-graduation'>
                        <h3>Bachelor of Engineering</h3>
                        <h5>Electrical Engineering</h5>
                        <h5>2015-2018</h5>
                    </div>
                    <div className='about-container-education-diploma'>
                        <h3>Polytechnic Diploma</h3>
                        <h5>Electrical Engineering</h5>
                        <h5>2012-2015</h5>
                    </div>
                    <div className='about-container-education-secondry'>
                        <h3>Secondry Education</h3>
                        <h5>English, Hindi, Maths, Science, SocialStudies</h5>
                        <h5>2011-12</h5>
                    </div>
                </div>
            </div>
            <div className='about-container-skills'>
                Skills
                <div className='about-container-skills-container'>
                    <div className='about-container-skills-row1'>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Next.js</li>
                            <li>SEO</li>
                        </ul>
                    </div>
                    <div className='about-container-skills-row1'>
                        <ul>
                            <li>Node.js</li>
                            <li>MUI</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>PPC</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className='about-container-contact'>
                Contact<br/>
                <div className='about-container-contact-desc'>
                    Feel free to reach out for projects, collaborations, or just to say hello!<br/> Currently seeking new opportunities<br/>
                    <br/>
                    b7divya@gmail.com
                </div>
            </div> */}
            <SectionEmail />
            {/* <Footer /> */}
        </div>
    </div>
  )
}

export default About