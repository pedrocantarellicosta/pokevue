import { Repository } from './repository';

const MAX_POKEMONS = 797;
const resource = (path = '') => `/pokemon${path}`;

export default {
  async list() {
    return Repository.get(resource(`?limit=${MAX_POKEMONS}`));
  },
  async getById(id) {
    return Repository.get(resource(`/${id}`));
  },
};
