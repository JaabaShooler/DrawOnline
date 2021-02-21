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

    setStrokeColor(color){
        this.tools.strokeColor = color
    }

    setLineWidth(width){
        this.tools.lineWidth = width
    }

    getLineWidth(){
        return this.tools.lineWidth
    }
}

export default new ToolsState();