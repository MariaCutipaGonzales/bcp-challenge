import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Agency } from '@core/models/agency-model';
import { AppState } from '@core/store/core/core-app.state';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { updateAgency } from '../../store/agency-actions';
import { getAgencyById } from '../../store/agency-selectors';

@Component({
  selector: 'mg-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss'],
})
export class AgencyDetailComponent implements OnInit, OnDestroy {
  agency: Agency[] = [];
  agencyFormUpdate: FormGroup;
  agencySubscription: Subscription = new Subscription();
  constructor(private store: Store<AppState>, private router: Router) {
    this.agencyFormUpdate = new FormGroup({
      agencia: new FormControl(null, [Validators.required]),
      distrito: new FormControl(null, [Validators.required]),
      provincia: new FormControl(null, [Validators.required]),
      departamento: new FormControl(null, [Validators.required]),
      direccion: new FormControl(null, [Validators.required]),
      lat: new FormControl(null, [Validators.required]),
      lon: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.agencySubscription = this.store
      .select(getAgencyById)
      .subscribe((agency) => {
        if (agency) {
          this.agency.pop();
          this.agency.push(agency);
          this.initForm(agency);
        }
      });
  }

  ngOnDestroy(): void {
    this.agencySubscription.unsubscribe();
  }

  initForm(stateForm: Agency) {
    this.agencyFormUpdate.patchValue(stateForm);
  }

  onSubmit() {
    console.log('onSubmit', this.agency);
    if (this.agencyFormUpdate.valid) {
      const valueAgency = this.agencyFormUpdate.value as Agency;
      this.store.dispatch(
        updateAgency({
          agencies: {
            id: this.agency[0].id,
            changes: {
              ...valueAgency,
            },
          },
        })
      );

      this.router.navigate(['/agency']);
    }
  }

  updateLocationAgency(location: {latitude: string, longitude: string}) {
    this.agencyFormUpdate.patchValue({
      lat: location.latitude,
      lon: location.longitude
    });
  }
}
