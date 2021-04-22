<template>
  <div class="pokemon" :class="`background__radial-${pokemon.types[0].type.name}`">
    <div class="pokemon__about">
      <p class="pokemon__id" v-html="'#' + numberFormat(pokemon.id)"/>
      <p class="pokemon__name" v-html="pokemon.name"/>
      <div class="pokemon__types">
        <div class="pokemon__type"
          v-for="({type}, index) in pokemon.types" :key="index"
          :class="`text-${type.name}`"
        >
          <img
            :src="require(`@/assets/img/types/${type.name}.png`)"
            :alt="`Pokemon do tipo ${type.name}`"
          />
          <span v-html="type.name"/>
        </div>
      </div>
    </div>

    <div class="pokemon__picture">
      <img :src="pokemon.sprites.other['official-artwork'].front_default" :alt="`Foto do pokemon ${pokemon.name}`" />
    </div>

    <div class="pokemon__data">
      <h2> Bio </h2>
      <div class="pokemon__data-status">
        <p v-if="pokemon.flavor_text">{{getFlavorText}}</p>
      </div>
      <div class="pokemon__body">
        <p><strong>Weight</strong>{{pokemon.weight/10}}kg</p>
        <p><strong>Height</strong>{{pokemon.height/10}}m</p>
      </div>
      <h2> Base Stats </h2>
      <div class="pokemon__data-status">
        <card-status :list="getPokemonStats" />
      </div>
    </div>
  </div>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';

import CardStatus from '@/components/ui/CardStatus.vue';

export default {
  name: 'pokemon',
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  components: {
    CardStatus,
  },
  methods: {
    numberFormat,
    getStatusName(status) {
      switch (status) {
        case 'hp': return 'hp';
        case 'attack': return 'atk';
        case 'defense': return 'def';
        case 'special-attack': return 'SpP';
        case 'special-defense': return 'SpD';
        case 'speed': return 'spd';
      }
      return '';
    },
  },
  computed: {
    getPokemonStats() {
      const list = this.pokemon.stats.map((data, index) => {
        return {
          id: index,
          title: this.getStatusName(data.stat.name),
          value: data.base_stat,
        };
      });

      return list;
    },
    getFlavorText() {
      return this.pokemon.flavor_text.replace(/[^\x20-\x7E]/g, '');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/background-color.scss';

.pokemon {
  width:100%;
  padding: 20px;
  display:flex;

  &__about {
    display:flex;
    flex-direction: column;
    position:fixed;
    top:20px;
    left:20px;
  }

  &__id {
    color: $very-light-gray;
    font-size: 40px;
    line-height: 50px;
  }

  &__name {
    color: $very-light-gray;
    text-transform: capitalize;
    font-size:30px;
    line-height: 50px;
  }

  &__picture {
    width:60%;
    display:flex;
    justify-content: flex-end;
    align-items: center;

    img {
      width:100%;
      max-width:475px;
    }
  }

  &__types {
    display:flex;
    margin-top:25px;
  }

  &__type {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 2px;
    margin-right: 10px;
    background: $very-light-gray;
    box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.2);

    img {
      padding-right: 10px;
      width: 40px;
      margin-right: 15px;
      margin:1px;
      -webkit-filter: drop-shadow(5px 5px 5px #222);
      filter: drop-shadow(1px 1px 0px #222);
    }

    span {
      font-size: 16px;
      font-weight: 800;
      display:flex;
      justify-content: center;
    }
  }
  &__data {
    display:flex;
    justify-content: center;
    padding: 40px 20px;
    flex-direction: column;
    color: $white;
    border-radius: 20px 20px 0 0;
    width:40%;

    &-status{
      margin: 20px 0;
      display:flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  &__body{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    p {
      margin-right: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
  h1 {
    color:$very-light-gray;
    margin-bottom: 20px;
  }
}
</style>
