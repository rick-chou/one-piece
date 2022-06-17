import { Component, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
})
export class FatherComponent {
  @ViewChild(ChildComponent)
  private timerComponent!: ChildComponent;
  constructor(private message: NzMessageService) {}
  parentsFn(message: string) {
    this.message.info(message);
  }

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => (this.seconds = () => this.timerComponent.seconds), 0);
  }

  start() {
    this.timerComponent.start();
  }
  stop() {
    this.timerComponent.stop();
  }
}
