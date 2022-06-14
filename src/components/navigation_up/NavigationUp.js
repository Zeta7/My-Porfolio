import React from 'react';
import { useState } from 'react';
import { Logo } from '../';
import './NavigationUp_style.css';
import IconMenu from './icon_menu/IconMenu';
import IconSpain from '../../img/s.png';
import IconUsa from '../../img/eu.png';

const NavigationUp = ({ language, setLanguage, langJson }) => {
    const Scr_width = window.screen.width;
    let valor_bol = true;
    if (Scr_width <= 768) {
        valor_bol = false;
    } else {
        valor_bol = true;
    }
    const [viewMenu, setViewMenu] = useState(valor_bol);

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

    //view menu
    const ViewMenu = () => {
        setViewMenu(!viewMenu);
    };
    //estamos haciendo el cambio del menu
    //hasta aqui es lo revertible
    return (
        <div
            className="container-navigationUp"
            id="nav-principal"
            data-aos="fade-left"
        >
            <Logo />

            <label id="check" className="view-menu" onClick={ViewMenu}>
                <IconMenu viewMenu={viewMenu} setViewMenu={setViewMenu} />
            </label>

            <div className="container-language">
                <img
                    src={language ? IconSpain : IconUsa}
                    onClick={ClickLang}
                    alt="logo language"
                />
            </div>

            {viewMenu && (
                <nav>
                    <li>
                        <a href="#about" onClick={valor_bol ? {} : ViewMenu}>
                            <span>
                                <i className="fa-solid fa-caret-right" />
                            </span>
                            {langJson[0].menu.nav.li_1}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            for="check"
                            onClick={valor_bol ? {} : ViewMenu}
                        >
                            <span>
                                <i className="fa-solid fa-caret-right" />
                            </span>
                            {langJson[0].menu.nav.li_2}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#work"
                            for="check"
                            onClick={valor_bol ? {} : ViewMenu}
                        >
                            <span>
                                <i className="fa-solid fa-caret-right" />
                            </span>
                            {langJson[0].menu.nav.li_3}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            for="check"
                            onClick={valor_bol ? {} : ViewMenu}
                        >
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
            )}
        </div>
    );
};

export default NavigationUp;
