import { Component, OnDestroy, OnInit } from '@angular/core';
import { Agency } from '@core/models/agency-model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AgencyStoreService } from '../../services/agency-store.service';
import { loadAgency } from '../../store/agency-actions';
import { getAgency } from '../../store/agency-selectors';

@Component({
  selector: 'mg-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss'],
})
export class AgencyListComponent implements OnInit, OnDestroy {
  public agenciesList: Observable<Agency[]> = new Observable<Agency[]>();
  constructor(private store: Store<any>, private agencyStoreService: AgencyStoreService) {}

  ngOnInit(): void {
    this.agencyStoreService.initSync();
    this.agenciesList = this.store.select(getAgency);
    this.store.dispatch(loadAgency());
  }

  ngOnDestroy(): void {}

  goToDetail(agencyInfo: Agency) {
    console.log(agencyInfo);
  }
}
