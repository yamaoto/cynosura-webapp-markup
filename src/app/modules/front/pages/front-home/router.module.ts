import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontHomeComponent } from './front-home.component';
const routes: Routes = [
  {
    path: '',
    component: FrontHomeComponent,
    outlet: 'front'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontHomeRoutingModule { }
