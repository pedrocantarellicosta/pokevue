import { Repository } from './repository';

const MAX_POKEMONS = 150;
const resource = (path = '') => `/pokemon${path}`;

export default {
  async list() {
    return Repository.get(resource(`?limit=${MAX_POKEMONS}`));
  },
  async getByName(name) {
    return Repository.get(resource(`/${name}`));
  },
  async getById(id) {
    return Repository.get(resource(`/${id}`));
  },
};
