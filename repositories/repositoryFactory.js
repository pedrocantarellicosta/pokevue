import pokemon from './pokemonRepository';

const repositories = {
  pokemon,
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
