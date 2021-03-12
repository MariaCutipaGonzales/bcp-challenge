import { Component, OnInit } from '@angular/core';
import { AgencyStoreService } from './services/agency-store.service';

@Component({
  selector: 'mg-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss'],
})
export class AgencyComponent implements OnInit {
  constructor(private agencyStoreService: AgencyStoreService) {}

  ngOnInit(): void {
    this.agencyStoreService.initSync();
  }
}
