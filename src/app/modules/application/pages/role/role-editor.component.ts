import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../role-core/role.service';
import { ActivatedRoute } from '@angular/router';
import { Role } from '../../role-core/role.model';
import { writeError } from 'src/app/core/logger';

@Component({
  selector: 'app-role-editor',
  templateUrl: './role-editor.component.html',
  styleUrls: ['./role-editor.component.less']
})
export class RoleEditorComponent implements OnInit {
  header = 'Role';
  id: any;
  data: Role;

  constructor(
    private route: ActivatedRoute,
    private roleService: RoleService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params.id;
      this.load();
    });
  }

  private load() {
    this.roleService.getRole(this.id)
      .then((data) => this.data = data)
      .catch((error) => writeError);
  }
}
