import React from 'react';
import './Contact_style.css';

const Contact = ({ langJson }) => {
    return (
        <div
            className="container-contact"
            id="contact"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
        >
            <div className="cont-sub-t" data-aos="fade-left">
                <h2>{langJson[0].contact.h2}</h2>
            </div>
            <div className="cont-contact">
                <p>{langJson[0].contact.p}</p>
                <a href="mailto:edson.meza.o1197@outlook.es">
                    {langJson[0].contact.button}
                </a>
            </div>
        </div>
    );
};

export default Contact;
