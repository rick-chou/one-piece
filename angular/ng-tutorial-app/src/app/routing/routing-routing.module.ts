import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RouterBasicRouteComponent } from './basic-route/basic-route.component';
import { RouterNestingRoutesComponent } from './nesting-routes/nesting-routes.component';
import { RouterPageAComponent } from './nesting-routes/page-a/page-a.component';
import { RouterPageA1Component } from './nesting-routes/page-a/page-a-1/page-a-1.component';
import { RouterPageA2Component } from './nesting-routes/page-a/page-a-2/page-a-2.component';
import { RouterPageBComponent } from './nesting-routes/page-b/page-b.component';
import { RouterInformationComponent } from './route-information/route-information.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic-route',
        // lazy nesting routing
        loadChildren: () =>
          import('./basic-route/basic-route.module').then(
            (m) => m.BasicRoutingModule
          ),
        // component: RouterBasicRouteComponent,
      },
      {
        path: 'nesting-routes',
        component: RouterNestingRoutesComponent,
        children: [
          {
            path: 'page-a',
            component: RouterPageAComponent,
            children: [
              {
                path: 'page-a-1',
                component: RouterPageA1Component,
              },
              {
                path: 'page-a-2',
                component: RouterPageA2Component,
              },
            ],
          },
          {
            path: 'page-b',
            loadChildren: () =>
              import('./nesting-routes/page-b/page-b.module').then(
                (m) => m.RouterPageBModule
              ),
            // component: RouterPageBComponent,
          },
          {
            path: 'page-e',
            redirectTo: 'page-a',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'information',
        component: RouterInformationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingRoutingModule {}
