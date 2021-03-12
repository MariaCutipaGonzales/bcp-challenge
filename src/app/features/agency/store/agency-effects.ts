import { Injectable } from '@angular/core';
import { Agency } from '@core/models/agency-model';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { RouterNavigatedAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  filter,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { AgencyService } from '../services/agency.service';
import { dummyAction, loadAgency, loadAgencySuccess } from './agency-actions';
import { getAgency } from './agency-selectors';

@Injectable()
export class AgencyEffects {
  constructor(
    private actions$: Actions,
    private agencyService: AgencyService,
    private store: Store<any>
  ) {}

  loadAgency$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAgency),
      withLatestFrom(this.store.select(getAgency)),
      mergeMap(([action, agencies]) => {
        if (!agencies.length || agencies.length === 1) {
          return this.agencyService.getList().pipe(
            map((agencies) => {
              return loadAgencySuccess({ agencies });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
}
