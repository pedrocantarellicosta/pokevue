import pokemon from './pokemonRepository';
import pokemonSpecies from './pokemonSpeciesRepository';

const repositories = {
  pokemon,
  pokemonSpecies,
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
