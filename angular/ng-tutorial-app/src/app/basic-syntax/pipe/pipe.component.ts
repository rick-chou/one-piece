import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
})
export class PipeComponent implements OnInit {
  asyncSign: Promise<string> | null = null;
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  money = 100;
  today: number = Date.now();
  messages: any[] = ['Message 1'];
  messageMapping: { [k: string]: string } = {
    '=0': 'No messages.',
    '=1': 'One message.',
    other: '# messages.',
  };
  object: Object = {
    foo: 'bar',
    baz: 'qux',
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] },
  };
  map = new Map([
    [2, 'foo'],
    [1, 'bar'],
  ]);
  str: string = 'abcdefghij';
  gender: string = 'male';
  inviteMap: any = {
    male: 'Invite him.',
    female: 'Invite her.',
    other: 'Invite them.',
  };
  ngOnInit(): void {
    this.asyncSign = Promise.resolve('yes');
  }

  async asyncPipeClick() {
    const sign = await this.asyncSign;
    this.asyncSign = Promise.resolve(sign === 'yes' ? 'no' : 'yes');
  }
}
