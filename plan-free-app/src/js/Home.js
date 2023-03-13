import React from 'react'
import { NavBar } from './Navbar'
import { Map } from './Map.js'


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
                    {/* <div className='row'>
                        <p className="descriptive-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id enim vel nunc aliquet congue. Nulla sit amet laoreet lacus. Suspendisse malesuada arcu pretium, convallis elit ut, malesuada ex. Nunc quis pulvinar ante
                        </p>
                    </div> */}
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
                <p className="descriptive-text">Where to go if you need immediate help on campus.</p>
            </div>
            <div className='container'>
                <div className='half-spacer'/>
                <div className={'leaflet-container'}>
                    <Map></Map>
                </div>
            </div>
            
        </div>
        <div className="hl"/>
        <br/>
        <div className="map-section">
            <div className='container'>
                <p className="section-header">Frequently Asked Questions</p>
            </div>
            <br/>
            <br/>   
            <div className='container'>
                <div className="question">
                    <h2 className="blue">Do I need a prescription to get them?</h2>
                    <p className='descriptive-text'>Legally, in Washington state,You can get some types of birth control – like condoms, spermicide, the vaginal sponge, and emergency contraception pills – at a pharmacy, drug store, or online without a prescription. Some common places to get these are places like CVS, Bartells, or Walmart. There are also a number of On-Campus resources if you are a student at the UW. However, it is important to note that <span className="pink">regardless of the regulation, some pharmacies still require a doctor's prescription.</span></p>
                </div>
                <div className="question">
                    <h2 className="blue">What are emergency contraceptives (ECs)?</h2>
                    <p className='descriptive-text'>Emergency contraceptives are birth control methods that can be used after unprotected sexual intercourse or if other contraceptive methods have failed. These methods include the emergency contraceptive pill (also known as the morning-after pill), which is taken orally, and copper intrauterine devices (IUDs), which are inserted into the uterus by a healthcare provider. Emergency contraceptives work by preventing ovulation or fertilization of the egg, or by preventing the implantation of a fertilized egg in the uterus. It is important to note that emergency contraceptives should not be used as a regular form of contraception, as they are less effective than other methods and may have side effects.</p>
                </div>
                <br/>
                <div className="question">
                    <h2 className="blue">Can I use the emergency contraceptives as my primary birth control methods?</h2>
                    <p className='descriptive-text'> <span className="pink">No, emergency contraceptives should not be used as your primary method of birth control. </span>Emergency contraceptives are designed to be used as a backup option to prevent pregnancy after unprotected sex or contraceptive failure, such as a condom breaking or missing birth control pills. Emergency contraceptives do not protect against sexually transmitted infections (STIs), while other methods of contraception, such as condoms, can help reduce the risk of STIs. Frequent use of emergency contraceptives can lead to hormonal imbalances, irregular periods, and other side effects. Long-term use of these contraceptives can also increase the risk of ectopic pregnancy, which is a potentially life-threatening condition where the fertilized egg implants outside the uterus.</p>
                </div>
                <br/>
                <div className="question">
                    <h2 className="blue">What are the effects of EC's?</h2>
                    <p className='descriptive-text'>It's important to note that <span className="pink">emergency contraceptives are not 100% effective at preventing pregnancy.</span> The effectiveness varies depending on the type of emergency contraceptive and how soon it is taken after unprotected sex. In general, emergency contraceptive pills can be up to 89% effective at preventing pregnancy <span className="pink"> if taken within the first 72 hours after unprotected sex.</span></p>
                </div>
                
            </div>
            
        </div>
    </div>
 );
}
