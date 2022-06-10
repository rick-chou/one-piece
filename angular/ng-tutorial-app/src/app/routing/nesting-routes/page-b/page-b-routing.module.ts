import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RouterPageBComponent } from './page-b.component';

const routes: Routes = [{ path: '', component: RouterPageBComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouterPageBRoutingModule {}
