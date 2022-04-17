import React, { useState } from 'react';
import Header from './components/Header';
import About from "./components/About";
import Project from "./components/Project";
import Resume from './components/Resume';
import Contact from "./components/Contact";import Footer from './components/Footer';

// WILL PROBABLY NEED TO ADD AN ABOUT, CONTACT, AND RESUME COMPONENT WITH HOW I HAVE SET THIS UP ?
function App() {
	const [currentPage, setCurrentPage] = useState("about");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderPage = () => {
		switch (currentPage) {
			case "about":
				return <About />;
			case "project":
				return <Project />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return null;
		}
	};
	return (
		<div>
			<div className="mobile-header">
				<Header currentTab={currentPage} setCurrentPage={setCurrentPage}></Header>
			</div>
			<div>
				<main>{renderPage()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;