import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { AgmCoreModule } from '@agm/core';
import { AlertModule } from 'ngx-bootstrap/alert';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGepzv727c0IRl9FtlIk3z860m-I82D10',
    }),
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
