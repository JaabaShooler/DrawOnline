import Pencil from "./Pencil";

export default class Eraser extends Pencil{
    constructor(canvas) {
        super(canvas);
    }
    draw(x, y){
        this.ctx.lineTo(x,y);
        this.ctx.strokeStyle = "White";
        this.ctx.stroke();
        console.log('draw');
    }
}