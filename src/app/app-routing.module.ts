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
  },
  {
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
    path: 'sa-go',
    loadChildren: () => import('./sa-go/sa-go.module').then( m => m.SaGoPageModule)
  },
  {
    path: 'colours',
    loadChildren: () => import('./colours/colours.module').then( m => m.ColoursPageModule)
  },
  {
    path: 'za-dhuen',
    loadChildren: () => import('./za-dhuen/za-dhuen.module').then( m => m.ZaDhuenPageModule)
  },
  {
    path: 'vegetables',
    loadChildren: () => import('./vegetables/vegetables.module').then( m => m.VegetablesPageModule)
  },
  {
    path: 'fruits',
    loadChildren: () => import('./fruits/fruits.module').then( m => m.FruitsPageModule)
  },
  {
    path: 'level-one',
    loadChildren: () => import('./level-one/level-one.module').then( m => m.LevelOnePageModule)
  },
{
    path: 'd-animals',
    loadChildren: () => import('./d-animals/d-animals.module').then( m => m.DAnimalsPageModule)
  },
  {
    path: 'w-animals',
    loadChildren: () => import('./w-animals/w-animals.module').then( m => m.WAnimalsPageModule)
  },
  {
    path: 'instructions',
    loadChildren: () => import('./instructions/instructions.module').then( m => m.InstructionsPageModule)
  },
  {
    path: 'birds',
    loadChildren: () => import('./birds/birds.module').then( m => m.BirdsPageModule)
  },
  {
    path: 'flowers',
    loadChildren: () => import('./flowers/flowers.module').then( m => m.FlowersPageModule)
  },
  {
    path: 'utensils',
    loadChildren: () => import('./utensils/utensils.module').then( m => m.UtensilsPageModule)
  },
  {
    path: 'foods',
    loadChildren: () => import('./foods/foods.module').then( m => m.FoodsPageModule)
  },
  {
    path: 'drinks',
    loadChildren: () => import('./drinks/drinks.module').then( m => m.DrinksPageModule)
  },
  {
    path: 'phonium',
    loadChildren: () => import('./phonium/phonium.module').then( m => m.PhoniumPageModule)
  },  {
    path: 'level-two',
    loadChildren: () => import('./level-two/level-two.module').then( m => m.LevelTwoPageModule)
  },
  {
    path: 'level-three',
    loadChildren: () => import('./level-three/level-three.module').then( m => m.LevelThreePageModule)
  },
  {
    path: 'level-four',
    loadChildren: () => import('./level-four/level-four.module').then( m => m.LevelFourPageModule)
  },
  {
    path: 'level-five',
    loadChildren: () => import('./level-five/level-five.module').then( m => m.LevelFivePageModule)
  },
  {
    path: 'level-six',
    loadChildren: () => import('./level-six/level-six.module').then( m => m.LevelSixPageModule)
  },
  {
    path: 'level-seven',
    loadChildren: () => import('./level-seven/level-seven.module').then( m => m.LevelSevenPageModule)
  },
  {
    path: 'level-eight',
    loadChildren: () => import('./level-eight/level-eight.module').then( m => m.LevelEightPageModule)
  },
  {
    path: 'level-nine',
    loadChildren: () => import('./level-nine/level-nine.module').then( m => m.LevelNinePageModule)
  },
  {
    path: 'level-ten',
    loadChildren: () => import('./level-ten/level-ten.module').then( m => m.LevelTenPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
