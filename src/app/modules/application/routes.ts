import { Routes, Route, UrlSegment, UrlSegmentGroup } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { LoginComponent } from './components/login/login.component';
import { MainWrapComponent } from './components/main-wrap/main-wrap.component';

import * as overviewRoutes from './pages/overview/router.module';
import * as profileRoutes from './pages/profile/router.module';
import * as roleRoutes from './pages/role/router.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApplicationRouteActivator } from './core/application-route-activator';

const pageRoutes = [
  ...overviewRoutes.routes,
  ...profileRoutes.routes,
  ...roleRoutes.routes
];

const globalComponentRoutes = [
  {
    path: '',
    component: LoginComponent
  }
];

export const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: '',
        component: MainWrapComponent,
        canActivate: [ApplicationRouteActivator],
        children: [
          ...pageRoutes,
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
        ]
      },
      ...globalComponentRoutes
    ]
  },
];
