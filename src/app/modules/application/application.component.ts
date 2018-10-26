import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.less']
})
export class ApplicationComponent implements OnInit, OnDestroy {

  styleId = 'application-style';
  loading = true;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.init();
    this.loadStyles();
  }

  ngOnDestroy(): void {
    this.destroyStyles();
  }

  /**
   * loading preconfigured bundle with material styles
   * for application only
   */
  loadStyles() {
    const materialBundle = 'material';
    if (!document.getElementById(this.styleId)) {
      const script = document.createElement('script');
      script.id = this.styleId;
      script.src = `/${materialBundle}.js`;
      script.onload =
        () => this.loading = false;
      document.head.appendChild(script);
    } else {
      this.loading = false;
    }
  }

  /**
   * remove material styles
   */
  destroyStyles() {
    const script = document.getElementById(this.styleId);
    if (script) {
      document.head.removeChild(script);
    }
  }
}
