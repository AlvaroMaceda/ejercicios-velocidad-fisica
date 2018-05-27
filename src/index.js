import styles from './styles.css';

import Movil from './Movil';

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

window.setInterval(1000, () => {
    console.log('banana');
});

var colors=["#FF0000","#FF00FF","#FFFF00"];

let i=0;
function animate(time) {
    //--------------------
    // Esto se quitará cuando esté el drawing de verdad
    console.log(i);
    if(i++<10) window.setInterval(() => requestAnimationFrame( animate ),1000);
    //--------------------
    draw(time);

}

function startAnimation() { animate(0); }

startAnimation();

function draw(time) {
    console.log('time:'+time);
    let index = Math.floor(time) % 3;
    console.log('index:'+index);
    ctx.fillStyle = colors[index];

    ctx.fillRect(0,0,150,75);
}