import { Component, OnInit, HostListener, ElementRef, AfterViewInit, ViewChild, AfterContentInit } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { throttleTime, map, pairwise } from 'rxjs/operators';
@Component({
  selector: 'app-main-wrap',
  templateUrl: './main-wrap.component.html',
  styleUrls: ['./main-wrap.component.less']
})
export class MainWrapComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild('menu') menu: ElementRef;
  @ViewChild('inner') inner: ElementRef;

  scroll: number;
  sticky = false;
  endSticky = false;
  endStickyY = 0;

  constructor(
    private element: ElementRef,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit(): void {
    const scroll$ = fromEvent(window, 'scroll')
      // const scroll$ = fromEvent(this.inner.nativeElement, 'scroll')
      .pipe(
        throttleTime(15),
        // map((event) => this.inner.nativeElement.scrollTop)
        map((event) => window.scrollY)
      ).subscribe((data) => {
        this.scroll = data;
        const scrollLimit = this.inner.nativeElement.offsetTop + this.inner.nativeElement.offsetHeight - this.menu.nativeElement.offsetHeight;
        this.endSticky = this.scroll > scrollLimit;
        this.endStickyY = this.endSticky ? scrollLimit - this.inner.nativeElement.offsetTop : 0;
        this.sticky = this.endSticky ? false : this.scroll >= this.inner.nativeElement.offsetTop;
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
  }
}
