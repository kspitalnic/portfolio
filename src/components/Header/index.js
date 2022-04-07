import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function Header() {
  return (
    <section className="my-5">
      <h1 id="about">Spitalnic</h1>
      <img src={coverImage} className="my-2" style={{ width: "33%" }} alt="cover" />
    </section>
  );
}

export default Header;