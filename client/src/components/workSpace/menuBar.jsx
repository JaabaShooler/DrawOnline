import React from 'react';
import canvasState from "../../store/canvasState";

const MenuBar = () => {
    return (
        <div className="main__menu-bar">
            <button className="main__menu-bar__btn undo " onClick={() => canvasState.undo() }><span>undo</span></button>
            <button className="main__menu-bar__btn next " onClick={() => canvasState.redo() }><span>next</span></button>
            <button className="main__menu-bar__btn save"><span>save</span></button>
        </div>
    );
};

export default MenuBar;