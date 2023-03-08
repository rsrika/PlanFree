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
                    <div className="half-spacer"/>
                    <p className='descriptive-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id enim vel nunc aliquet congue. Nulla sit amet laoreet lacus. More lorem ipsum text here. 
                    </p>
                </div>
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
                    <div className='mx-auto col-4'>
                        <img className="mx-auto d-block p-5" src="./img/Roshni.jpg" alt="Roshni Srikanth"/>
                        <p className='descriptive-text'>Roshni Srikanth</p>
                    </div>
                    <div className='mx-auto col-4'>
                        <img className="mx-auto d-block p-5" src="./img/Gargi.jpeg" alt="Gargi Panatula"/>
                    </div>
                    <div className='col-4'>
                        <img className="mx-auto d-block p-5" src="./img/Miyu.jpeg" alt="Miyu Ozawa"/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <img className="mx-auto d-block p-5" src="./img/James.jpeg" alt="James Zarowski"/>
                    </div>
                    <div className='col-4'>
                        <img className="mx-auto d-block p-5" src="./img/Cindy.jpeg" alt="Cindy Chen"/>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
 );
}
