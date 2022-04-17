import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'Project 1',
            description: 'Project description',
            image: 'portrait',
            github: 'github link',
            deployed: 'live site link'
        },
        {
            name: 'Project 2',
            description: 'Project description',
            image: 'portrait',
            github: 'github link',
            deployed: 'live site link'
        },
        {
            name: 'Project 3',
            description: 'Project description',
            image: 'portrait',
            github: 'github link',
            deployed: 'live site link'
        },
        {
            name: 'Project 4',
            description: 'Project description',
            image: 'portrait',
            github: 'github link',
            deployed: 'live site link'
        },
        {
            name: 'Project 5',
            description: 'Project description',
            image: 'portrait',
            github: 'github link',
            deployed: 'live site link'
        },
        {
            name: 'Project 6',
            description: 'Project description',
            image: 'portrait',
            github: 'github link',
            deployed: 'live site link'
        }
    ]; 

    return(
        <section>
            <div className="center">
                <h1>Projects</h1>
            </div>
            <div>
               <Project projects={projects} /> 
            </div>
        </section>
    )
}

export default Portfolio;