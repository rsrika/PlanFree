import React from 'react'
import { NavBar } from './Navbar'


export function About(props) {
    window.scrollTo(0, 0);
        
    return (
    <div className='homePage split-color' >
        <NavBar handleClickHome={props.handleClickHome} handleClickSurvey={props.handleClickSurvey} handleClickAbout={props.handleClickAbout} />
        <div>This is the about page</div>
    </div>
 );
}
