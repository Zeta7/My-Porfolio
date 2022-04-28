import React from 'react';
import './About_style.css';
import img_edson from '../../img/edson_White.png';

const About = () => {
    return (
        <div className='container-about-dad'>
            <div className='cont-title-about'>
                
                <h2>
                    <span>
                        <i className="fa-solid fa-caret-right"/>
                    </span> About Me</h2>
            </div>
            <div className='cont-body-about'>
                <div className='cont-about-text'>
                    <p>
                    Hello! My name is Edson Meza. I love developing applications that live on the internet.<br/>
                    My interest in web development started in 2021, when I decided to enter the world of programming.<br/><br/>
                    My main focus these days is to create accessible, exceptional and inclusive products for a variety of clients.
                    <br/><br/>
                    Here are some technologies I've been working on recently:
                    </p>
                    <div className='cont-list-technologies'>
                        <ul>
                            <li>
                                <i className="fa-solid fa-check"/>
                                JavaScript (ES6+)
                            </li>
                            <li>
                                <i className="fa-solid fa-check"/>
                                HTML 5
                            </li>
                            <li>
                                <i className="fa-solid fa-check"/>    
                                CSS 3
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <i className="fa-solid fa-check"/>
                                React.js
                            </li>
                            <li>
                                <i className="fa-solid fa-check"/>
                                Node.js
                            </li>
                            <li>
                                <i className="fa-solid fa-check"/>
                                PostgreSQL
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='cont-about-img'>
                    <div className='line-img'>
                        <img src={img_edson} alt='Edson Meza'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;