import styles from './styles.css';
import Movil from './Movil'
import {Point, Vector} from "./geometry";
import {cmToPixels, secondsToMiliseconds} from "./conversions";
import Escala from "./Escala";


function addListeners() {
    document.getElementById("start").addEventListener("click", startAnimation);
}
addListeners();



let frontCanvas = document.getElementById("front1");
let front = frontCanvas.getContext("2d");
let backCanvas = document.getElementById("back1");
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


let linear = linearMovement(new Vector(cmToPixels(5)/secondsToMiliseconds(1),0));

let m = new Movil();
m.setDrawingContext(front).setInitialPosition(new Point(0,100)).setPositionFormula(linear);

Escala.draw(back,new Point(20,20),1);

function startAnimation() {
    requestAnimationFrame( animate )
}
function animate(time) {
    m.render(time);
    if(m.position.x<300) requestAnimationFrame( animate );
}
// startAnimation();
