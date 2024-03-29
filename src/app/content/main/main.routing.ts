import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ContactsComponent } from '../contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
