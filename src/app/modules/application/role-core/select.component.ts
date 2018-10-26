import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Role } from './role.model';
import { RoleService } from './role.service';

@Component({
    selector: 'app-role-select',
    templateUrl: './select.component.html'
})

export class RoleSelectComponent implements OnInit {

    roles: Role[] = [];

    @Input()
    selectedRoleId?: number = null;

    @Output()
    selectedRoleIdChange = new EventEmitter<number>();

    @Input()
    readonly = false;

    constructor(private roleService: RoleService) { }

    ngOnInit(): void {
        this.roleService.getRoles().then((items) => this.roles = items.pageItems);
    }
}
