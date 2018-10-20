import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Import PrimeNG modules
import {AccordionModule, PanelMenuModule} from 'primeng/primeng';
// Import app modules
import { AppRoutingModule } from './app-routing.module';
import { MainMenuModule } from './main-menu';

// Import app dependencies
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    PanelMenuModule,
    MainMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
