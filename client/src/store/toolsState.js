import {makeAutoObservable} from 'mobx'

class ToolsState {
    tools = null;
    constructor() {
        makeAutoObservable(this)
    }

    setTools(tool){
        this.tools = tool
    }

    setFillColor(color){
        this.tools.fillColor = color
    }

    setFillColor(color){
        this.tools.strokeColor = color
    }

    setFillColor(width){
        this.tools.lineWidth = width
    }
}

export default new ToolsState();