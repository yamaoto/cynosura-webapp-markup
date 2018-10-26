import { Routes } from '@angular/router';
import { RoleComponent } from './role.component';
import { RoleEditorComponent } from './role-editor.component';

export const routes: Routes = [
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'role/:id',
    component: RoleEditorComponent
  }
];
