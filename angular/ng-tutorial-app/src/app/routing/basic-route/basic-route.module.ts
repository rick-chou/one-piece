import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRouteRoutingModule } from './basic-route-routing.module';
import { RouterBasicRouteComponent } from './basic-route.component';

@NgModule({
  declarations: [RouterBasicRouteComponent],
  imports: [CommonModule, BasicRouteRoutingModule],
})
export class BasicRoutingModule {}
