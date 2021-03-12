import { createReducer, on } from '@ngrx/store';
import { loadAgencyLocal, loadAgencySuccess, updateAgency } from './agency-actions';
import { AgencyAdapter, initialState } from './agency-state';

const _agencyReducer = createReducer(
  initialState,
  on(updateAgency, (state, action) => {
    return AgencyAdapter.updateOne(action.agencies,
      state
    );
  }),
  on(loadAgencySuccess, (state, action) => {
    return AgencyAdapter.setAll(action.agencies, {
      ...state,
    });
  }),
  on(loadAgencyLocal, (state, action) => {
    return AgencyAdapter.setAll(action.agencies,
      state
    );
  })
);

export function agencyReducer(state: any, action: any) {
  return _agencyReducer(state, action);
}
