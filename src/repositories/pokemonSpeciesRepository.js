import { Repository } from './repository';

const resource = (path = '') => `/pokemon-species/${path}`;

export default {
  async get(id) {
    return Repository.get(resource(id));
  },
};
