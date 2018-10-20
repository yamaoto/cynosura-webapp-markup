import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.less']
})
export class ApplicationComponent implements OnInit, OnDestroy {

  styleId = 'application-style';
  loading = true;

  constructor() { }

  ngOnInit() {
    this.loadStyles();
  }

  ngOnDestroy(): void {
    this.destroyStyles();
  }

  /**
   * loading preconfigured bundle with primeng styles
   * for application only
   */
  loadStyles() {
    const primengBundle = 'primeng';
    if (!document.getElementById(this.styleId)) {
      const script = document.createElement('script');
      script.id = this.styleId;
      script.src = `/${primengBundle}.js`;
      script.onload =
        () => this.loading = false;
      document.head.appendChild(script);
    } else {
      this.loading = false;
    }
  }

  /**
   * remove primeng styles
   */
  destroyStyles() {
    const script = document.getElementById(this.styleId);
    if (script) {
      document.head.removeChild(script);
    }
  }
}
