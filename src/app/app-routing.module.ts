import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'learn',
    loadChildren: () => import('./learn/learn.module').then( m => m.LearnPageModule)
  },
  {
    path: 'yang-zhi',
    loadChildren: () => import('./yang-zhi/yang-zhi.module').then( m => m.YangZhiPageModule)
  },
  {
    path: 'dhog-chen',
    loadChildren: () => import('./dhog-chen/dhog-chen.module').then( m => m.DhogChenPageModule)
  },
  {
    path: 'la-ta',
    loadChildren: () => import('./la-ta/la-ta.module').then( m => m.LaTaPageModule)
  },
  {
    path: 'ra-ta',
    loadChildren: () => import('./ra-ta/ra-ta.module').then( m => m.RaTaPageModule)
  },
  {
    path: 'wa-ta',
    loadChildren: () => import('./wa-ta/wa-ta.module').then( m => m.WaTaPageModule)
  },
  {
    path: 'ya-ta',
    loadChildren: () => import('./ya-ta/ya-ta.module').then( m => m.YaTaPageModule)
  },
  {
    path: 'jang-kha',
    loadChildren: () => import('./jang-kha/jang-kha.module').then( m => m.JangKhaPageModule)
  },  {
    path: 'go-chen',
    loadChildren: () => import('./go-chen/go-chen.module').then( m => m.GoChenPageModule)
  },
  {
    path: 'la-go',
    loadChildren: () => import('./la-go/la-go.module').then( m => m.LaGoPageModule)
  },
  {
    path: 'ra-go',
    loadChildren: () => import('./ra-go/ra-go.module').then( m => m.RaGoPageModule)
  },
  {
<<<<<<< HEAD
    path: 'sa-go',
    loadChildren: () => import('./sa-go/sa-go.module').then( m => m.SaGoPageModule)
=======
    path: 'jang-kha',
    loadChildren: () => import('./jang-kha/jang-kha.module').then( m => m.JangKhaPageModule)
  },
  {
    path: 'za-dhuen',
    loadChildren: () => import('./za-dhuen/za-dhuen.module').then( m => m.ZaDhuenPageModule)
  },
  {
    path: 'colours',
    loadChildren: () => import('./colours/colours.module').then( m => m.ColoursPageModule)
>>>>>>> 6ad9c3d0a73ed03d6bed6a13e036e0b16f75c5f9
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
