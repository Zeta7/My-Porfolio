import React from 'react';
import './Footer_style.css';

const Footer = ({ langJson }) => {
    return (
        <div className="container-footer">
            <a href="https://github.com/Zeta7" target="_blank" rel="noreferrer">
                <h2>{langJson[0].footer}</h2>
                <p>2022</p>
            </a>
        </div>
    );
};

export default Footer;
