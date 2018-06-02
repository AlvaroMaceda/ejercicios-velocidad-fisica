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

const Movil = class {
    constructor() {
        this.initialPosition = new Point(0,0);
        this.position = this.initialPosition;
        this.height = 10;
        this.width = 20;
        this.color = '#FF0000'
    }
    set initialPositionLALALA(pos) {
        this._initialPosition = pos;
        console.log('setting');
    }
    render(time) {
        this.erase();
        this.updatePosition(time);
        this.draw();
    }
    erase() {
        this.drawingContext.clearRect(0,0,1000,5000);
    }
    coordinatesOfTheSquare() {
        return [
            this.position.x,
            this.position.y,
            this.width,
            this.height
        ]
    }
    draw() {
        this.drawingContext.fillStyle = this.color;
        let foo = this.coordinatesOfTheSquare();
        console.log(`coordinates:${foo}`);
        this.drawingContext.fillRect(foo[0],foo[1],foo[2],foo[3]);
        // this.drawingContext.fillRect.apply(this.drawingContext,foo);
    }
    updatePosition(time) {
        this.position = this.position || this.initialPosition;
        console.log(`position before:${JSON.stringify(this.position)}`);
        // console.log(this.initialPosition);
        // console.log(this.position);
        // console.log(this.positionFormula);
        this.position = this.positionFormula(this.initialPosition,time);
        // console.log(this.position);
        console.log(`position after:${JSON.stringify(this.position)}`);
    }
};
addBuilderMethods(Movil.prototype,['DrawingContext','InitialPosition','PositionFormula']);


export default Movil;


