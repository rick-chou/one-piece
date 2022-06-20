import { filter, Observable } from 'rxjs';

const observable$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

observable$.subscribe(console.log);

observable$.pipe(filter((x) => x > 1)).subscribe(console.log);

observable$.forEach((v) => console.log(v)).then();
