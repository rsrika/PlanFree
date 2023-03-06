import React from 'react'

export function NavBar(props) {

    let navImg = () => {
        
        return (<img id="nav-img" src="/img/plan_free_logo.png" alt="Plan Free Logo" onClick={() => { props.handleClickHome()}}></img>);
        
    }

    
    return (
        <div className="nav">
            <nav id="examples">
                <div className="nav-sig">
                    <div className="signature">
                        {navImg()}
                    </div>
                </div>
                <div className="links">
                    <ul className='example'>
                        <li>
                            <button className="fs-5 navlink home hover1 hover1-1"
                                onClick={
                                    () => {
                                        props.handleClickHome()
                                    }
                            }>Home</button>
                        </li>
                        <li>
                            <button className="fs-5 navlink about hover2 hover2-1"
                                onClick={
                                    () => {
                                        props.handleClickAbout()
                                    }
                            }>About</button>
                        </li>
                        <li>
                            <button className="fs-5 navlink survey hover3 hover3-1"
                                onClick={
                                    () => {
                                        props.handleClickSurvey()
                                    }
                            }>Surveys</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
