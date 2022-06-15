import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { IconsProviderModule } from './icons-provider.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// router
import { GuardCanActivateComponent } from './routing/route-guards/canActivate/canActivate.component';
import { RouterNestingRoutesComponent } from './routing/nesting-routes/nesting-routes.component';
import { RouterPageAComponent } from './routing/nesting-routes/page-a/page-a.component';
import { RouteGuardsComponent } from './routing/route-guards/route-guards.component';

// http-client
import { HttpClientComponent } from './http-client/http-client.component';

// charts
import { ChartsComponent } from './charts/charts.component';

// rxjs
import { RxJSComponent } from './rxjs/rxjs.component';

// basic
import { BasicSyntaxComponent } from './basic-syntax/basic-syntax.component';
import { DirectiveComponent } from './basic-syntax/directive/directive.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    RouterNestingRoutesComponent,
    RouterPageAComponent,
    GuardCanActivateComponent,
    RouteGuardsComponent,
    LoginComponent,
    HttpClientComponent,
    ChartsComponent,
    RxJSComponent,
    BasicSyntaxComponent,
    DirectiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    NzSpaceModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
