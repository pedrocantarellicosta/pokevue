<template>
  <div class="pokemon" :class="`background__radial-${pokemon.types[0].type.name}`">
    <div class="pokemon__header">
      <div class="pokemon__picture">
        <img :src="pokemon.sprites.other['official-artwork'].front_default" :alt="`Foto do pokemon ${pokemon.name}`" />
      </div>

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
          </div>
        </div>
      </div>
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
  data() {
    return {
    };
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
  created() {
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/background-color.scss';

.pokemon{
  width:100%;
  height: 100%;
  min-height: 100vh;
  &__header{
    display:flex;
    padding: 20px;
    height: 40vh;
  }
  &__about{
    display:flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    margin-left: 10px;
  }
  &__id {
    color: $very-light-gray;
    font-size: 14px;
    @include for-tablet {
    font-size: 16px;
      line-height: 30px;
    }
  }
  &__name {
    color: $very-light-gray;
    font-size: 16px;
    line-height: 25px;
    text-transform: capitalize;
   @include for-tablet {
    font-size: 20px;
      line-height: 35px;
    }
  }
  &__picture {
    width:50%;
    display:flex;
    justify-content: center;
    align-items: center;

    img {
      width:100%;
      max-width: 290px;
      min-width: 150px;
    }
  }
  &__types {
    display:flex;
    margin-top:10px;
    flex-wrap: wrap;
  }
  &__type {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    margin-right: 10px;
    border-radius: 2px;
    img{
      width: 25px;
      -webkit-filter: drop-shadow(5px 5px 5px #222);
      filter: drop-shadow(1px 1px 0px #222);
    }
    span{
      font-size: 12px;
      font-weight: 800;
      display:flex;
      justify-content: center;
    }
  }

  &__data {
    width:100%;
    height: auto;
    min-height: 60vh;
    display:flex;
    padding: 40px 20px;
    background: #3030308c;
    flex-direction: column;
    color: $white;
    border-top:1px solid rgba(255, 255, 255, 0.57);
    border-radius: 20px 20px 0 0;
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
}
</style>
