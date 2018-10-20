import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontHomeComponent } from './front-home.component';
import { FrontHomeRoutingModule } from './router.module';

@NgModule({
    imports: [CommonModule, FrontHomeRoutingModule],
    exports: [FrontHomeComponent],
    declarations: [FrontHomeComponent]
})
export class FrontHomeModule { }
