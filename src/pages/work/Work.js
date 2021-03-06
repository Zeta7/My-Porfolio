import React from 'react';
import './Work_style.css';
import e_commerce from '../../img/works_img/ecommerce.png';
import pokedex from '../../img/works_img/poke.png';
import facebook from '../../img/works_img/clon_f.png';

const Work = ({ langJson }) => {
    return (
        <>
            <div className="container-work" id="work">
                <div className="cont-sub-titu" data-aos="fade-right">
                    <h2>
                        <span>
                            <i className="fa-solid fa-caret-right" />
                        </span>{' '}
                        {langJson[0].work.h2}
                    </h2>
                </div>
                <div
                    className="sub-cont-work"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                >
                    <a
                        className="link-img"
                        href="https://bucolic-kringle-65dcf2.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={e_commerce} alt="E-commerce" />
                    </a>
                    <div className="data-img">
                        <p className="text">{langJson[0].work.p}</p>
                        <h4>{langJson[0].work.div_1.h4}</h4>
                        <div className="info-img">
                            <p>{langJson[0].work.div_1.p}</p>
                        </div>
                        <div className="info-tecnologis">
                            <p>{langJson[0].work.div_1.tecnologis._1}</p>
                            <p>{langJson[0].work.div_1.tecnologis._2}</p>
                            <p>{langJson[0].work.div_1.tecnologis._3}</p>
                            <p>{langJson[0].work.div_1.tecnologis._4}</p>
                        </div>
                        <div className="cont-icons-link">
                            <a
                                href="https://github.com/Zeta7/E-comerce.git"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a
                                href="https://bucolic-kringle-65dcf2.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square" />
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className="sub-cont-work-2"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                >
                    <a
                        className="link-img"
                        href="https://jade-lamington-de7d7b.netlify.app/#/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={pokedex} alt="E-commerce" />
                    </a>
                    <div className="data-img-2">
                        <p className="text">{langJson[0].work.p}</p>
                        <h4>{langJson[0].work.div_2.h4}</h4>
                        <div className="info-img">
                            <p>{langJson[0].work.div_2.p}</p>
                        </div>
                        <div className="info-tecnologis">
                            <p>{langJson[0].work.div_2.tecnologis._1}</p>
                            <p>{langJson[0].work.div_2.tecnologis._2}</p>
                            <p>{langJson[0].work.div_2.tecnologis._3}</p>
                            <p>{langJson[0].work.div_2.tecnologis._4}</p>
                        </div>
                        <div className="cont-icons-link">
                            <a
                                href="https://github.com/Zeta7/Pokedex.git"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a
                                href="https://jade-lamington-de7d7b.netlify.app/#/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square" />
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className="sub-cont-work"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                >
                    <a className="link-img" href=" " target="_blank">
                        <img src={facebook} alt="E-commerce" />
                    </a>
                    <div className="data-img">
                        <p className="text">{langJson[0].work.p}</p>
                        <h4>{langJson[0].work.div_3.h4}</h4>
                        <div className="info-img">
                            <p>{langJson[0].work.div_3.p}</p>
                        </div>
                        <div className="info-tecnologis">
                            <p>{langJson[0].work.div_3.tecnologis._1}</p>
                            <p>{langJson[0].work.div_3.tecnologis._2}</p>
                            <p>{langJson[0].work.div_3.tecnologis._3}</p>
                            <p>{langJson[0].work.div_3.tecnologis._4}</p>
                        </div>
                        <div className="cont-icons-link">
                            <a
                                href="https://github.com/Zeta7/Academlo-Meals.git"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a
                                href="https://jade-lamington-de7d7b.netlify.app/#/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;
