import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './components/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [MapsComponent, LoaderComponent],
  exports: [MapsComponent, LoaderComponent],
  imports: [CommonModule, AgmCoreModule],
})
export class SharedModule {}
