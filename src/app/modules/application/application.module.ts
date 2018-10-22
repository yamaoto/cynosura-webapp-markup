import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import PrimeNG modules
import { PanelMenuModule } from 'primeng/primeng';

// Import app dependencies
import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { MainWrapComponent } from './components/main-wrap/main-wrap.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { OverviewModule } from './pages/overview/module';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    PanelMenuModule,
    OverviewModule
  ],
  declarations: [
    ApplicationComponent,
    MainMenuComponent,
    SideMenuComponent,
    HeaderComponent,
    MainWrapComponent,
    FooterComponent,
    LoginComponent
  ]
})
export class ApplicationModule { }
