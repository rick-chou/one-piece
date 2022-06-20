// When all observables complete, emit the last emitted value from each

import { forkJoin, of } from "rxjs";

forkJoin({
  res1: new Promise((resolve, reject) =>
    setTimeout(() => resolve("res1"), 3000)
  ),
  res2: of(1, 2, 3),
}).subscribe(console.log);

// output
// { res1: 'res1', res2: 3 }
