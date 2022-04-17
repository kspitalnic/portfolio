import React, { useState } from "react";
import Card from 'react-bootstrap/Card';

const projects = [
    {
        id: 1,
        name: 'XYZ Car-Rental Review',
        description: 'Web application to view, create, edit, and update reviews on cars from XYZ car rentals.',
        image: 'cars',
        github: 'https://github.com/ryanweiler92/XYZ-Rentals',
        deployed: 'https://secret-savannah-63468.herokuapp.com/'
    },
    {
        id: 2,
        name: 'Initial Portfolio',
        description: 'Front end portfolio application displaying web development projects.',
        image: 'portfolio1',
        github: 'https://github.com/kspitalnic/portfoliochallenge',
        deployed: 'https://kspitalnic.github.io/portfoliochallenge/'
    },
    {
        id: 3,
        name: 'Easy Budget',
        description: 'Budgeting tracking application that uses third party APIs to show amazon prices and display related giphys.',
        image: 'easy-budget',
        github: 'https://github.com/Jaswal1p/Recepie-Budget',
        deployed: 'https://jaswal1p.github.io/Recepie-Budget/'
    },
    {
        id: 4,
        name: 'TYB Band Fanpage',
        description: 'Fanpage front end application for Thousand Years Betwen Band',
        image: 'tyb',
        github: 'https://github.com/kspitalnic/tybFanpage',
        deployed: 'https://kspitalnic.github.io/tybFanpage/'
    },
    {
        id: 5,
        name: 'Project 5',
        description: 'Coming Soon',
        image: 'placeholder',
        github: 'https://github.com/kspitalnic?tab=repositories',
        deployed: ''
    },
    {
        id: 6,
        name: 'Project 6',
        description: 'Coming Soon',
        image: 'placeholder',
        github: 'https://github.com/kspitalnic?tab=repositories',
        deployed: ''
    }
];
function Project() {
    return (
        <div className="center flex-row cards">
            {projects.map((project) => (
                <div>
                    <Card style={{ width: '18rem' }} className="card">
                        <Card.Img className="cardImg" src={require(`../../assets/images/${project.image}.jpeg`)} alt="Project thumbnail" />
                        <Card.ImgOverlay>
                            <Card.Body>
                                <Card.Title className="card-title" href={project.depoloyed}>{project.name}</Card.Title>
                                <Card.Subtitle className="card-description mb-2">{project.description}</Card.Subtitle>
                                <br />

                                <Card.Link href={project.deployed} rel="noreferrer" target="_blank" >Deployed Application</Card.Link>
                                <br />
                                <br />

                                <Card.Link href={project.github} rel="noreferrer" target="_blank">Project Repository</Card.Link>
                            </Card.Body>
                        </Card.ImgOverlay>

                    </Card>

                </div>

            ))}
        </div>
    );
}

export default Project;


