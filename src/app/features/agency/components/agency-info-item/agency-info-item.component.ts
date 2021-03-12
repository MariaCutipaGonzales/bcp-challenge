import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Agency } from '@core/models/agency-model';

@Component({
  selector: 'mg-agency-info-item',
  templateUrl: './agency-info-item.component.html',
  styleUrls: ['./agency-info-item.component.scss'],
})
export class AgencyInfoItemComponent implements OnInit {
  @Input() agency: Agency = {} as Agency;
  @Output() agencyInfo: EventEmitter<Agency> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
  }

  clickAgency() {
    this.agencyInfo.emit(this.agency);
  }
}
