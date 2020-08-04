import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css'

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the teachers available.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Day of the Week</label>
                        <input type="text" id="week_day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hour</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>
            <main>
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
                            
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;