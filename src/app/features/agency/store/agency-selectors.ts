import { RouterStateUrl } from '@core/store/router/custom-serializer';
import { getCurrentRoute } from '@core/store/router/router.selector';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AgencyAdapter, AgencyState } from './agency-state';

export const getAgencyState = createFeatureSelector<AgencyState>('agency');

export const agencySelectors = AgencyAdapter.getSelectors();
export const getAgency = createSelector(
  getAgencyState,
  agencySelectors.selectAll
);
export const getAgencyEntities = createSelector(
  getAgencyState,
  agencySelectors.selectEntities,
);

export const getAgencyById = createSelector(
  getAgencyEntities,
  getCurrentRoute,
  (posts, route: RouterStateUrl) => {
    return posts ? posts[route.params.id] : null;
  }
);
