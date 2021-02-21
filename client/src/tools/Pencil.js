import Tool from "./Tool";

export default class Pencil extends Tool{
    constructor(canvas) {
        super(canvas);
        this.listen()
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHander.bind(this)
        this.canvas.onmouseup = this.mouseUpHander.bind(this)
        this.canvas.onmousemove = this.mouseMoveHander.bind(this)
    }

    mouseUpHander(e){
        this.isMouseDown = false
    }

    mouseDownHander(e){
        this.isMouseDown = true
        this.ctx.beginPath()
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }

    mouseMoveHander(e){
        if (this.isMouseDown){
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
        }
    }

    draw(x, y){
        this.ctx.lineTo(x,y);
        this.ctx.stroke();
        this.ctx.fillStyle = 'Black'
        console.log('draw');
    }
}