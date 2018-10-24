import { Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { LoginComponent } from './components/login/login.component';
import { MainWrapComponent } from './components/main-wrap/main-wrap.component';

import * as overviewRoutes from './pages/overview/router.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApplicationRouteActivator } from './core/application-route-activator';

export const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: '',
        component: MainWrapComponent,
        canActivate: [ApplicationRouteActivator],
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
    ]
  },
  {
    path: 'login',
    component: ApplicationComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        outlet: 'application',
      }
    ]
  }
];
