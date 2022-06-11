import React from 'react';
import './SocialBlock_style.css';

const SocialBlock = () => {
    return (
        <div className="container-social-block" data-aos="fade-up">
            <div className="cont-s-b-1">
                <div className="cont-s-b-2">
                    <a
                        href="https://github.com/Zeta7"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="www.linkedin.com/in/edsonjoan"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialBlock;
