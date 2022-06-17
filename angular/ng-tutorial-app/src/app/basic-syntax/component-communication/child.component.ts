import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnChanges {
  @Output() childMessage = new EventEmitter();
  @Input() desc!: string;
  @Input()
  set title(title: string) {
    this._title = title.slice() + '🌈';
  }
  get title() {
    return this._title;
  }
  private _title = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges trigger changes:', changes);
  }

  callParentsFn() {
    this.childMessage.emit(`child's message`);
  }

  intervalId = 0;
  message = '';
  seconds = 11;

  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this.countDown();
  }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private clearTimer() {
    clearInterval(this.intervalId);
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}
