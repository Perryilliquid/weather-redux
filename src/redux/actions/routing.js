import { push, replace  } from 'connected-react-router';

export function goTo(url) {
  return (dispatch, getState) => {
    dispatch(push(url, { from: getState().router.location }));
  };
}

export function attachQuery(queryObj) {
    return (dispatch, getState) => {
        const state = getState();
        const pathname = state.router.location.pathname;

        const query = Object.keys(queryObj)
            .filter(key => !!queryObj[key])
            .map(key => `${key}=${queryObj[key]}`)
            .join('&');

        if (query) {
            dispatch(replace(`${pathname}?${query}`))
        } else if(state.router.location.search){
            dispatch(replace(pathname));
        }
    }
}
