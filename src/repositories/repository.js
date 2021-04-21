import axios from 'axios';
import store from '@/store/';
import { SET_LOADER } from '@/store/types/mutation-types';

const baseURL = 'https://pokeapi.co/api/v2/';

const Repository = axios.create({
  baseURL,
});
Repository.interceptors.request.use((req) => {
  store.commit(SET_LOADER, true);
  return req;
}, () => {
  store.commit(SET_LOADER, false);
});

Repository.interceptors.response.use((res) => {
  store.commit(SET_LOADER, false);
  return res;
}, () => {
  store.commit(SET_LOADER, false);
});

export { Repository };
