import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyComponentsModule } from './components/components-agency.module';
import { AgencyListComponent } from './pages/agency-list/agency-list.component';
import { AgencyDetailComponent } from './pages/agency-detail/agency-detail.component';
import { AgencyComponent } from './agency.component';
import { AgencyService } from './services/agency.service';
import { StoreModule } from '@ngrx/store';
import { agencyReducer } from './store/agency-reducers';
import { EffectsModule } from '@ngrx/effects';
import { AgencyEffects } from './store/agency-effects';

@NgModule({
  declarations: [AgencyComponent, AgencyListComponent, AgencyDetailComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('agency', agencyReducer),
    EffectsModule.forFeature([AgencyEffects]),
    AgencyRoutingModule,
    AgencyComponentsModule,
  ],
  providers: [AgencyService],
})
export class AgencyModule {}
