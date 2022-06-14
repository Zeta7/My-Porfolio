import React from 'react';
import { useEffect } from 'react';
import './IconMenu_style.css';

const IconMenu = ({ viewMenu, setViewMenu }) => {
    const clickMenu = () => {
        setViewMenu(!viewMenu);
    };

    useEffect(() => {
        let toggleMenu = document.querySelector('.toggleMenu');
        toggleMenu.classList.toggle('active');
    }, [!viewMenu]);

    return (
        <div className="toggleMenu" onClick={clickMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default IconMenu;
