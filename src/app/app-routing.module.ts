import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyModule } from './features/agency/agency.module';

const routes: Routes = [
  {
    path: 'agency',
    component: AgencyModule,
    loadChildren: () =>
      import('./features/agency/agency.module').then((m) => m.AgencyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
