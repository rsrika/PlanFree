import React from 'react'
import { NavBar } from './Navbar'


export function About(props) {
    window.scrollTo(0, 0);
        
    return (
    <div className='Aboutpage' >
        <NavBar handleClickHome={props.handleClickHome} handleClickSurvey={props.handleClickSurvey} handleClickAbout={props.handleClickAbout} />
        <div className='container'>
            <div className="spacer"></div>
            <div className='row'>
                <div className='col'>
                    <h1 className="about-title">Plan Free is <span className="blue">building bridges</span> and <span className="pink">making impact.</span></h1>
                </div>
                <div className='col'>
                    <br/>
                    <p className='descriptive-text mx-5'>
                    Students often experience emotions such as shame, guilt, and anxiety when purchasing solutions. This deters many people from wanting to go out in public to purchase EC. Additionally, while there are alternative methods to purchasing the product in-person at full-price, they often do not have the time to research options. Plan Free aims to bridge that gap by easing access to EC's. 
                    </p>
                </div>
                <div className='spacer'/>
            </div>
            <div className='row'>
                <div className='container'>
                    <img className="mx-auto d-block" src="./img/Group 32.png" alt="drawing of two medical professionals with a bottle of pills in between"/>
                </div>
            </div>
        </div>
        <div className="hl"/>
        <div className='spacer'/>
        <div className='team-section'>
            <div className='container'>
                <p className="section-header">Meet the team</p>
                <p className="descriptive-text">Get to know the passionate group of people making things happen at Plan Free.</p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='mx-auto col-4 text-center'>
                        <img className="mx-auto d-block p-5" src="./img/Roshni.jpg" alt="Roshni Srikanth"/>
                        <p className='mx-auto d-block descriptive-text'>Roshni Srikanth</p>
                    </div>
                    <div className='mx-auto col-4 text-center'>
                        <img className="mx-auto d-block p-5" src="./img/Gargi.jpeg" alt="Gargi Panatula"/>
                        <p className='mx-auto d-block descriptive-text'>Gargi Panatula</p>
                    </div>
                    <div className='mx-auto col-4 text-center'>
                        <img className="mx-auto d-block p-5" src="./img/Miyu.jpeg" alt="Miyu Ozawa"/>
                        <p className='mx-auto d-block descriptive-text'>Miyu Ozawa</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-center'>
                        <img className="mx-auto d-block p-5 image-fluid" src="./img/James.jpeg" alt="James Zagorski"/>
                        <p className='mx-auto d-block descriptive-text'>James Zagorski</p>
                    </div>
                    <div className='col text-center'>
                        <img className="mx-auto d-block p-5 image-fluid" src="./img/Cindy.jpeg" alt="Cindy Chen"/>
                        <p className='mx-auto d-block descriptive-text'>Cindy Chen</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
 );
}
