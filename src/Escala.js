import {cmToPixels} from "./conversions";
import {Vector} from "./geometry";

const VERTICAL_STROKE_IN_CM = 0.5;
const TEXT_SEPARATION_IN_CM = 0.2;
const FONT_SIZE = "14px";

function drawFinal(ctx,position) {
    ctx.beginPath();
    ctx.moveTo(position.x,position.y-cmToPixels(VERTICAL_STROKE_IN_CM/2));
    ctx.lineTo(position.x,position.y+cmToPixels(VERTICAL_STROKE_IN_CM/2));
    ctx.stroke();
}

function drawLine(ctx,position, length){
    ctx.beginPath();
    ctx.moveTo(position.x,position.y);
    ctx.lineTo(position.x+length,position.y);
    ctx.stroke();
}

function drawText(ctx, position, numberOfcm) {
    ctx.font = FONT_SIZE + " Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.textBaseline="middle";
    ctx.fillText(numberOfcm + " cm",position.x,position.y);
}

export default class Escala {
    static draw(ctx, position, lengthInCm) {

        const lengthInPixels = cmToPixels(lengthInCm);

        const positionOfLeftFinal = position;
        const positionOfRightFinal = position.add(new Vector(lengthInPixels,0));
        const positionOfText = positionOfRightFinal.add(new Vector(cmToPixels(TEXT_SEPARATION_IN_CM),0));

        ctx.save();
        ctx.strokeStyle="black";
        drawLine(ctx,position,lengthInPixels);
        drawFinal(ctx,positionOfLeftFinal);
        drawFinal(ctx,positionOfRightFinal);
        drawText(ctx,positionOfText,lengthInCm);
        ctx.restore();
    }
}