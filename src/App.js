import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
// WILL PROBABLY NEED TO ADD AN ABOUT, CONTACT, AND RESUME COMPONENT WITH HOW I HAVE SET THIS UP ?
function App() {

  return (
    <div>
              <Nav></Nav>
      <main>
        <Header></Header>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;