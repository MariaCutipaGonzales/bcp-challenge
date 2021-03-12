import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env';

import { HeaderComponent } from './components/header/header.component';
import { CustomSerializer } from './store/router/custom-serializer';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './store/core.state';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent, StoreRouterConnectingModule],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
  ],
})
export class CoreModule {}
