import React from 'react';
import './EmailBlock_style.css';

const EmailBlock = () => {
    return (
        <div className="container-e-b-dad" data-aos="fade-down">
            <div className="cont-e-b-1">
                <div className="cont-e-b-2">
                    <a
                        href="https://www.facebook.com/edson.meza.3532/"
                        target="_blank"
                    >
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a
                        href="https://www.messenger.com/t/100013871988161/"
                        target="_blank"
                    >
                        <i className="fa-brands fa-facebook-messenger"></i>
                    </a>
                    <a
                        href="mailto:edson.meza.o1197@outlook.es"
                        target="_blank"
                    >
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EmailBlock;
