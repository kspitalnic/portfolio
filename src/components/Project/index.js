import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Nav from 'react-bootstrap/Nav'

// function Projects() {
//   const [cards] = useState([
//     {
//       name: 'Name',
//       github: 'github link',
//       deployed: 'deployed link'
//     },
//     {
//       name: 'name',
//       github: 'Github link',
//       deployed: 'Deployed link'
//     }
//   ])
//   return (
//     <div>
//       <div className="flex-row">
//         {cards.map((image, i) => (
//           <img
//             src={require(`../../assets/small/${cards.name}/${i}.jpg`).default}
//             alt={image.name}
//             className="img-thumbnail mx-1"
//             key={image.name}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

function Project(props) {
  const currentProject = useState(props)[0].projects;

  const name = currentProject.name;
  const image = currentProject.image;
  const deployed = currentProject.deployed;
  const github = currentProject.github;
  const description = currentProject.description;

  return (
    <Card style={{ width: "18rem" }}>
              <Card.Img src="holder.js/100px270" alt="Card image" />
      <Card.ImgOverlay>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>

  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
    </Card.ImgOverlay> 
    </Card>
  )

  // return (
  //   <section>
  //     <div>
  //     {/* {props.projects.map((project) => (
  //       <a href={project.deployed} target="_blank" rel="noreferrer">
  //         <img src={project.thumbnail} alt={project.alt} />
  //       </a>
  //     ))} */}
  //     <Projects /> 
  //     </div>
  //   </section>
  // );
}

export default Project;