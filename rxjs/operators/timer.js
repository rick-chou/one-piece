// After given duration, emit numbers in sequence every specified duration.

import { timer } from "rxjs";

const ob1$ = timer(3000);
const ob2$ = timer(1000, 2000);

ob1$.subscribe(console.log);
ob2$.subscribe(console.log);
