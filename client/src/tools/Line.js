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
        this.ctx.beginPath()
    }

    mouseDownHander(e){
        this.isMouseDown = true
        this.currentX = e.pageX - e.target.offsetLeft;
        this.currentY = e.pageY - e.target.offsetTop;
        this.ctx.beginPath();
        this.ctx.moveTo(this.currentX, this.currentY);
        this.saved = this.canvas.toDataURL();
    }

    mouseMoveHander(e){
        if (this.isMouseDown){
            this.draw(e.pageX - e.target.offsetLeft,e.pageY - e.target.offsetTop);
        }
    }

    draw(x, y){
        const img = new Image();
        img.src = this.saved;
        img.onload = () => {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.moveTo(this.currentX, this.currentY)
            this.ctx.lineTo(x,y);
            this.ctx.stroke();
            console.log('draw line');
        }
    }
}