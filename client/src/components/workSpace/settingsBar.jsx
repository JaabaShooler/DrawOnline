import React from 'react';

const SettingsBar = () => {
    return (
        <div>
            <hr/>
            <div className="main__tool-bar__settings">
                <label htmlFor="width-setting">Width of line</label>
                <input id="width-setting" type="range" min="0" max="100" step="1" defaultValue={20}/>
                <span>20</span>
            </div>
        </div>
);
};

export default SettingsBar;