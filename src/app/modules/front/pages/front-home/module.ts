import { NgModule } from '@angular/core';
import { FrontHomeComponent } from './front-home.component';
import { FrontHomeRoutingModule } from './router.module';

@NgModule({
    imports: [FrontHomeRoutingModule],
    exports: [FrontHomeComponent],
    declarations: [FrontHomeComponent]
})
export class FrontHomeModule { }
