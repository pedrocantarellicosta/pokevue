<template>
  <div class="home">
    <pokemon-desktop v-if="windowSize > 740 && pokemonData" :pokemon="pokemonData" />
    <pokemon-mobile v-if="windowSize <= 740 && pokemonData" :pokemon="pokemonData" />

    <div class="home__paginate" :class="windowSize > 740 ? 'bottom' : 'top'">
      <select-number
        :current-page="selectedNumber"
        :page-count="lastPokemonId"
        :visible-pages-count="windowSize > 740 ? 12 : 6"
        @to-page="changeSelectedNumber"
        @next-page="changeSelectedNumber"
        @previous-page="changeSelectedNumber"
      />
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from '@/repositories/repositoryFactory';
import PokemonDesktop from '@/components/pokemon/desktop.vue';
import PokemonMobile from '@/components/pokemon/mobile.vue';
import SelectNumber from '@/components/layout/SelectNumber.vue';

export default {
  name: 'Home',
  data() {
    return {
      pokemonData: null,
      selectedNumber: 1,
      lastPokemonId: 150,
      pokemonRepository: RepositoryFactory.get('pokemon'),
      pokemonSpeciesRepository: RepositoryFactory.get('pokemonSpecies'),
      windowSize: window.innerWidth,
    };
  },
  components: {
    PokemonDesktop,
    PokemonMobile,
    SelectNumber,
  },
  async created() {
    window.addEventListener('resize', this.handlerWindowSize);
    const pokemonId = await parseInt(localStorage.getItem('pokemon-id'), 10);
    if (pokemonId) this.selectedNumber = pokemonId;
    this.updatePage();
  },
  unmounted() {
    window.removeEventListener('resize', this.handlerWindowSize);
  },
  watch: {
    selectedNumber: 'updatePage',
  },
  methods: {
    handlerWindowSize() {
      this.windowSize = window.innerWidth;
    },

    changeSelectedNumber(page) {
      let number = 0;
      switch (page) {
        case 'next':
          if (this.selectedNumber !== 150) number = 1;
          console.log(number);
          console.log(this.selectedNumber);
          this.selectedNumber += number;
          console.log(this.selectedNumber);
          break;
        case 'previous':
          if (this.selectedNumber !== 1) number = 1;
          this.selectedNumber -= number;
          break;
        default:
          this.selectedNumber = page;
      }
      console.log(this.selectedNumber);
      localStorage.setItem('pokemon-id', this.selectedNumber);
    },

    async updatePage() {
      const responsePokemon = await this.pokemonRepository.getById(this.selectedNumber);
      this.pokemonData = responsePokemon.data;
      const responsePokemonSpecies = await this.pokemonSpeciesRepository.get(this.pokemonData.id);
      const flavorText = responsePokemonSpecies.data.flavor_text_entries.find((species) => {
        return species.language.name === 'en' && species.version.name === 'red';
      });

      if (flavorText) {
        this.pokemonData = {
          ...this.pokemonData,
          flavor_text: flavorText.flavor_text,
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home{
  display:flex;
  height: 100%;
  min-height: 100vh;

  &__paginate{
    position: fixed;
    display:flex;
    justify-content: center;
    width:100%;

    &.top {
      top:0px;
    }

    &.bottom {
      bottom:20px;
    }
  }
}
</style>
