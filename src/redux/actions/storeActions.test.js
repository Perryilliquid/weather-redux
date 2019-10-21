import { noCallThru } from 'proxyquire';
import {
  PROFILE_FETCH_DETAILS
} from '../reducers/storeReducer';
import { FETCH_COMPLETE, FETCH_PENDING } from '../reducers/ajaxStatusReducer';
import { fetchProfileDetails, updateStoreProfile } from '../actions/storeActions';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  it('creates PROFILE_FETCH_DETAILS when fetching Store profile', () => {
    const store = mockStore({ });
    return store.dispatch(fetchProfileDetails(1)).then(() => {
      // return of async actions
      expect(store.getActions().filter(action => action.type === PROFILE_FETCH_DETAILS).length).toEqual(1)
    })
  });

  it('creates FETCH_COMPLETE when fetching Store profile has been done', () => {
    const store = mockStore({ });
    return store.dispatch(fetchProfileDetails(1)).then(() => {
      // return of async actions
      expect(store.getActions().filter(action => action.type === FETCH_COMPLETE).length).toEqual(1)
    })
  })

  it('creates FETCH_PENDING before fetching Store profile', () => {
    const store = mockStore({ });
    return store.dispatch(fetchProfileDetails(1)).then(() => {
      // return of async actions
      expect(store.getActions().filter(action => action.type === FETCH_PENDING).length).toEqual(1)
    })
  })
})