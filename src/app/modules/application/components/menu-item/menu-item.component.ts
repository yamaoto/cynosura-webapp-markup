import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { MenuItem } from '../../core/models/menu.model';
import { AuthService } from '../../core/services/auth.service';
import { MenuService } from '../../core/services/menu.service';
import { writeError } from 'src/app/core/logger';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less']
})
export class MenuItemComponent {

  @Input()
  item: MenuItem;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  open(route: string) {
    this.router.navigateByUrl(this.normalize(route));
  }

  normalize(route: string) {
    return route === '' ? '/application' : `/application/${route}`;
  }

  isActive(route: string): boolean {
    // return this.route.pathFromRoot.some((s) => s.toString().indexOf(route) !== -1);
    return window.location.pathname.indexOf(this.normalize(route)) !== -1;
  }
}
