export const SET_LOADING = '@@/loader/SET_LOADING';
export const SET_LOADED = '@@/loader/SET_LOADED';

export function setLoading() {
  return {
    type: SET_LOADING
  };
}

export function setLoaded() {
  return {
    type: SET_LOADED
  };
}