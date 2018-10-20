import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { FrontComponent } from './front.component';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule,
  ],
  declarations: [FrontComponent]
})
export class FrontModule { }
