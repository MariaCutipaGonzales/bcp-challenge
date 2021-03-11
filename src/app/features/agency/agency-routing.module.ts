import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './agency.component';
import { AgencyDetailComponent } from './pages/agency-detail/agency-detail.component';
import { AgencyListComponent } from './pages/agency-list/agency-list.component';

const routes: Routes = [
  {
    path: '',
    component: AgencyComponent,
    children: [
      {
        path: 'list',
        component: AgencyListComponent,
        data: { title: 'Agencias' },
      },
      {
        path: 'detail',
        component: AgencyDetailComponent,
        data: { title: 'Detalle de Agencia' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencyRoutingModule {}
