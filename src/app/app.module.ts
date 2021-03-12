import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@core/core.module';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from '@shared/shared.module';
import { environment } from '@env';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: environment.MAPS_KEY,
    }),
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
