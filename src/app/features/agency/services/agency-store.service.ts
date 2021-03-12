import { Injectable } from '@angular/core';
import { LOCALSTORAGE_KEY } from '@core/models/agency-model';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { loadAgencyLocal } from '../store/agency-actions';
import { getAgencyState } from '../store/agency-selectors';
import { AgencyState } from '../store/agency-state';

@Injectable({ providedIn: 'root' })
export class AgencyStoreService {
  private isInit = false;
  constructor(private store$: Store<AgencyState>) {}

  initSync() {
    if (this.isInit) {
      return;
    }
    this.isInit = true;
    this.loadAgencyFromLocalStore();

    this.store$
      .pipe(
        select(getAgencyState),
        filter((state) => !!state)
      )
      .subscribe((state) => {
        localStorage.setItem(LOCALSTORAGE_KEY.AGENCY, JSON.stringify(state));
      });

    window.addEventListener('storage', () => this.loadAgencyFromLocalStore());
  }

  loadAgencyFromLocalStore() {
    const storageState = localStorage.getItem(LOCALSTORAGE_KEY.AGENCY);
    if (storageState) {
      const { entities, ids } = JSON.parse(storageState);
      const agenciesUpdate = [];
      if (ids.length) {
        for (const key in entities) {
          agenciesUpdate.push(entities[key]);
        }
        this.store$.dispatch(loadAgencyLocal({ agencies: agenciesUpdate }));
      }
    }
  }
}
