import React from 'react';
import './Home_style.css';

const Home = ({ langJson }) => {
    return (
        <div
            className="container-home"
            id="home"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
        >
            <span className="un">
                <p>{langJson[0].home.p}</p>
            </span>
            <h2 className="h2-1">{langJson[0].home.h2_1}</h2>
            <h2 className="h2-2">{langJson[0].home.h2_2}</h2>
            <div className="parf">
                <p>
                    {langJson[0].home.parrafo.p}{' '}
                    <span>{langJson[0].home.parrafo.span}</span>.
                </p>
            </div>
            <button>{langJson[0].home.button}</button>
        </div>
    );
};

export default Home;
