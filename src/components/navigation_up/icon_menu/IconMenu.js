import React from 'react';
import './IconMenu_style.css';

const IconMenu = () => {

    const clickMenu = () =>{
        let toggleMenu = document.querySelector(".toggleMenu");
        toggleMenu.classList.toggle("active");
    }

    return (
        <div  className='toggleMenu'  onClick={clickMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default IconMenu;