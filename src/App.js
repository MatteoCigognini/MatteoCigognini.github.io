import React from 'react';
import './assets/css/App.css';
import banner_image from './assets/images/coding_six_monitors.svg';

function App() {
  //Function to activate menu
  function activateMenu() {
    document.querySelectorAll('.line').forEach(element => {
      //Add class
      if (element.classList.contains('active')) {
        element.classList.remove('active');
      } else {
        element.classList.add('active');
      }
    });
  }
  return (
    <div className="App">

      <div className="App-menu-icon" onClick={activateMenu}>
        <div id="m-bar-1" className="line"></div>
        <div id="m-bar-2" className="line"></div>
        <div id="m-bar-3" className="line"></div>
      </div>

      <h1><span>Welcome!</span><br />I'm Cigognini Matteo</h1>

      <img id="banner_image" src={banner_image} width="60%" />

      <button id="App-projects-btn">View my projects</button>

      <h4>Contacts</h4>
      <footer>
        <a href="https://www.instagram.com/cigognini.matteo/"><button className="App-contacts-btn"><i className="fab fa-instagram"></i></button></a>
        <a href="https://www.facebook.com/cigognini.matteo/"><button className="App-contacts-btn"><i class="fab fa-facebook"></i></button></a>
        <a href="https://github.com/MatteoCigognini"><button className="App-contacts-btn"><i class="fab fa-github"></i></button></a>
        <a href="https://www.linkedin.com/in/matteo-cigognini-19383a162/"><button className="App-contacts-btn"><i class="fab fa-linkedin"></i></button></a>
      </footer>
    </div>
  );
}

export default App;
