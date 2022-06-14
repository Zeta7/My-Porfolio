import React from 'react';
import './IconMenu_style.css';

let ant_view = false;

const IconMenu = ({ viewMenu, setViewMenu }) => {
    const clickMenu = () => {
        setViewMenu(!viewMenu);
    };

    if (viewMenu === ant_view) {
        ant_view = viewMenu;
    } else {
        ant_view = viewMenu;
        let toggleMenu = document.querySelector('.toggleMenu');
        toggleMenu.classList.toggle('active');
    }

    return (
        <div className="toggleMenu" onClick={clickMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default IconMenu;
