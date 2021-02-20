import React from 'react';

const MenuBar = () => {
    return (
        <div className="main__menu-bar">
            <button className="main__menu-bar__btn undo "><span>undo</span></button>
            <button className="main__menu-bar__btn next "><span>next</span></button>
            <button className="main__menu-bar__btn save"><span>save</span></button>
        </div>
    );
};

export default MenuBar;