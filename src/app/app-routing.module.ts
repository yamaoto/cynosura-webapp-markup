import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'application',
    loadChildren: './modules/application/application.module#ApplicationModule',
  },
  {
    path: '',
    loadChildren: './modules/front/front.module#FrontModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
