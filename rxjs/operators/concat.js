// the next subscription cannot start until the previous completes

import { concat, Observable, of } from "rxjs";

const ob1$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  // subscriber.complete();
});

const ob2$ = of(4, 5, 6);

concat(ob1$, ob2$).subscribe(console.log);

// output (call subscriber.complete())
// 1 - 6

// output (call subscriber.complete())
// 1 - 3
