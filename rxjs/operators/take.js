// Emit provided number of values before completing

import { of, take } from "rxjs";

const ob$ = of(1, 2, 3);

ob$.pipe(take(2)).subscribe(console.log);

// output
// 1
// 2
