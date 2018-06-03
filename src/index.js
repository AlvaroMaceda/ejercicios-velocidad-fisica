import styles from './styles.css';
import Movil from './Movil'
import {Point, Vector} from "./Geometry";

let frontCanvas = document.getElementById("front1");
let front = frontCanvas.getContext("2d");
let backCanvas = document.getElementById("front1");
let back = backCanvas.getContext("2d");

function adjustCanvasToContainer(parent, drawingContext) {
    let positionInfo = parent.getBoundingClientRect();
    let height = positionInfo.height;
    let width = positionInfo.width;
    drawingContext.width = width;
    drawingContext.height = height;
}
adjustCanvasToContainer(frontCanvas.parentElement,front);
/*
window.addEventListener('resize',function(){
    console.log('hola');
    var width  = calculateDesiredWidth();  // your code here
    var height = calculateDesiredHeight(); // your code here
    front.canvas.width  = width;
    front.canvas.height = height;
    front.translate(width/2,height/2); // now 0,0 is the center of the canvas.
},false);
*/


function linearMovement(speed) {
    return function(e0,time) {
        return e0.clone().add(speed.times(time));
    }
}
let linear = linearMovement(new Vector(100/1000,0));

let m = new Movil();
m.setDrawingContext(front).setInitialPosition(new Point(0,20)).setPositionFormula(linear);

function startAnimation() {
    requestAnimationFrame( animate )
}
function animate(time) {
    m.render(time);
    if(m.position.x<300) requestAnimationFrame( animate );
}
startAnimation();
