import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PublicationsComponent } from './pages/publications-list/publications.component';
import { PublicationComponent } from './pages/publication/publication.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'publicacoes',
    component: PublicationsComponent,
  },
  {
    path: 'publicacao',
    component: PublicationComponent,
  },
];
