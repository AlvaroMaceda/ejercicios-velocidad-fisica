let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);


class Patata {
    constructor() {
        console.log('Hola');
    }
    foo() { alert('patata') }
}

import Movil from './Movil';

let p= new Movil();
p.foo();