import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';

const routes: Routes = [
  {
    path: 'catalogue',
    component:CatalogueComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { 
   path: 'burger/:id', 
   component: DetailBurgerComponent
 },
  {
    path: '',
    redirectTo: 'catalogue',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
