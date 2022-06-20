import { interval, withLatestFrom } from "rxjs";

const ob1$ = interval(1000);
const ob2$ = interval(3000);

// ob1$.pipe(withLatestFrom(ob2$)).subscribe(console.log);
// output emit every 1s
// [ 2, 0 ]
// [ 3, 0 ]
// [ 4, 0 ]
// [ 5, 1 ]
// [ 6, 1 ]
// ...

ob2$.pipe(withLatestFrom(ob1$)).subscribe(console.log);
// output emit every 3s
// [ 0, 1 ]
// [ 1, 4 ]
// [ 2, 7 ]
// ...
