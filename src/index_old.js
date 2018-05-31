import styles from './styles.css';

import Movil from './Movil';

let backCanvas = document.getElementById("front1");
let bctx = backCanvas.getContext("2d");
bctx.fillStyle = '#FF00FF';
bctx.fillRect(0,0,200,200);

let frontCanvas = document.getElementById("front1");
let ctx = frontCanvas.getContext("2d");

window.setInterval(1000, () => {
    console.log('banana');
});

var colors=["#FF0000","#FF00FF","#FFFF00"];

let i=0;
let timer;
function animate(time) {
    //--------------------
    console.log(i++);
    //--------------------
    draw(time);
    if(i>5) clearInterval(timer);
}

function startAnimation() {
    timer = window.setInterval(() => requestAnimationFrame( animate ),1000);
}

startAnimation();

function draw(time) {
    console.log('time:'+time);
    let index = Math.floor(time) % 3;
    console.log('index:'+index);
    ctx.fillStyle = colors[index];

    ctx.fillRect(0,0,150,75);
}