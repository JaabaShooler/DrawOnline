import React from 'react';
import toolsState from "../../store/toolsState";
import Pencil from "../../tools/Pencil";
import Rect from "../../tools/Rect";
import Circle from "../../tools/Circle";
import Line from "../../tools/Line";
import Eraser from "../../tools/Eraser"
import canvasState from '../../store/canvasState'
import SettingsBar from "./settingsBar";

const ToolBar = () => {

    const changeColor = (e) => {
        toolsState.setFillColor(e.target.value);
        toolsState.setStrokeColor(e.target.value)
    }


    return (
        <div className="main__tool-bar">
            <button
                className="main__tool-bar__btn pencil"
                onClick={() => toolsState.setTools(new Pencil(canvasState.canvas))}><span>pencil</span></button>
            <button
                className="main__tool-bar__btn square"
                onClick={() => toolsState.setTools(new Rect(canvasState.canvas))}><span>square</span></button>
            <button
                className="main__tool-bar__btn circle"
                onClick={() => toolsState.setTools(new Circle(canvasState.canvas))}><span>circle</span></button>
            <button
                className="main__tool-bar__btn line"
                onClick={() => toolsState.setTools(new Line(canvasState.canvas))}><span>line</span></button>
            <button
                className="main__tool-bar__btn eraser"
                onClick={() => toolsState.setTools(new Eraser(canvasState.canvas))}><span>erase</span></button>
            <input  onChange={ e => changeColor(e)} type="color"/>
            <SettingsBar />
        </div>
    );
}

export default ToolBar;