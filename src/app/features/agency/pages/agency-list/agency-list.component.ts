import { Component, OnDestroy, OnInit } from '@angular/core';
import { Agency } from '@core/models/agency-model';
import { Subscription } from 'rxjs';
import { AgencyService } from '../../services/agency.service';

@Component({
  selector: 'mg-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss'],
})
export class AgencyListComponent implements OnInit, OnDestroy {
  public agenciesList: Array<Agency> = [];
  private agencySubscription: Subscription = new Subscription();
  constructor(private agencyService: AgencyService) {}

  ngOnInit(): void {
    this.agencySubscription = this.agencyService.getList().subscribe((data) => {
      this.agenciesList = data;
    });
  }

  ngOnDestroy(): void {
    this.agencySubscription.unsubscribe();
  }

  goToDetail(agencyInfo: Agency) {
    console.log(agencyInfo);
  }
}
