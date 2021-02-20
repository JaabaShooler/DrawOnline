import React from 'react';
import Canvas from "./canvas";
import ToolBar from "./toolBar";
import '../../sass/workSpace.sass'
import MenuBar from "./menuBar";

const WorkSpace = () => {
    return (
        <div className="main">
            <Canvas />
            <ToolBar />
            <MenuBar />
        </div>
    );
};

export default WorkSpace;