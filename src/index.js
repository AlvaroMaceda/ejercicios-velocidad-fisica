import Movil from './Movil'
import {Point, Vector} from "./Geometry";

let frontCanvas = document.getElementById("front1");
let ctx = frontCanvas.getContext("2d");

let m = new Movil();
m.setDrawingContext(ctx).setPosition(new Point(100,20)).setSpeed(new Vector(0,1));
console.log(m);