import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { RouterBasicRouteComponent } from './pages/router/basic-route/basic-route.component';
import { RouterNestingRoutesComponent } from './pages/router/nesting-routes/nesting-routes.component';
import { RouterPageAComponent } from './pages/router/nesting-routes/page-a/page-a.component';
import { RouterPageA1Component } from './pages/router/nesting-routes/page-a/page-a-1/page-a-1.component';
import { RouterPageA2Component } from './pages/router/nesting-routes/page-a/page-a-2/page-a-2.component';
import { RouterPageBComponent } from './pages/router/nesting-routes/page-b/page-b.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    RouterBasicRouteComponent,
    RouterNestingRoutesComponent,
    RouterPageAComponent,
    RouterPageA1Component,
    RouterPageA2Component,
    RouterPageBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
