import React from 'react';
import PROJECTS from '../data/projects';

const Project = (props) => {
    const {title, image, description, link0, link1, link2} = props.project;
    return (
        <div style = {{display: 'inline-block', width: 400, margin: 50, verticalAlign: 'top'}}>
            <h3> {title} </h3>
            <img src = {image} alt='icons' style={{width:75, height: 75}} />
            <p>{description}</p>
            <a href={link0}>{link0}</a>
            <br></br>
            <a href={link1}>{link1}</a>
            <br></br>
            <a href={link2}>{link2}</a>
        </div>
    )
}


const Projects = () => ( //inline return
    <div className="Projects">
        <h2> Projects </h2>
        <div>
            {
                PROJECTS.map((each)=>{
                    return (
                        <Project key={each.id} project={each} />
                    );
                })
            }
        </div>
    </div>
)

export default Projects;