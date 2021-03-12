import { Component, OnDestroy, OnInit } from '@angular/core';
import { Agency } from '@core/models/agency-model';
import { setLoadingSpinner } from '@core/store/shared/shared.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadAgency } from '../../store/agency-actions';
import { getAgency } from '../../store/agency-selectors';

@Component({
  selector: 'mg-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss'],
})
export class AgencyListComponent implements OnInit, OnDestroy {
  public agenciesList: Observable<Agency[]> = new Observable<Agency[]>();
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.agenciesList = this.store.select(getAgency);
    this.store.dispatch(loadAgency());

    /** FAKE TIMEOUT API RESPONSE */
    setTimeout(() => {
      this.store.dispatch(setLoadingSpinner({ status: false }));
    }, 3000);
  }

  ngOnDestroy(): void {}
}
