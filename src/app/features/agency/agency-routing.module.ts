import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyDetailComponent } from './pages/agency-detail/agency-detail.component';
import { AgencyListComponent } from './pages/agency-list/agency-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: AgencyListComponent,
  },
  {
    path: 'detail',
    component: AgencyDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
