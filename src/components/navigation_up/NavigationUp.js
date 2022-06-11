import React from 'react';
import { Logo } from '../';
import './NavigationUp_style.css';
import IconMenu from './icon_menu/IconMenu';
import IconSpain from '../../img/s.png';
import IconUsa from '../../img/eu.png';

const NavigationUp = ({ language, setLanguage, langJson }) => {
    const ClickLang = (e) => {
        e.preventDefault();
        setLanguage(!language);
    };

    //al  hacer scroll aparece y desaparece el menu
    let ubicacioPrincipal = window.pageYOffset;
    window.onscroll = function () {
        let Desplazamiento = window.pageYOffset;
        if (ubicacioPrincipal >= Desplazamiento) {
            document.getElementById('nav-principal').style.top = '0';
        } else {
            document.getElementById('nav-principal').style.top = '-100px';
        }
        ubicacioPrincipal = Desplazamiento;
    };
    return (
        <div className="container-navigationUp" id="nav-principal">
            <Logo />

            <input type="checkbox" id="check" />

            <label for="check" className="view-menu">
                <IconMenu />
            </label>

            <div className="container-language">
                <img
                    src={language ? IconSpain : IconUsa}
                    onClick={ClickLang}
                    alt="logo language"
                />
            </div>
            <nav>
                <li>
                    <a href="#about">
                        <span>
                            <i className="fa-solid fa-caret-right" />
                        </span>
                        {langJson[0].menu.nav.li_1}
                    </a>
                </li>
                <li>
                    <a href="#skills">
                        <span>
                            <i className="fa-solid fa-caret-right" />
                        </span>
                        {langJson[0].menu.nav.li_2}
                    </a>
                </li>
                <li>
                    <a href="#work">
                        <span>
                            <i className="fa-solid fa-caret-right" />
                        </span>
                        {langJson[0].menu.nav.li_3}
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <span>
                            <i className="fa-solid fa-caret-right" />
                        </span>
                        {langJson[0].menu.nav.li_4}
                    </a>
                </li>
                <a
                    className="button"
                    href={langJson[0].cv}
                    target="_blank"
                    rel="noreferrer"
                >
                    {langJson[0].menu.button}
                </a>
                <div className="container-correo">
                    <p>{langJson[0].menu.p}</p>
                </div>
            </nav>
        </div>
    );
};

export default NavigationUp;
