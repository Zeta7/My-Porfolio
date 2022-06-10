import React from 'react';
import { Logo } from '../';
import './NavigationUp_style.css';
import IconMenu from './icon_menu/IconMenu';
import IconSpain from '../../img/s.png';
import IconUsa from '../../img/eu.png';

const NavigationUp = ({ language, setLanguage }) => {
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

            <nav>
                <div className="container-language">
                    <img
                        src={language ? IconSpain : IconUsa}
                        onClick={ClickLang}
                        alt="logo language"
                    />
                </div>

                <li>
                    <a href="#About">
                        <span>
                            <i className="fa-solid fa-caret-right" />
                        </span>
                        About
                    </a>
                </li>
                <li>
                    <a href="#Experience">
                        <span>
                            <i className="fa-solid fa-caret-right" />
                        </span>
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#Work">
                        <span>
                            <i className="fa-solid fa-caret-right" />
                        </span>
                        Work
                    </a>
                </li>
                <li>
                    <a href="#Contact">
                        <span>
                            <i className="fa-solid fa-caret-right" />
                        </span>
                        Contact
                    </a>
                </li>
                <button>Resume</button>
                <div className="container-correo">
                    <p>edson.meza.o1197@outlook.es</p>
                </div>
            </nav>
        </div>
    );
};

export default NavigationUp;
