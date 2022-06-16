import { Component, OnInit } from '@angular/core';
import {
  of,
  from,
  fromEvent,
  timer,
  interval,
  delay,
  concat,
  merge,
  take,
  map,
  zip,
  startWith,
  scan,
  tap,
  share,
} from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './operators.component.html',
})
export class RxJSOperatorsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  fromOp() {
    // convert arr etc to an observable
    const arr = [1, 2, 3, 4, 5];
    const res = from(arr);
    res.subscribe(console.log);
  }

  fromEventOp() {
    const clicks = fromEvent(document, 'click');
    clicks.subscribe((x) => console.log(x));
  }

  concatOp() {
    const ob = concat(of(1, 2, 3), of(4, 5, 6)).subscribe(console.log);
  }

  timerOp() {
    timer(0, 1000).subscribe((n) => console.log('timer', n));
  }

  intervalOp() {
    interval(1000).subscribe((n) => console.log('interval', n));
  }

  delayOp() {
    const clicks = fromEvent(document, 'click');
    const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
    delayedClicks.subscribe((x) => console.log(x));
  }

  mergeOp() {
    const ob1 = interval(1000).pipe(take(10));
    const ob2 = interval(1000).pipe(take(10));
    const ob3 = interval(1000).pipe(take(10));
    const ob = merge(ob1, ob2, ob3, 2);
    ob.subscribe(console.log);
  }

  mapOp() {
    of(1, 2, 3)
      .pipe(map((n) => n * 10))
      .subscribe(console.log);
  }

  zipOp() {
    const age$ = of(27, 25, 29);
    const name$ = of('Foo', 'Bar', 'Beer');
    const isDev$ = of(true, true, false);
    zip(age$, name$, isDev$)
      .pipe(map(([age, name, isDev]) => ({ age, name, isDev })))
      .subscribe(console.log);
  }

  startWithOp() {
    const ob1 = of(1, 2, 3);
    ob1.pipe(startWith(0)).subscribe(console.log);
  }

  scanOp() {
    const source = of(1, 2, 3);
    source.pipe(scan((acc, pre) => acc + pre, 0)).subscribe(console.log);
  }

  tapOp() {
    // perform side-effect
    of(1, 2, 3).pipe(tap(console.log)).subscribe();
  }

  takeOp() {
    of(1, 2, 3, 4, 5).pipe(take(2)).subscribe(console.log);
  }

  shareOp() {
    const source = interval(1000).pipe(
      tap((x) => console.log('Processing: ', x)),
      map((x) => x * x),
      take(6),
      share()
    );

    source.subscribe((x) => console.log('subscription 1: ', x));
    source.subscribe((x) => console.log('subscription 2: ', x));
  }
}
