import { Component, OnInit, AfterViewInit, NgZone, OnDestroy } from '@angular/core';
import * as axios from 'axios';

@Component({
  selector: 'app-front-home',
  templateUrl: './front-home.component.html',
  styleUrls: ['./front-home.component.less']
})
export class FrontHomeComponent implements OnInit, AfterViewInit, OnDestroy {

  noise = 'https://media.giphy.com/media/5H8bRxo2JgskE/giphy.gif';
  giphyCollection: any[];
  giphyPosition = 0;
  giphyCurrent: string;
  timeout: number;

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.giphyCurrent = this.noise;
  }

  ngAfterViewInit(): void {
    this.getNextGif();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }

  scrollToElement($element): void {
    $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  getNextPosition(): Promise<void> {
    if (this.giphyPosition >= this.giphyCollection.length) {
      this.giphyPosition = 0;
    } else {
      this.giphyPosition++;
    }
    return new Promise((resolve) => {
      this.timeout = setTimeout(() => resolve(), 500);
    });
  }

  getNextGif() {
    this.loadGiphy()
      .then(() => {
        this.giphyCurrent = this.noise;
        return this.getNextPosition();
      })
      .then(() => {
        this.zone.run(() => this.giphyCurrent = this.giphyCollection[this.giphyPosition].images.original.url);
        this.timeout = setTimeout(() => this.getNextGif(), 5000);
      });
  }

  loadGiphy(): Promise<void> {
    const apiKey = 'd5YOtIvbiKwIOKxSj9SciC9bfP2jgTpI';
    const search = encodeURIComponent('star pixel');
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}`;
    if (!this.giphyCollection) {
      return axios.default.get(url)
        .then((res) => {
          this.giphyCollection = res.data.data;
        });
    }
    return Promise.resolve();
  }
}
