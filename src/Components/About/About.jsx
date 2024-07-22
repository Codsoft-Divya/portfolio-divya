import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './About.css'
import SectionEmail from '../Section/SectionEmail'

const About = () => {
  return (
    <div className='about'>
        <div className='about-container'>
            <Header />
            <div className='about-container-title'>
                Full Stack Developer specializing in<br/> end-to-end
                application development<br/>
                and seamless user experiences.
            </div>
            <div className='about-container-desc'>
                I'm Divya, a beginer full stack developer with a little experience in dynamic startup environment.<br/>
                Throughout my career, I've led end-to-end design projects, specializing in optimizing user experiences and driving product evolution.<br/>
                I thrive in problem-solving, prioritizing user-centric needs, and delivering high-quality designs that elevate user satisfaction.<br />
                <br />
                In previous roles, I've worked on strategic initiatives that significantly enhanced product metrics and user engagement.<br/>
                I excel in guiding comprehensive design projects, from strategic planning and user research to UI/UX design and seamless collaboration across teams.<br/>
                With a strong foundation in scalable design thinking and usability principles, I leverage diverse design tools and methodologies to achieve impactful outcomes.<br/>
                <br/>
                My expertise lies in developing intuitive product user interfaces and fostering collaborative environments that<br/>
                integrate design, engineering, and product management. I am dedicated to pushing boundaries and delivering best outcomes<br/>
                that align with user expectations and achieve business goals.
            </div>
            <div className='about-container-image'>
                {/* <img src={mainImage} alt="full Stack developer" /> */}
            </div>
            <div className='about-container-experience'>
                Work Experience
                <div className='about-container-experience-column'>
                    <div className='about-container-experience-column-1'>
                        <h2>Full Stack Developer</h2>
                        <h5>Appican</h5>
                        <h5>2023-Present</h5>
                    </div>
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
            <Footer />
        </div>
    </div>
  )
}

export default About