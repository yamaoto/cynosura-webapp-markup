import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.less']
})
export class FrontComponent implements OnInit, OnDestroy {

  styleId = 'front-style';
  loading = true;

  constructor() { }

  ngOnInit() {
    this.loadStyles();
  }

  ngOnDestroy(): void {
    this.destroyStyles();
  }

  /**
   * loading preconfigured bundle with skeleton styles
   * for front only
   */
  loadStyles() {
    const skeletonBundle = 'skeleton';
    if (!document.getElementById(this.styleId)) {
      const script = document.createElement('script');
      script.id = this.styleId;
      script.src = `/${skeletonBundle}.js`;
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
