import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'basic',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../basic/basic.module').then(m => m.BasicPageModule)
          }
        ]
      },
      {
        path: 'upgraded',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../upgraded/upgraded.module').then(m => m.UpgradedPageModule)
          }
        ]
      },
      {
        path: 'neutral',
        children :[
          {
            path: '',
            loadChildren: () =>
            import('../neutral/neutral.module').then(m => m.NeutralPageModule)
          }
        ]
      },
      {
        path: 'heroes',
        children :[
          {
            path: '',
            loadChildren: () =>
            import('../heroes/heroes.module').then(m => m.HeroesPageModule)
          }
        ]
      },
      {
        path: 'townportal',
        children :[
          {
            path: '',
            loadChildren: () =>
            import('../item/townportal/townportal.module').then(m => m.TownportalPageModule)
          }
        ]
      },
      {
        path: 'magicwand',
        children :[
          {
            path: '',
            loadChildren: () =>
            import('../item/magicwand/magicwand.module').then(m => m.MagicwandPageModule)
          }
        ]
      },
      {
        path: 'magicstick',
        children :[
          {
            path: '',
            loadChildren: () =>
            import('../item/magicstick/magicstick.module').then(m => m.MagicstickPageModule)
          }
        ]
      },
      {
        path: 'arcanering',
        children :[
          {
            path: '',
            loadChildren: () =>
            import('../item/arcanering/arcanering.module').then(m => m.ArcaneringPageModule)
          }
        ]
      },
      {
        path: 'abaddon',
        children :[
          {
            path: '',
            loadChildren: () =>
            import('../heroespages/abaddon/abaddon.module').then(m => m.AbaddonPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
