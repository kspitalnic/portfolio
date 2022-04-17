import React from "react";
import Card from "react-bootstrap/Card";


function Project() {
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
    return (
        <div className="center flex-row cards">
            {projects.map((project) => (
                <Card style={{ width: '18rem' }} className="card">
  <Card.Img src={require(`../../assets/images/${project.image}.jpeg`)} alt="Project thumbnail"/>
  <Card.ImgOverlay>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{project.description}</Card.Subtitle>
                  <Card.Link href={project.github}>Deployed Application</Card.Link>
                  <Card.Link href={project.github}>Project Repository</Card.Link>
                </Card.Body>
                </Card.ImgOverlay>

              </Card>
                // <div>
                //     <a href={project.deployed} target="_blank" rel="noreferrer">
                //         <img className="image" src={require(`../../assets/images/${project.image}.jpeg`)} alt="Project thumbnail" />
                //     </a>
                //     <p>{project.name}</p>
                //     <p>{project.description}</p>
                //     <p>{project.github}</p>
                //     <p>{project.deployed}</p>
                // </div>

            ))}
        </div>
    );
}
export default Project;


