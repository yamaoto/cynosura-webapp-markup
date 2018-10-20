import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import PrimeNG modules
import { PanelMenuModule } from 'primeng/primeng';

// Import app dependencies
import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    PanelMenuModule
  ],
  declarations: [
    ApplicationComponent,
    MainMenuComponent
  ]
})
export class ApplicationModule { }
