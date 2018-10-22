import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { LoginComponent } from './components/login/login.component';
import { MainWrapComponent } from './components/main-wrap/main-wrap.component';

import * as overviewRoutes from './pages/overview/router.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: '',
        component: MainWrapComponent,
        outlet: 'application',
        children: [
          ...overviewRoutes.routes,
          {
            path: '',
            component: HeaderComponent,
            outlet: 'page-header'
          },
          {
            path: '',
            component: FooterComponent,
            outlet: 'page-footer'
          },
        ],
      },
      {
        path: 'login',
        component: LoginComponent,
        outlet: 'application',
        children: [
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
