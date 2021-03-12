import { Agency } from '@core/models/agency-model';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export const AgencyAdapter = createEntityAdapter<Agency>();

export interface AgencyState extends EntityState<Agency> {}

export const initialState: AgencyState = AgencyAdapter.getInitialState({});
