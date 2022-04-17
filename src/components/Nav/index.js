import React from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

const { currentPage, setCurrentPage } = props; 


  return (
    <header data-testid="header" className="flex-row">
      <nav className="nav">
          <ul className="flex-row mobile-view">
				<li className={currentPage === "about" ? "mx-2 navActive" : "mx-2 navInactive"}>
					<span onClick={() => setCurrentPage("about")}>About</span>
				</li>
				<li className={currentPage === "project" ? "mx-2 navActive" : "mx-2 navInactive"}>
					<span onClick={() => setCurrentPage("project")}>Projects</span>
				</li>
				<li className={currentPage === "contact" ? "mx-2 navActive" : "mx-2 navInactive"}>
					<span onClick={() => setCurrentPage("contact")}>Contact</span>
				</li>
				<li>
          <span>
          <a href={require("../../assets/KSpitalnicResume.pdf")} rel="noreferrer" target="_blank" alt="Katie's Resume">
					Resume
				</a>				</span>
        </li>
			</ul>
      </nav>
    </header>
  );
}

export default Nav;