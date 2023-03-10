import React from 'react'
import { NavBar } from './Navbar'


export function Survey(props) {
    window.scrollTo(0, 0);
        
    return (
    <div className='homePage split-color' >
        <NavBar handleClickHome={props.handleClickHome} handleClickSurvey={props.handleClickSurvey} handleClickAbout={props.handleClickAbout} />
        <div className="container">
            <div className="spacer"></div>
            <div className='row'>
                <h1 className='about-title'>Take surveys, earn money to buy <span className='pink'>Emergency Contraception.</span></h1>
            </div>
            <div className='half-spacer'/>
            <div className='row'>
                <p className='descriptive-text col-6'>  Our solution is to promote low-cost EC in advance as shelf medicine and provide fundraising opportunities like surveys. By changing from a reactive to a proactive mindset, you no longer have to worry about cost, time efficiency, privacy, and transportation. </p>
            </div>
            <div className='row'>
                <img className="image-fluid" src="./img/Group 34.png" alt="person taking survey"/>

            </div>
        </div>
        <div className="hl"/>
        <div className='spacer'/>
        <div className='survey-section'>
            <div className='container'>
                <p className="section-header">Surveys</p>
                <p className="descriptive-text">You can earn points by taking the surveys linked on our website. By redeeming these points, you can get Emergency contraceptives for free!</p>
            </div>
            <div className='container'>
                <div className='half-spacer'/>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>Survey 1</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Student Career: Company Name</h6>
                        <div className='pull-right mx-3'>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3riM_vz6r9ao-a4pyzjN2MVfui641NdYF9PeZQPqkGyXGaA/viewform" class="card-link btn btn-outline-danger align-right">Take this survey</a>
                        </div>
                        
                    </div>
                </div>
                <div className='half-spacer'/>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>Survey 2</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Student Lifestyle: Company name</h6>
                        <div className='pull-right mx-3'>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdyGiw9pWTaUH2tUttLXTB4BhEwkAJgbunt1H3lEnQEf_QhSQ/viewform" class="card-link btn btn-outline-danger align-right">Take this survey</a>
                        </div>
                    </div>
                </div>
                <div className='half-spacer'/>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>Survey 3: Placeholder</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <div className='pull-right mx-3'>
                            <a href="https://www.google.com" class="card-link btn btn-outline-danger align-right">Take this survey</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 );
}
