import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';

// Import app dependencies
import { CoreModule } from './core/core.module';
import { ApplicationComponent } from './application.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { MainWrapComponent } from './components/main-wrap/main-wrap.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

// Page imports
import { OverviewModule } from './pages/overview/module';
import { ProfileModule } from './pages/profile/module';
import { RoleModule } from './pages/role/module';

import { routes } from './routes';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    OverviewModule,
    ProfileModule,
    RoleModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    ApplicationComponent,
    MainMenuComponent,
    SideMenuComponent,
    MenuItemComponent,
    HeaderComponent,
    MainWrapComponent,
    FooterComponent,
    LoginComponent
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    CoreModule,
  ]
})
export class ApplicationModule { }
