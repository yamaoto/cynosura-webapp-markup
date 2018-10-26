import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuItem } from '../../core/models/menu.model';
import { AuthService } from '../../core/services/auth.service';
import { MenuService } from '../../core/services/menu.service';
import { writeError } from 'src/app/core/logger';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less']
})
export class SideMenuComponent implements OnInit, AfterViewInit {

  root: MenuItem;

  constructor(
    private authService: AuthService,
    private menuService: MenuService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.authService.state$.subscribe(() => {
      this.loadMenu();
    });
  }

  loadMenu() {
    this.menuService.getMenu()
    .then((data) => {
      this.root = data;
    })
    .catch((error) => {
      writeError('MainWrapComponent.loadMenu', error);
      this.root = null;
    });
  }

}
