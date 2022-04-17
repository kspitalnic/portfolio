import React from "react";
import Nav from "../Nav";

function Header(props) {
	const { currentPage, setCurrentPage } = props;

	return (
		<header>
			<div>
				<h2>Spitalnic</h2>
			</div>
			<div>
				<Nav
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
          >
        </Nav>
			</div>
		</header>
	);
}

export default Header;

// import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";

// function Header() {
//   return (
//     <section className="my-5">
//       <h1 id="header">a</h1>
//       {/* put img on project page? */}
//       {/* <img src={coverImage} className="my-2" style={{ width: "33%" }} alt="cover" /> */}
//     </section>
//   );
// }

// export default Header;