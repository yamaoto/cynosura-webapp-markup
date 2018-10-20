import { NgModule } from '@angular/core';
import { MainMenuComponent } from './main-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Import PrimeNG modules
import {AccordionModule, PanelMenuModule} from 'primeng/primeng';

@NgModule({
    imports: [BrowserAnimationsModule, AccordionModule, PanelMenuModule],
    exports: [MainMenuComponent, BrowserAnimationsModule, AccordionModule, PanelMenuModule],
    declarations: [MainMenuComponent]
})
export class MainMenuModule { }
