import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';

import { RoleComponent } from './role.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RoleEditorComponent } from './role-editor.component';
import { RoleCoreModule } from '../../role-core/role-core.module';

@NgModule({
    imports: [
        CommonModule,
        RoleCoreModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule
    ],
    exports: [
    ],
    declarations: [
        RoleComponent,
        RoleEditorComponent
    ]
})
export class RoleModule { }
