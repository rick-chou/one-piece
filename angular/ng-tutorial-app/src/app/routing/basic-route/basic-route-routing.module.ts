import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RouterBasicRouteComponent } from './basic-route.component';

const routes: Routes = [{ path: '', component: RouterBasicRouteComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicRouteRoutingModule {}
