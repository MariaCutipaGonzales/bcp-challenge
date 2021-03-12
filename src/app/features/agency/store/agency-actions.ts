import { Agency } from '@core/models/agency-model';
import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

export enum AgencyActions {
  load = '[AGENCY] load agency state',
  loadSuccess = '[AGENCY] load agencies success',
  update = '[AGENCY] update agency',
  updateSuccess = '[AGENCY] update agency success',
  loadAgencyLocal = '[AGENCY] load from local',
}

export const loadAgency = createAction(AgencyActions.loadSuccess);

export const loadAgencySuccess = createAction(
  AgencyActions.load,
  props<{ agencies: Array<Agency> }>()
);

export const loadAgencyLocal = createAction(
  AgencyActions.loadAgencyLocal,
  props<{ agencies: Array<Agency> }>()
);

export const updateAgency = createAction(
  AgencyActions.update,
  props<{ agencies: Update<Agency> }>()
);

export const dummyAction = createAction('[dummy action]');
