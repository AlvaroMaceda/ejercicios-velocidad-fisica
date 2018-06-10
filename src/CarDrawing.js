const WIDTH = 50;
const HEIGHT =20;
const WHEEL_WIDTH = 10;
const WHEEL_HEIGHT = 5;


class CarDrawing {

    constructor(ctx,position) {
        this.ctx = ctx;
        this.position = position;
        this.height = HEIGHT;
        this.width = WIDTH;
        this.wheelWidth = WHEEL_WIDTH;
        this.wheelHeight = WHEEL_HEIGHT;
        this.color = '#FF0000';
    }

    coordinatesOfTheSquare() {
        return [
            this.position.x-this.width,
            this.position.y,
            this.width,
            this.height
        ]
    }

    drawWheels() {
        this.drawWheel(0,0);
    }

    drawWheel(ctx, position) {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(position.x,position.y,this.wheelWidth,this.wheelHeight);
    }

    erase() {
        this.ctx.clearRect(0,0,1000,5000);
    }

    draw() {
        this.ctx.save();
        this.ctx.fillStyle = this.color;
        let square = this.coordinatesOfTheSquare();
        this.ctx.fillRect.apply(this.ctx,square);
        this.ctx.restore();
    }

}

export default CarDrawing;