
import React from 'react';
import {Link} from'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Your platform for online studies</h2>
                </div>
                
                <img src={landingImg} alt="Studies plataform" id="" className="hero-image"/>
            
                <div id="" className="buttons-container">
                    <Link to="/study" id="" className="study">
                        <img src={studyIcon} alt=""/>
                        Study
                    </Link>    
                    <Link to="/give-classes" id="" className="give-classes">
                        <img src={giveClassesIcon} alt=""/>
                        Teach
                    </Link>    
                </div>
                <span className="total-connections">
                    More then 200 connections <img src={purpleHeartIcon} alt="Purple heart"/>
                </span>  
            </div>
        </div>
    )
}

export default Landing;