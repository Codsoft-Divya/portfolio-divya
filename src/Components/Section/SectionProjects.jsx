import React from 'react'
import './Section.css'

const SectionProjects = () => {
  return (
    <div className="projects">
        <div className='project-container'>
            <div className="project-container-column1">
                <div className='project-container-column1-project1'>
                    <img src="https://c0.wallpaperflare.com/preview/111/43/764/code-coder-codes-coding.jpg" 
                    alt="" 
                    // style= {{width:'525px', height:'650px', borderRadius:'13px'}}
                    />
                    <h4>E-Commerce</h4>
                    <h5>Web Application</h5>
                </div>
                <div className='project-container-column1-project2'>
                    <img src="https://c0.wallpaperflare.com/preview/111/43/764/code-coder-codes-coding.jpg" alt="" 
                    // style= {{width:'525px', height:'650px', borderRadius:'13px'}}
                    />
                    <h4>Project Name</h4>
                    <h5>Description</h5>
                </div>
                <div className='project-container-column1-project3'>
                    <img src="https://c0.wallpaperflare.com/preview/111/43/764/code-coder-codes-coding.jpg" alt="" 
                    // style= {{width:'525px', height:'650px', borderRadius:'13px'}} 
                    />
                    <h4>Project Name</h4>
                    <h5>Description</h5>
                </div>
            </div>
            <div className="project-container-column2">
                <div className='project-container-column2-project1'>
                    <img src="https://c0.wallpaperflare.com/preview/111/43/764/code-coder-codes-coding.jpg" alt="" 
                    // style= {{width:'525px', height:'650px', borderRadius:'13px'}} 
                    />
                    <h4>Project Name</h4>
                    <h5>Description</h5>
                </div>
                <div className='project-container-column2-project2'>
                    <img src="https://c0.wallpaperflare.com/preview/111/43/764/code-coder-codes-coding.jpg" alt="" 
                    // style= {{width:'525px', height:'650px', borderRadius:'13px'}} 
                    />
                    <h4>Project Name</h4>
                    <h5>Description</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionProjects