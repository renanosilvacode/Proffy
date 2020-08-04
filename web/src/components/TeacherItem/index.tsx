import React from 'react';


import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/25445892?s=460&u=0aedc304acda64d2f3d0c09ccb6519dc5ba2ffd9&v=4" alt="Renan Oliveira"/>
                <div>
                    <strong>Renan Oliveira</strong>
                    <span>Chemistry</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                <br/><br/>
                Commodi mollitia voluptatibus suscipit nisi odit beatae, vitae minus laborum laudantium. Blanditiis nemo assumenda iure in tempore totam atque laudantium neque provident.
            </p>
            <footer>
                <p>
                    Price/Hour
                    <strong>US$ 50.00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Get in touch
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;