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
    path: 'honorific',
    loadChildren: () => import('./honorific/honorific.module').then( m => m.HonorificPageModule)
  },
  {
    path: 'greetings',
    loadChildren: () => import('./greetings/greetings.module').then( m => m.GreetingsPageModule)
  },
  {
    path: 'body-parts',
    loadChildren: () => import('./body-parts/body-parts.module').then( m => m.BodyPartsPageModule)
  },
  {
    path: 'ka',
    loadChildren: () => import('./ka/ka.module').then( m => m.KaPageModule)
  },
  {
    path: 'kha',
    loadChildren: () => import('./kha/kha.module').then( m => m.KhaPageModule)
  },
  {
    path: 'ga',
    loadChildren: () => import('./ga/ga.module').then( m => m.GaPageModule)
  },
  {
    path: 'nga',
    loadChildren: () => import('./nga/nga.module').then( m => m.NgaPageModule)
  },
  {
    path: 'cha',
    loadChildren: () => import('./cha/cha.module').then( m => m.ChaPageModule)
  },
  {
    path: 'chha',
    loadChildren: () => import('./chha/chha.module').then( m => m.ChhaPageModule)
  },
  {
    path: 'ja',
    loadChildren: () => import('./ja/ja.module').then( m => m.JaPageModule)
  },
  {
    path: 'nya',
    loadChildren: () => import('./nya/nya.module').then( m => m.NyaPageModule)
  },
  {
    path: 'ta',
    loadChildren: () => import('./ta/ta.module').then( m => m.TaPageModule)
  },
  {
    path: 'tha',
    loadChildren: () => import('./tha/tha.module').then( m => m.ThaPageModule)
  },
  {
    path: 'dha',
    loadChildren: () => import('./dha/dha.module').then( m => m.DhaPageModule)
  },
  {
    path: 'na',
    loadChildren: () => import('./na/na.module').then( m => m.NaPageModule)
  },
  {
    path: 'pa',
    loadChildren: () => import('./pa/pa.module').then( m => m.PaPageModule)
  },
  {
    path: 'pha',
    loadChildren: () => import('./pha/pha.module').then( m => m.PhaPageModule)
  },
  {
    path: 'ba',
    loadChildren: () => import('./ba/ba.module').then( m => m.BaPageModule)
  },
  {
    path: 'ma',
    loadChildren: () => import('./ma/ma.module').then( m => m.MaPageModule)
  },
  {
    path: 'tsa',
    loadChildren: () => import('./tsa/tsa.module').then( m => m.TsaPageModule)
  },
  {
    path: 'tsha',
    loadChildren: () => import('./tsha/tsha.module').then( m => m.TshaPageModule)
  },
  {
    path: 'dza',
    loadChildren: () => import('./dza/dza.module').then( m => m.DzaPageModule)
  },
  {
    path: 'wa',
    loadChildren: () => import('./wa/wa.module').then( m => m.WaPageModule)
  },
  {
    path: 'zha',
    loadChildren: () => import('./zha/zha.module').then( m => m.ZhaPageModule)
  },
  {
    path: 'za',
    loadChildren: () => import('./za/za.module').then( m => m.ZaPageModule)
  },
  {
    path: 'yaah',
    loadChildren: () => import('./yaah/yaah.module').then( m => m.YaahPageModule)
  },
  {
    path: 'ya',
    loadChildren: () => import('./ya/ya.module').then( m => m.YaPageModule)
  },
  {
    path: 'ra',
    loadChildren: () => import('./ra/ra.module').then( m => m.RaPageModule)
  },
  {
    path: 'la',
    loadChildren: () => import('./la/la.module').then( m => m.LaPageModule)
  },
  {
    path: 'sha',
    loadChildren: () => import('./sha/sha.module').then( m => m.ShaPageModule)
  },
  {
    path: 'sa',
    loadChildren: () => import('./sa/sa.module').then( m => m.SaPageModule)
  },
  {
    path: 'ha',
    loadChildren: () => import('./ha/ha.module').then( m => m.HaPageModule)
  },
  {
    path: 'aah',
    loadChildren: () => import('./aah/aah.module').then( m => m.AahPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
