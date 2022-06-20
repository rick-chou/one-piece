import { timer, combineLatest } from "rxjs";

// timerOne emits first value at 1s, then once every 4s
const timerOne$ = timer(1000, 4000);
// timerTwo emits first value at 2s, then once every 4s
const timerTwo$ = timer(2000, 4000);
// timerThree emits first value at 3s, then once every 4s
const timerThree$ = timer(3000, 4000);

// when one timer emits, emit the latest values from each timer as an array
combineLatest([timerOne$, timerTwo$, timerThree$]).subscribe(
  ([timerValOne, timerValTwo, timerValThree]) => {
    console.log(
      `
    Timer One Latest: ${timerValOne},
    Timer Two Latest: ${timerValTwo},
    Timer Three Latest: ${timerValThree}
      `
    );
  }
);
