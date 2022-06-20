// The observable to emit first is used.

import { interval, map, race } from "rxjs";

race([
  interval(3000).pipe(map(() => "3s")),
  interval(2000).pipe(map(() => "2s")),
  interval(1000).pipe(map(() => "1s")),
]).subscribe(console.log);
