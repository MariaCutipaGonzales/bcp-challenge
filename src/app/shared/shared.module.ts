import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './components/maps/maps.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [MapsComponent],
  exports: [MapsComponent],
  imports: [CommonModule, AgmCoreModule],
})
export class SharedModule {}
