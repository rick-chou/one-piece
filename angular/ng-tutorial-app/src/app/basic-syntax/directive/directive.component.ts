import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss'],
})
export class DirectiveComponent implements OnInit {
  isShow = false;
  switch_expression = 'switch_expression_1';
  lists = [1, 2, 3, 4, 5, 6, 7];
  isRed = true;
  ngOnInit(): void {}
  handleToggle() {
    this.isShow = !this.isShow;
  }
  handleSwitchExpression() {
    this.switch_expression =
      'switch_expression_' + ((+this.switch_expression.slice(-1) + 1) % 4);
  }
  handleNgClass() {
    this.isRed = !this.isRed;
  }
}
