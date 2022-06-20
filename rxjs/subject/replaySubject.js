import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject(3);

subject.subscribe(console.log);

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe(console.log);

subject.next(5);

// Logs
// 1
// 2
// 3
// 4
// 2
// 3
// 4
// 5
// 5
