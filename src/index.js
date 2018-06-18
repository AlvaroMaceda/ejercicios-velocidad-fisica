import styles from './styles.css';

// import * as Rx from 'rxjs';
//import { Observable, Subject, ReplaySubject, from, of, range, defer, interval } from 'rxjs';
import {fromEvent, interval, timer} from 'rxjs';
import { take, scan, share, switchMapTo, debounceTime, distinct } from 'rxjs/operators';
import { animationFrameScheduler } from 'rxjs';


const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

let start$ = fromEvent(startButton,'click');
let stop$ = fromEvent(stopButton,'click');

function frameDataCalculator(startTime) {
    console.log(`creating frame calculator. Start time:${startTime}`);
    return function (previousFrameData) {
        // console.log(previousFrameData);
        const timeSinceAnimationStarted = animationFrameScheduler.now()-startTime;
        return {
            fromStart: timeSinceAnimationStarted,
            fromLastFrame:timeSinceAnimationStarted-previousFrameData.fromStart
        }
    }
}

// Para parar: https://medium.com/@benlesh/rxjs-dont-unsubscribe-6753ed4fda87
// Ver esto para arrancar: https://egghead.io/lessons/rxjs-starting-a-stream-with-switchmap

const initialFrameData = {fromStart:0,fromLastFrame:0};

// let foo$;
// foo$ = interval(0,animationFrameScheduler).pipe(
//     scan(frameDataCalculator(animationFrameScheduler.now()),initialFrameData),
//     distinct(),
//     take(100),
//     share(),
// );

function createFrameStream() {
    return interval(0,animationFrameScheduler).pipe(
        scan(frameDataCalculator(animationFrameScheduler.now()),initialFrameData),
        distinct(),
        take(1),
        share()
    );
}

// ¿Por qué no va esto?
let frames$ = start$.pipe(
    switchMapTo(createFrameStream())
);

start$.subscribe((x)=>console.log(x));
// foo$.subscribe((x) => {
//     console.log("from start:"+x.fromStart);
//     console.log("from last frame:"+x.fromLastFrame)
// });

frames$.subscribe((x) => {
    console.log("from start:"+x.fromStart);
    console.log("from last frame:"+x.fromLastFrame)
});
