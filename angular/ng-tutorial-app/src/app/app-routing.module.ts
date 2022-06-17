import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Http Client
import { HttpClientComponent } from './http-client/http-client.component';

// Charts
import { ChartsComponent } from './charts/charts.component';
import { G2LineComponent } from './charts/g2/line.component';
import { EchartsLineComponent } from './charts/echarts/line.component';

// RxJS
import { RxJSComponent } from './rxjs/rxjs.component';
import { RxJSOperatorsComponent } from './rxjs/operators/operators.component';
import { RxJSSubjectComponent } from './rxjs/subject/subject.component';

// Basic
import { BasicSyntaxComponent } from './basic-syntax/basic-syntax.component';
import { DirectiveComponent } from './basic-syntax/directive/directive.component';
import { PipeComponent } from './basic-syntax/pipe/pipe.component';
import { LifeCycleComponent } from './basic-syntax/lifecycle/lifecycle.component';
import { FatherComponent } from './basic-syntax/component-communication/father.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'basic-syntax',
    component: BasicSyntaxComponent,
    children: [
      {
        path: 'directive',
        component: DirectiveComponent,
      },
      {
        path: 'pipe',
        component: PipeComponent,
      },
      {
        path: 'lifecycle',
        component: LifeCycleComponent,
      },
      {
        path: 'component-communication',
        component: FatherComponent,
      },
    ],
  },
  {
    path: 'routing',
    loadChildren: () =>
      import('./routing/routing.module').then((m) => m.RoutingModule),
  },
  {
    path: 'http',
    component: HttpClientComponent,
  },
  {
    path: 'charts',
    component: ChartsComponent,
    children: [
      {
        path: 'g2-line',
        component: G2LineComponent,
      },
      {
        path: 'echarts-line',
        component: EchartsLineComponent,
      },
    ],
  },
  {
    path: 'rxjs',
    component: RxJSComponent,
    children: [
      {
        path: 'operators',
        component: RxJSOperatorsComponent,
      },
      {
        path: 'subject',
        component: RxJSSubjectComponent,
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
