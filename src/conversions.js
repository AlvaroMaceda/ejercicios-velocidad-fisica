const FACTOR = 30;

export function pixelsTocm(pixels){ return pixels/FACTOR}
export function cmToPixels(cm){ return Math.round(cm*FACTOR)}
export function secondsToMiliseconds(number) {
    return number * 1000;
}