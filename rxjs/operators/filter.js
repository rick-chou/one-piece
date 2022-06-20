import { filter, of } from "rxjs";

of(1, 2, 3)
  .pipe(filter((x) => x > 2))
  .subscribe(console.log);

// output
// 3
