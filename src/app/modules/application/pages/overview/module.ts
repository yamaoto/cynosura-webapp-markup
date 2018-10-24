import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// import { OverviewRoutingModule } from './router.module';

@NgModule({
    imports: [
        // OverviewRoutingModule,
        // BrowserAnimationsModule,
    ],
    exports: [
        // BrowserAnimationsModule,
    ],
    declarations: [OverviewComponent]
})
export class OverviewModule { }
