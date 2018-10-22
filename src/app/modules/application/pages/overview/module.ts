import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Import PrimeNG modules
import {AccordionModule, PanelMenuModule} from 'primeng/primeng';

// import { OverviewRoutingModule } from './router.module';

@NgModule({
    imports: [
        // OverviewRoutingModule,
        // BrowserAnimationsModule,
        AccordionModule,
        PanelMenuModule
    ],
    exports: [
        // BrowserAnimationsModule,
        AccordionModule,
        PanelMenuModule
    ],
    declarations: [OverviewComponent]
})
export class OverviewModule { }
