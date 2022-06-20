/**
 * @signature interval(period: number, scheduler: Scheduler): Observable
 * @description Emit numbers in sequence based on provided timeframe.
 */

import { interval } from "rxjs";

const ob$ = interval(2000);

ob$.subscribe(console.log);
