import React from 'react';
import toolsState from "../../store/toolsState";

const SettingsBar = () => {

    const val = 0;


    return (
        <div>
            <hr/>
            <div className="main__tool-bar__settings">
                <label htmlFor="width-setting">Width of line</label>
                <input
                    id="width-setting"
                    type="range"
                    min="-1" max="100" step="1"
                    onChange={ e => toolsState.setLineWidth(e.target.value)}
                    defaultValue={val}/>
                <span>{val}</span>
            </div>
            <div className="main__tool-bar__settings">
                <label htmlFor="stroke-color">Stroke color</label>
                <input
                    type="color"
                    id="stroke-color"
                    onChange={ e => toolsState.setStrokeColor(e.target.value)}/>
                    <span> </span>
            </div>
        </div>
);
};

export default SettingsBar;