import styles from './styles.css';
import Movil from './Movil'
import {Point, Vector} from "./Geometry";

let frontCanvas = document.getElementById("front1");
let ctx = frontCanvas.getContext("2d");

function linearMovement(speed) {
    return function(e0,time) {
        console.log(e0)
        console.log(e0.add(speed))
        console.log('--')
        return e0.clone().add(speed.times(time));
    }
}
let linear = linearMovement(new Vector(1,0));
console.log(linear);
console.log(linear(new Point(0,0),0));

let m = new Movil();
m.setDrawingContext(ctx).setInitialPosition(new Point(0,20)).setPositionFormula(linear);
// m.draw();
// m.erase();
// // m.updatePosition(20);
// m.draw();
m.render(0);
console.log(m);
// m.render(20);