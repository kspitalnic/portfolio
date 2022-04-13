import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Project(props) {
    const currentProject = {
        name: "project",
        description: 
            "Full Stack Development Projects by Katie"
    };
  return (
    <section>
      <h1>{capitalizeFirstLetter(props.name)}</h1>
      <p>{props.description}</p>
      <PhotoList project={props.name} />
    </section>
  );
}

export default Project;