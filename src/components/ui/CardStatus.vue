<template>
  <div class="card" v-for="{ id, title, value } in list" :key="id">
    <span class="card__name" :class="title" v-html="title" />
    <span class="card__value" v-html="value" />
  </div>
</template>
<script>
export default {
  name: 'card-status',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-radius: 5px;
  margin-right: 10px;
  background: $very-light-gray;
  box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  &__name{
    width:55px;
    height:30px;
    background: red;
    color: #fff;
    text-align: center;
    border-radius: 5px 5px 0 0;
    font-size:12px;
    font-weight: bold;
    &.hp {background: $hp;}
    &.atk {background: $attack;}
    &.def {background: $defense;}
    &.SpP {background: $special-attack;}
    &.SpD {background: $special-defense;}
    &.spd {background: $speed;}
  }

  &__value{
    display: flex;
    justify-content: center;
    align-items: center;
    height:30px;
    color: $dark-blue;
    text-align: center;
    font-size:12px;
  }
}
</style>
