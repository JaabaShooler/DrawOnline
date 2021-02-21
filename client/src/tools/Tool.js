export default class Tool{
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')
        this.destryoyEvents()
    }

    set fillColor(color){
        this.ctx.fillStyle = color
    }

    set strokeColor(color){
        this.ctx.strokeStyle = color
    }

    set lineWidth(width){
        console.log(this.ctx.lineWidth)
        this.ctx.lineWidth = width
    }

    get lineWidth(){
        return this.ctx.lineWidth
    }


    destryoyEvents(){
        this.canvas.onmousedown = null;
        this.canvas.onmouseup = null;
        this.canvas.onmousemove = null;
    }
}