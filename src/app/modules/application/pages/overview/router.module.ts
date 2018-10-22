import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview.component';

export const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    outlet: 'page'
  }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class OverviewRoutingModule { }
