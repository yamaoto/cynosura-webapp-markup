import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ConditionalModuleLoader } from './core/conditional-module-loader';

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
  // imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: ConditionalModuleLoader })],
  providers: [ConditionalModuleLoader],
  exports: [RouterModule]
})
export class AppRoutingModule { }
