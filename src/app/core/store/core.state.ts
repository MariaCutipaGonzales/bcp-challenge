import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { SharedReducer } from './shared/shared.reducer';
import { SharedState } from './shared/shared.state';

export interface AppState {
  ['shared']: SharedState;
  router: RouterReducerState;
}

export const appReducer = {
  ['shared']: SharedReducer,
  router: routerReducer,
};
