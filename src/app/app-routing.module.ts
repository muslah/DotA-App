import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./dota/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./dota/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'basic',
    loadChildren: () => import('./dota/basic/basic.module').then( m => m.BasicPageModule)
  },
  {
    path: 'upgraded',
    loadChildren: () => import('./dota/upgraded/upgraded.module').then( m => m.UpgradedPageModule)
  },
  {
    path: 'neutral',
    loadChildren: () => import('./dota/neutral/neutral.module').then( m => m.NeutralPageModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import('./dota/heroes/heroes.module').then( m => m.HeroesPageModule)
  },
  {
    path: 'townportal',
    loadChildren: () => import('./dota/item/townportal/townportal.module').then( m => m.TownportalPageModule)
  },
  {
    path: 'magicwand',
    loadChildren: () => import('./dota/item/magicwand/magicwand.module').then( m => m.MagicwandPageModule)
  },
  {
    path: 'magicstick',
    loadChildren: () => import('./dota/item/magicstick/magicstick.module').then( m => m.MagicstickPageModule)
  },
  {
    path: 'arcanering',
    loadChildren: () => import('./dota/item/arcanering/arcanering.module').then( m => m.ArcaneringPageModule)
  },
  {
    path: 'abaddon',
    loadChildren: () => import('./dota/heroespages/abaddon/abaddon.module').then( m => m.AbaddonPageModule)
  },
  {
    path: 'stormspirit',
    loadChildren: () => import('./dota/heroespages/stormspirit/stormspirit.module').then( m => m.StormspiritPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
