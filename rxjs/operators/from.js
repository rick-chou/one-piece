// Turn an array, promise, or iterable into an observable.

import { from, of } from "rxjs";

from([1, 2, 3, 4]).subscribe(console.log);
of([1, 2, 3, 4]).subscribe(console.log);

// output from
// 1
// 2
// 3
// 4

// output of
// [ 1, 2, 3, 4 ]
