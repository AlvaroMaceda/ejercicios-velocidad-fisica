import styles from './styles.css';
// import {Observable} from "rxjs";
// import {Scheduler} from 'rxjs'

// import * as Rx from 'rxjs';
import { Observable, Subject, ReplaySubject, from, of, range, defer, interval } from 'rxjs';
import { map, filter, switchMap, repeat, take, scan } from 'rxjs/operators';
import { animationFrameScheduler } from 'rxjs';

// import { animationFrameScheduler } from 'rxjs';

// const scheduler = animationFrameScheduler;

let foo;
foo = of(0, animationFrameScheduler).pipe(
    repeat(),
    take(100),
    scan((i)=>i+1,0)
);
foo.subscribe((x) => console.log("foo"+x));

/*
let source = defer( () => {
    // const start = scheduler.now();

    // return Observable.interval(0,scheduler)
    //     .map(() => scheduler.now() - start)
    return Rx.Observable.interval(1000);
});
*/

// source.subscribe( () => console.log('banana'));


/*
  Increment value every 1s, emit even numbers.
*/
/*
const evenNumbers = Observable.create(function(observer) {
    let value = 0;
    const interval = setInterval(() => {
        if (value % 2 === 0) {
            observer.next(value);
        }
        value++;
    }, 1000);

    return () => clearInterval(interval);
});
//output: 0...2...4...6...8
const subscribe = evenNumbers.subscribe(val => console.log("1:"+val));
const subscribe2 = evenNumbers.subscribe(val => console.log("2:"+val));
//unsubscribe after 10 seconds
setTimeout(() => {
    subscribe.unsubscribe();
    subscribe2.unsubscribe();
}, 10000);
*/