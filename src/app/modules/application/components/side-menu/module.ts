import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Import PrimeNG modules
import {AccordionModule, PanelMenuModule} from 'primeng/primeng';

@NgModule({
    imports: [BrowserAnimationsModule, AccordionModule, PanelMenuModule],
    exports: [SideMenuComponent, BrowserAnimationsModule, AccordionModule, PanelMenuModule],
    declarations: [SideMenuComponent]
})
export class SideMenuModule { }
