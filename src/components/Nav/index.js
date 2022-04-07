import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
//   const  categories = [
//     { name: 'Web Development', description: 'Web Development' },
//     { name: 'Writing', description: 'Articles/Blog Posts' },
//     { name: 'Fitness', description: 'Personal Training' },
//     { name: 'Music', description: 'Drumming' },
//     { name: 'Media', description: 'Social Media' }

//   ];

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
        {/* CENTER AND MAKE BIGGER OR REMOVE AND STYLE ON HEADER COMPONENT */}
      <h2>
        <a href="/">
         Spitalnic
        </a>
      </h2>
      <nav>
          {/* PUT UNDER HEADER */}
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#Projects" onClick={() => handleClick()}>
              Projects 
            </a>
          </li> 
          <li className="mx-2">
            <a href="#About" onClick={() => handleClick()}>
              About 
            </a>
          </li> 
          <li className="mx-2">
            <a href="#Contact" onClick={() => handleClick()}>
              Contact 
            </a>
          </li> 
          <li className="mx-2">
            <a href="#Resume" onClick={() => handleClick()}>
              Resume 
            </a>
          </li> 

          {/* {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          } */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;