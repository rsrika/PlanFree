import React from 'react'
import { NavBar } from './Navbar'


export function Home(props) {
    window.scrollTo(0, 0);
        
    return (
    <div className='homePage split-color' >
        <NavBar handleClickHome={props.handleClickHome} handleClickSurvey={props.handleClickSurvey} handleClickAbout={props.handleClickAbout} />
        <div className='container'>
            <div className="spacer"></div>
            <div className='row'>
                <div className='col col-text'>
                    <div className='row title'>
                        <span className="normal-title">KNOW MORE ABOUT</span>
                        <br/>
                        <span className="emergency">EMERGENCY</span>
                        <br/>
                        <span className="contraceptives">CONTRACEPTIVES</span>
                    </div>
                    <br/>
                    <div className='row'>
                        <p className="descriptive-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id enim vel nunc aliquet congue. Nulla sit amet laoreet lacus. Suspendisse malesuada arcu pretium, convallis elit ut, malesuada ex. Nunc quis pulvinar ante
                        </p>
                    </div>
                </div>
                <div className='col col-text'>
                    <img className="image-home" src="./img/Group 31.png" alt="drawing of woman in lab coat leaning against a calendar" />
                </div>
            </div>
        </div>
        <div className="hl"/>
        <br/>
        <div className="map-section">
            <div className='container'>
                <p className="section-header">Immediate Resources</p>
                <p className="descriptive-text">Where to go if you need immediate help on campus</p>
            </div>
            <div className='container'>
                {/* MAP GOES HERE @GARGI */}
            </div>
            
        </div>
    </div>
 );
}
