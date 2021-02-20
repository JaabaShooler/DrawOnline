export default class Tool{
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')
        this.destryoyEvents()
    }

    setColor(color){
        this.ctx.fillStyle = color
    }

    setStrokeColor(color){
        this.ctx.strokeStyle = color
    }

    setLineWidth(width){
        this.ctx.lineWidth = width
    }


    destryoyEvents(){
        this.canvas.onmousedown = null;
        this.canvas.onmouseup = null;
        this.canvas.onmousemove = null;
    }
}