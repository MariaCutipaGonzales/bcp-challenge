import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyInfoItemComponent } from './agency-info-item/agency-info-item.component';

@NgModule({
  declarations: [AgencyInfoItemComponent],
  exports: [AgencyInfoItemComponent],
  imports: [CommonModule],
})
export class AgencyComponentsModule {}
