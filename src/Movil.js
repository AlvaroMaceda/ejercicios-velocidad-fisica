import {Point,Vector} from './Geometry';

function firstLetterLowercase(string) { return string.charAt(0).toLowerCase() + string.slice(1);}

function addBuilderMethod(obj, property) {
    const methodName = 'set' + property;
    const propertyName = firstLetterLowercase(property);
    obj[methodName] =function(value) {
        this[propertyName] = value;
        return this;
    }
}
function addBuilderMethods(obj, properties) {
    properties.forEach( (property) => addBuilderMethod(obj,property))
}

let i;

const WIDTH = 50;
const HEIGHT =20;
const WHEEL_WIDTH = 10;
const WHEEL_HEIGHT = 5;

const Movil = class {
    constructor() {
        this._initialPosition = new Point(0,0);
        this.position = this._initialPosition;
        this.height = HEIGHT;
        this.width = WIDTH;
        this.wheelWidth = WHEEL_WIDTH;
        this.wheelHeight = WHEEL_HEIGHT;
        this.color = '#FF0000';
        // Editor hints
        this.ctx = null;
        this.positionFormula = null;
    }
    set drawingContext(ctx) {
        this.ctx = ctx;
    }
    get DrawingContext() {return this.ctx}
    set initialPosition(pos) {
        this._initialPosition = pos;
        this.position = this._initialPosition;
    }
    get initialPosition() {return this._initialPosition}
    render(time) {
        this.erase();
        this.updatePosition(time);
        this.draw();
    }
    erase() {
        this.ctx.clearRect(0,0,1000,5000);
    }
    coordinatesOfTheSquare() {
        return [
            this.position.x,
            this.position.y,
            this.width,
            this.height
        ]
    }
    drawWheels() {
        this.drawWheel(0,0);
    }
    drawWheel(x,y) {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(x,y,this.wheelWidth,this.wheelHeight);
    }
    draw() {
        this.ctx.save();
        this.ctx.fillStyle = this.color;
        let square = this.coordinatesOfTheSquare();
        this.ctx.fillRect.apply(this.ctx,square);
        this.ctx.restore();
    }
    updatePosition(time) {
        this.position = this.position || this._initialPosition;
        // console.log(`position before:${JSON.stringify(this.position)}`);
        this.position = this.positionFormula(this._initialPosition,time);
        // console.log(`position after:${JSON.stringify(this.position)}`);
    }
};
addBuilderMethods(Movil.prototype,['DrawingContext','InitialPosition','PositionFormula']);


export default Movil;


