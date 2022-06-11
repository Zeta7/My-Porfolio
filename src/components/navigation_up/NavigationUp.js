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
    return (
        <div className="container-navigationUp">
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
                    <a href="#About">
                        <span>
                            <i className="fa-solid fa-caret-right" />
                        </span>
                        {langJson[0].menu.nav.li_1}
                    </a>
                </li>
                <li>
                    <a href="#Experience">
                        <span>
                            <i className="fa-solid fa-caret-right" />
                        </span>
                        {langJson[0].menu.nav.li_2}
                    </a>
                </li>
                <li>
                    <a href="#Work">
                        <span>
                            <i className="fa-solid fa-caret-right" />
                        </span>
                        {langJson[0].menu.nav.li_3}
                    </a>
                </li>
                <li>
                    <a href="#Contact">
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
