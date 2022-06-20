import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(1);

subject.subscribe(console.log);

subject.next(2);

subject.subscribe(console.log);

subject.next(3);

// Logs
// 1
// 2
// 2
// 3
// 3
