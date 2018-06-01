import {Point,Vector} from './Geometry';

function addBuilderMethod(obj, property) {
    const methodName = 'set' + property;
    obj[methodName] =function(value) {
        this[property.toLowerCase()] = value;
        return this;
    }
}

const Movil = class {
    constructor() {
        this.position = new Point(0,0);
        this.speed = new Vector(0,0);
    }
    render(time) {
        this.erase();
        this.updatePosition();
        this.draw();
    }
    erase() {

    }
    draw() {

    }
    updatePosition(time) {
        this.position.add(this.speed.times(time));
    }
};
addBuilderMethod(Movil.prototype,'DrawingContext');
addBuilderMethod(Movil.prototype,'Position');
addBuilderMethod(Movil.prototype,'Speed');

export default Movil;


