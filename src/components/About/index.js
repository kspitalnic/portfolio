import React from "react";


function About() {
    return(
        <div>
        <div><h2>About</h2></div>
        <div className="flex">
            <img className="image" src={require('../../assets/images/portrait.jpeg')} alt="Kate"/>
            <h6>Katie Spitalnic's full stack web developer portfolio.</h6>
            <p>Katie Spitalnic is currently a student at UConn's Coding Bootcamp where she is learning skills to become a full-stack developer. Projects and updates will be uploaded here as Kate continues here web developer journey.
</p>
        </div>
        </div>
    )
    }
    
    export default About;