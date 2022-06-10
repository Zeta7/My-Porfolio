import React from 'react';
import './Contact_style.css';

const Contact = () => {
    return (
        <div
            className="container-contact"
            id="contact"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
        >
            <div className="cont-sub-t" data-aos="fade-left">
                <h2>Get In Touch</h2>
            </div>
            <div className="cont-contact">
                <p>
                    My inbox is always open. Whether you have a question or need
                    my help.
                </p>
                <a href="mailto:edson.meza.o1197@outlook.es">Say hello</a>
            </div>
        </div>
    );
};

export default Contact;
