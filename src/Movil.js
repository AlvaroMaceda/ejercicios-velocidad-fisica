import {Point,Vector} from './Geometry';
import CarDrawing from "./CarDrawing";

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


const Movil = class {
    constructor() {
        this._initialPosition = new Point(0,0);
        this.position = this._initialPosition;
        // Editor hints
        this.ctx = null;
        this.positionFormula = null;
        this.carPicture = new CarDrawing();
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
        (new CarDrawing(this.ctx,this.position)).erase();
    }
    draw() {
        (new CarDrawing(this.ctx,this.position)).draw();
    }
    updatePosition(time) {
        this.position = this.positionFormula(this._initialPosition,time);
    }
};
addBuilderMethods(Movil.prototype,['DrawingContext','InitialPosition','PositionFormula']);


export default Movil;


