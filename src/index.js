import styles from './styles.css';

// import * as Rx from 'rxjs';
//import { Observable, Subject, ReplaySubject, from, of, range, defer, interval } from 'rxjs';
import { interval, timer} from 'rxjs';
import { take, scan, share, debounceTime } from 'rxjs/operators';
import { animationFrameScheduler } from 'rxjs';

function frameDataCalculator(startTime) {
    return function (previousFrameData) {
        // console.log(previousFrameData);
        const timeSinceAnimationStarted = animationFrameScheduler.now()-startTime;
        return {
            fromStart: timeSinceAnimationStarted,
            fromLastFrame:timeSinceAnimationStarted-previousFrameData.fromStart
        }
    }
}

const initialFrameData = {fromStart:0,fromLastFrame:0};

let foo;
foo = interval(0,animationFrameScheduler).pipe(
    scan(frameDataCalculator(animationFrameScheduler.now()),initialFrameData),
    take(1000),
    share(),
);
// foo = foo.pipe(
//     debounceTime(500),
// );
foo.subscribe((x) => {
    console.log("from start:"+x.fromStart);
    console.log("from last frame:"+x.fromLastFrame)
});
