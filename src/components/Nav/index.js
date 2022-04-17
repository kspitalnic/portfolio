import React from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

const { currentPage, setCurrentPage } = props; 


  return (
    <header data-testid="header" className="flex-row">
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
      </nav>
    </header>
  );
}

export default Nav;