import styles from './styles.css';
import Movil from './Movil'
import {Point, Vector} from "./Geometry";

let frontCanvas = document.getElementById("front1");
let ctx = frontCanvas.getContext("2d");

/*
function adjustCanvasToContainer(parent, ctx) {
    // let parent = canvas.parentElement;
    let positionInfo = parent.getBoundingClientRect();
    let height = positionInfo.height;
    let width = positionInfo.width;
    console.log(height);
    ctx.width = width;
    ctx.height = height;
}
adjustCanvasToContainer(frontCanvas.parentElement,ctx);
window.addEventListener('resize',function(){
    console.log('hola');
    var width  = calculateDesiredWidth();  // your code here
    var height = calculateDesiredHeight(); // your code here
    ctx.canvas.width  = width;
    ctx.canvas.height = height;
    ctx.translate(width/2,height/2); // now 0,0 is the center of the canvas.
},false);
*/


function linearMovement(speed) {
    return function(e0,time) {
        console.log(`initial:${JSON.stringify(e0)}`);
        let actual = e0.clone().add(speed.times(time));
        console.log(`actual:${JSON.stringify(actual)}`);
        console.log('--');
        return e0.clone().add(speed.times(time));
    }
}
let linear = linearMovement(new Vector(1,0));

// ctx.fillRect(0,0,20,10);


let m = new Movil();
m.setDrawingContext(ctx).setInitialPosition(new Point(0,20)).setPositionFormula(linear);
// m.draw();
// m.erase();
// m.updatePosition(20);
// m.draw();
// for(let i=0;i<100;i++){m.render(i)}
m.render(280);
// console.log(m);
// m.render(20);