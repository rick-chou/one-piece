// compare with concat

import { merge, of } from "rxjs";

const ob1$ = of(1, 2, 3);
const ob2$ = of(4, 5, 6);

merge(ob1$, ob2$).subscribe(console.log);
