import React from 'react';
import './About_style.css';
import img_edson from '../../img/edson_White.png';

const About = ({ langJson }) => {
    return (
        <div className="container-about-dad" id="about">
            <div className="cont-title-about" data-aos="fade-right">
                <h2>
                    <span>
                        <i className="fa-solid fa-caret-right" />
                    </span>{' '}
                    {langJson[0].about.h2}
                </h2>
            </div>
            <div
                className="cont-body-about"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
            >
                <div className="cont-about-text">
                    <p>
                        {langJson[0].about.p1}
                        <br />
                        {langJson[0].about.p2}
                        <br />
                        <br />
                        {langJson[0].about.p3}
                        <br />
                        <br />
                        {langJson[0].about.p4}
                    </p>
                    <div className="cont-list-technologies">
                        <ul>
                            <li>
                                <i className="fa-solid fa-check" />
                                {langJson[0].about.ul.li_1}
                            </li>
                            <li>
                                <i className="fa-solid fa-check" />
                                {langJson[0].about.ul.li_2}
                            </li>
                            <li>
                                <i className="fa-solid fa-check" />
                                {langJson[0].about.ul.li_3}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <i className="fa-solid fa-check" />
                                {langJson[0].about.ul.li_4}
                            </li>
                            <li>
                                <i className="fa-solid fa-check" />
                                {langJson[0].about.ul.li_5}
                            </li>
                            <li>
                                <i className="fa-solid fa-check" />
                                {langJson[0].about.ul.li_6}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cont-about-img">
                    <div className="line-img">
                        <img src={img_edson} alt="Edson Meza" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
