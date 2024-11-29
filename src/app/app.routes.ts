import { Routes } from '@angular/router';
import { ResponsiveComponent } from './responsive/responsive.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'responsive',
    pathMatch: 'full',
  },
  {
    path: 'responsive',
    component: ResponsiveComponent,
  },
  {
    path: 'priority',
    loadComponent: () => import('./priority/priority.component')
      .then(c => c.PriorityComponent),
  },
  {
    path: 'placeholder',
    loadComponent: () => import('./placeholder/placeholder.component')
      .then(c => c.PlaceholderComponent),
  },
  {
    path: 'fill',
    loadComponent: () => import('./fill/fill.component')
      .then(c => c.FillComponent),
  },
  {
    path: 'demo',
    loadComponent: () => import('./demo/demo.component')
      .then(c => c.DemoComponent),
  },
];
