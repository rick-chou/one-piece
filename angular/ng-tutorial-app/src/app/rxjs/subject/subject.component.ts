import { Component, OnInit } from '@angular/core';
import { Subject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-rxjs-subject',
  templateUrl: './subject.component.html',
})
export class RxJSSubjectComponent implements OnInit {
  ngOnInit(): void {}
  subjectEg() {
    const subject = new Subject();
    subject.next(1);
    subject.next(2);
    subject.subscribe((x) => console.log('Subject A', x));
    subject.subscribe((x) => console.log('Subject B', x));
  }
}
