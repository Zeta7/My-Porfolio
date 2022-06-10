import React from 'react';
import './Work_style.css';
import e_commerce from '../../img/works_img/ecommerce.png';
import pokedex from '../../img/works_img/poke.png';
import facebook from '../../img/works_img/clon_f.png';

const Work = () => {
    return (
        <>
            <div className="container-work" id="work">
                <div className="cont-sub-titu" data-aos="fade-right">
                    <h2>
                        <span>
                            <i className="fa-solid fa-caret-right" />
                        </span>{' '}
                        Some Things I’ve Built
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
                    >
                        <img src={e_commerce} alt="E-commerce" />
                    </a>
                    <div className="data-img">
                        <p className="text">Featured Project</p>
                        <h4>E-Commerce</h4>
                        <div className="info-img">
                            {/**
                         Aplicacion web para tiendas virtuales, con la funcionalidad registros de usuarios, resgistros y promocion de productos para la clientela.
                         */}
                            <p>
                                Web application for virtual stores, with user
                                registration functionality, registration and
                                promotion of products for customers.
                            </p>
                        </div>
                        <div className="info-tecnologis">
                            <p>React</p>
                            <p>Node</p>
                            <p>Postgres</p>
                            <p>Git</p>
                        </div>
                        <div className="cont-icons-link">
                            <a
                                href="https://github.com/Zeta7/E-comerce.git"
                                target="_blank"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a
                                href="https://bucolic-kringle-65dcf2.netlify.app/"
                                target="_blank"
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
                    >
                        <img src={pokedex} alt="E-commerce" />
                    </a>
                    <div className="data-img-2">
                        <p className="text">Featured Project</p>
                        <h4>Pokedex</h4>
                        <div className="info-img">
                            {/**
                         Pagina front que busca un Pokémon por su nombre o usando su número de la Pokédex Nacional.
                         */}
                            <p>
                                Front page that searches for a Pokémon by name
                                or using its National Pokédex number.
                            </p>
                        </div>
                        <div className="info-tecnologis">
                            <p>React</p>
                            <p>css</p>
                            <p>npm</p>
                            <p>Git</p>
                        </div>
                        <div className="cont-icons-link">
                            <a
                                href="https://github.com/Zeta7/Pokedex.git"
                                target="_blank"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a
                                href="https://jade-lamington-de7d7b.netlify.app/#/"
                                target="_blank"
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
                        <p className="text">Featured Project</p>
                        <h4>Post - clon facebook</h4>
                        <div className="info-img">
                            {/**
                         Aplicacion we que puedes registrar un usuario y publicar un post y realizar comentarios de los post de otros usuarios.
                         */}
                            <p>
                                We application that you can register a user and
                                publish a post and make comments on the posts of
                                other users.
                            </p>
                        </div>
                        <div className="info-tecnologis">
                            <p>React</p>
                            <p>Node</p>
                            <p>Postgres</p>
                            <p>Git</p>
                        </div>
                        <div className="cont-icons-link">
                            <a
                                href="https://github.com/Zeta7/Academlo-Meals.git"
                                target="_blank"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="#" target="_blank">
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
