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
        this.height = 20;
        this.width = 50;
        this.color = '#FF0000'
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
        this.drawingContext.fillStyle = this.color + i++;
        let foo = this.coordinatesOfTheSquare();
        this.drawingContext.fillRect.apply(this.drawingContext,foo);
    }
    updatePosition(time) {
        console.log(`position after:${this.position.x},${this.position.y}`);
        console.log(this.initialPosition);
        console.log(this.position);
        console.log(this.positionFormula);
        this.position = this.positionFormula(this.initialPosition,time);
        console.log(this.position);
        console.log(`position before:${this.position.x},${this.position.y}`);
    }
};
addBuilderMethods(Movil.prototype,['DrawingContext','InitialPosition','PositionFormula']);


export default Movil;


