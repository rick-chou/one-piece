import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterPageBRoutingModule } from './page-b-routing.module';
import { RouterPageBComponent } from './page-b.component';

@NgModule({
  declarations: [RouterPageBComponent],
  imports: [CommonModule, RouterPageBRoutingModule],
})
export class RouterPageBModule {}
