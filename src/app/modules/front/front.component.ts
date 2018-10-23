import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.less']
})
export class FrontComponent implements OnInit, AfterViewInit, OnDestroy {

  loading = true;

  load: { [k: string]: string };
  constructor(
    private cookieConsentService: NgcCookieConsentService
  ) { }

  ngOnInit() {
    this.load = {
      skeleton: 'skeleton-bundle',
      // cookieconsent: 'cookieconsent-bundle'
    };
    console.log('this.cookieConsentService', this.cookieConsentService);
  }

  ngAfterViewInit(): void {
    const items = Object.keys(this.load).map((bundle) => this.loadStyles(bundle, this.load[bundle]));
    Promise.all(items)
      .then(() => {
        // setTimeout(() => this.cookieConsentService.init(this.cookieConsentService.getConfig()), 1);
      })
      .catch((error) => console.log('error', error))
      .finally(() => this.loading = false);

  }

  ngOnDestroy(): void {
    Object.values(this.load).map((id) => this.destroyStyles(id));
  }

  /**
   * loading preconfigured bundle with skeleton styles
   * for front only
   */
  loadStyles(bundle: string, id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!document.getElementById(id)) {
        const script = document.createElement('script');
        script.id = id;
        script.src = `/${bundle}.js`;
        script.onload =
          () => resolve();
        document.head.appendChild(script);
      } else {
        resolve();
      }
    });
  }

  /**
   * remove primeng styles
   */
  destroyStyles(id) {
    const script = document.getElementById(id);
    if (script) {
      document.head.removeChild(script);
    }
  }
}
