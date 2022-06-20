import { map, of } from "rxjs";

of(1, 2, 3)
  .pipe(map((x) => x * 10))
  .subscribe(console.log);

// output
// 10
// 20
// 30
