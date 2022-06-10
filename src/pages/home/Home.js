import React from 'react';
import './Home_style.css';

const Home = () => {
    return (
        <div
            className="container-home"
            id="home"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
        >
            <span className="un">
                <p>Hi, my name is</p>
            </span>
            <h2 className="h2-1">Edson Meza</h2>
            <h2 className="h2-2">Web application development.</h2>
            <div className="parf">
                <p>
                    I'm a systems engineer specializes in creating (and
                    occasionally designing) exceptional{' '}
                    <span>web applications</span>.
                </p>
            </div>
            <button>Contact me !</button>
        </div>
    );
};

export default Home;
