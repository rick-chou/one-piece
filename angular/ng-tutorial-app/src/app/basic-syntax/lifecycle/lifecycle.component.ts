import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
})
export class LifeCycleComponent
  implements
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  inputVal: string = '';

  lifeCycleStack: string[] = [];

  show = true;

  data = Date.now();

  ngAfterContentChecked(): void {
    this.handleExpress('AfterContentChecked');
  }
  ngAfterContentInit(): void {
    this.handleExpress('AfterContentInit');
  }
  ngAfterViewChecked(): void {
    this.handleExpress('AfterContentChecked');
  }
  ngAfterViewInit(): void {
    this.handleExpress('AfterViewInit');
  }
  ngDoCheck(): void {
    this.handleExpress('DoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
    this.handleExpress('OnChanges');
  }
  ngOnDestroy(): void {
    this.handleExpress('OnDestroy');
  }
  ngOnInit(): void {
    this.handleExpress('OnInit');
  }
  handleExpress(lifecycle: string) {
    this.lifeCycleStack.push(`${lifecycle} ${Date.now() - this.data}ms`);
  }
  handleLogClear() {
    this.lifeCycleStack = [];
  }
}
