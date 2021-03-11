import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyListComponent } from './pages/agency-list/agency-list.component';
import { AgencyDetailComponent } from './pages/agency-detail/agency-detail.component';

@NgModule({
  declarations: [AgencyListComponent, AgencyDetailComponent],
  imports: [CommonModule],
})
export class AgencyModule {}
