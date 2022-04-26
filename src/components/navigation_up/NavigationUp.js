import React from 'react';
import {Logo} from '../'
import './NavigationUp_style.css';
import IconMenu from './icon_menu/IconMenu';

const NavigationUp = () => {
    return (
        <div className='container-navigationUp'>
            <Logo/>

            <input type='checkbox' id='check'/>
            
            <label for='check' className='view-menu'>
                    <IconMenu />
            </label>

            <nav>
                <li>
                    <a>
                        <span><i className="fa-solid fa-caret-right"/></span>
                        About
                    </a>
                </li>
                <li>
                    <a>
                        <span><i className="fa-solid fa-caret-right"/></span>
                        Experience
                    </a>
                </li>
                <li>
                    <a>
                        <span><i className="fa-solid fa-caret-right"/></span>
                        Work
                    </a>
                </li>
                <li>
                    <a>
                        <span><i className="fa-solid fa-caret-right"/></span>
                        Contact
                    </a>
                </li>
                <button>
                    Resume
                </button>
                <div className='container-correo'>
                    <p>edon.meza.o1197@outlook.es</p>
                </div>
            </nav>
        </div>
    );
};

export default NavigationUp;