import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { FrontComponent } from './front.component';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';
import { cookieConfig } from './cookie-consent';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  declarations: [FrontComponent]
})
export class FrontModule { }
