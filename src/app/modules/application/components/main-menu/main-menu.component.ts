import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.less']
})
export class MainMenuComponent implements OnInit {

    public items: any[];

    constructor() {}

    ngOnInit(): void {
    }
}
