import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router';
import "./css/style.css";

import {Home} from './js/Home.js';
import {Survey} from './js/Survey.js';
import {About} from './js/About.js';


function App() {

  let navigate = useNavigate();

  function handleClickHome() {
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".survey").classList.remove("active");
    let element = document.querySelector(".home");
    element.classList.add("active");
    navigate("/");
  }

  function handleClickSurvey() {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    let element = document.querySelector(".survey");
    element.classList.add("active");
    navigate("/survey");
  }

  function handleClickAbout() {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".survey").classList.remove("active");
    let element = document.querySelector(".about");
    element.classList.add("active");
    navigate("/about");
  }

  return (

    // rendering the app
   <div>
    <Routes>
      
      <Route path="/about" element={
        <>
          {/* put components here */
            <About handleClickHome={handleClickHome} handleClickAbout={handleClickAbout} handleClickSurvey={handleClickSurvey} />
          }
        </>
      } />

      <Route path="/survey" element={
        <>
          {/* put components here */
            <Survey handleClickHome={handleClickHome} handleClickAbout={handleClickAbout} handleClickSurvey={handleClickSurvey} />
          }
        </>
      } />

      <Route path="/*" element={
        <>
          {/* put components here */
           
            <Home handleClickHome={handleClickHome} handleClickAbout={handleClickAbout} handleClickSurvey={handleClickSurvey} />
           
          }
        </>
      } />
    </Routes>
   </div>
  );
}

export default App;
