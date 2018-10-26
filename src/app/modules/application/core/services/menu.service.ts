import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MenuItem } from '../models/menu.model';

@Injectable()
export class MenuService {
    private menuUrl = '/api/menu';

    constructor(private httpClient: HttpClient) { }

    getMenu(): Promise<MenuItem> {
        return this.httpClient.get<MenuItem>(this.menuUrl)
            .toPromise();
    }
}
