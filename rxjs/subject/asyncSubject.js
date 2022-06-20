// only when the execution completes
// is similar to the last() operator

import { AsyncSubject } from 'rxjs';

const subject = new AsyncSubject();

subject.subscribe({
  next: (v) => console.log('observableA', v),
});

subject.subscribe({
  next: (v) => console.log('observableB', v),
});

subject.next(1);
subject.next(2);
subject.next(3);

subject.complete();
