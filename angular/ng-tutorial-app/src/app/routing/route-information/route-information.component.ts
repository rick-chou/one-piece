import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-router-information',
  styleUrls: ['./route-information.component.scss'],
  templateUrl: './route-information.component.html',
})
export class RouterInformationComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.log(this.route);
  }
}
