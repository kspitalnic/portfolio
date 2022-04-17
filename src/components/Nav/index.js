import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

const { currentPage, setCurrentPage } = props; 
  // const handleClick = () => {
  //   console.log("click handled")
  // }

  return (
    <header data-testid="header" className="flex-row">
        {/* TODO CENTER AND MAKE BIGGER OR REMOVE AND STYLE ON HEADER COMPONENT */}
      {/* <h2>
        <a href="/">
         Spitalnic
        </a>
      </h2> */}
      <nav className="nav">
          <ul className="flex-row mobile-view">
				<li className={currentPage === "about" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentPage("about")}>About</span>
				</li>
				<li className={currentPage === "project" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentPage("project")}>Projects</span>
				</li>
				<li className={currentPage === "contact" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentPage("contact")}>Contact</span>
				</li>
				<li className={currentPage === "resume" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentPage("resume")}>Resume</span>
				</li>
			</ul>
        

          {/* {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          } */}
      </nav>
    </header>
  );
}

export default Nav;