import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyListComponent } from './pages/agency-list/agency-list.component';
import { AgencyDetailComponent } from './pages/agency-detail/agency-detail.component';

@NgModule({
  declarations: [AgencyListComponent, AgencyDetailComponent],
  imports: [CommonModule, AgencyRoutingModule],
})
export class AgencyModule {}
