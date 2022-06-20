// start with an initial value

import { of } from "rxjs";
import { startWith } from "rxjs/operators";

const observable$ = of(1, 2, 3);
observable$.pipe(startWith(0)).subscribe(console.log);

// output
// 0 - 3
