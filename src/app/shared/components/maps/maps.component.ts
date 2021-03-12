import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Agency } from '@core/models/agency-model';
import { Observable } from 'rxjs';


@Component({
  selector: 'mg-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  lat = -12.0862401;
  lng = -77.030033;
  zoom = 8;
  @Input() draggable = false;
  @Input() list: any;

  @Output() marker: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  markerDragEnd(location: Agency, $event: any) {
    this.marker.emit({latitude: $event.latLng.lat(), longitude: $event.latLng.lng()})
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
}
