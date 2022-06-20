import { last, of } from 'rxjs';

const ob$ = of(1, 2, 3);

ob$.pipe(last()).subscribe(console.log); // --> 3
ob$.pipe(last((x) => x > 1)).subscribe(console.log); // --> 3
