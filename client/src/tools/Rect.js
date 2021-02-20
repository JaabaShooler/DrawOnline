import Tool from "./Tool";

export default class Rect extends Tool{
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
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
        this.saved = this.canvas.toDataURL();
    }

    mouseMoveHander(e){
        if (this.isMouseDown){
            let
                currentX = e.pageX - e.target.offsetLeft,
                currentY = e.pageY - e.target.offsetTop,
                width = currentX - this.startX,
                height = currentY - this.startY;
            this.draw(this.startX, this.startY, width, height);
        }
    }

    draw(x, y, w, h){
        const img = new Image();
        img.src = this.saved
        img.onload = () => {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.rect(x, y, w, h);
            this.ctx.fill();
            this.ctx.stroke()
        }
    }
}