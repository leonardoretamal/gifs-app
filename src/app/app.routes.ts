import { Routes } from '@angular/router';

export const routes: Routes = [
  /* {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page').then(
      (C) => C.DashboardPage manera fea
    ) importación de manera perezosa
  } */

  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page'),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending-page/trending-page'),
      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search-page/search-page'),
      },
      {
        path: 'history/:query',
        loadComponent: () => import('./gifs/pages/gif-history/gif-history'),
      },
      {
        path:'**',
        redirectTo:'trending'
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
