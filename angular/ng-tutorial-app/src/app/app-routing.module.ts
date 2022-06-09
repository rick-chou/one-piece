import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouterBasicRouteComponent } from './pages/router/basic-route/basic-route.component';
import { RouterNestingRoutesComponent } from './pages/router/nesting-routes/nesting-routes.component';
import { RouterPageAComponent } from './pages/router/nesting-routes/page-a/page-a.component';
import { RouterPageA1Component } from './pages/router/nesting-routes/page-a/page-a-1/page-a-1.component';
import { RouterPageA2Component } from './pages/router/nesting-routes/page-a/page-a-2/page-a-2.component';
import { RouterPageBComponent } from './pages/router/nesting-routes/page-b/page-b.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'router',
    children: [
      {
        path: 'basic-route',
        component: RouterBasicRouteComponent,
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
            component: RouterPageBComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
