<template>
  <section class="not-found">
    <div class="not-found__container">
      <p class="not-found__404">4<img :src="require('@/assets/img/pokeball.png')" alt="Pokebol">4</p>

      <div class="not-found__title" v-html="'Oh No...'" />

      <div class="not-found__description" v-html="'You look lost on your journey!'" />

      <router-link :to="{name: 'Home'}" class="not-found__button" v-html="'Go to home'" />

    </div>
  </section>
</template>

<script>

export default {
  name: 'not-found',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.not-found {
  background: #FAD77B;
  width:100%;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;

  &__404 {
    font-size:200px;
    color: #cccccc;
    text-align: center;
  }

  &__container {
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    width:80%;
    height:80%;
    padding:15px;

    img {
      width:190px;
      margin-right:40px;
    }
  }

  &__title {
    font-size: 50px;
    font-weight: bold;
    line-height: 90px;
  }
  &__description {
    font-size: 25px;
    font-weight: bold;
    line-height: 50px;
    color: #cccccc;
    text-align: center;
  }
  &__button {
    background: #FF3D00;
    font-size: 25px;
    font-weight: bold;
    line-height: 70px;
    color: #ffff;
    box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    padding: 10px 16px;
    margin-top: 20px;
    transition: .3s;

    &:hover {
      background: lighten(#FF3D00, 10%);
    }
  }

  @media(max-width:1000px) {
    &__404{
      font-size:100px;
      text-align: center;
    }
    img{
       width:100px;
       margin-right:30px;
    }
    &__title{
      font-size: 30px;
      line-height: 50px;
    }
    &__description {
      font-size: 20px;
      line-height: 50px;
      color: #cccccc;
    }
    &__button {
      font-size: 20px;
      line-height: 50px;
    }

  }

  @media(max-width:600px) {
    &__container{
      width:95%;
      height:95%;
    }

    &__404 {
      font-size:65px;
      text-align: center;
    }

    img {
       width:70px;
       margin-right:20px;
    }

    &__title {
      font-size: 20px;
      line-height: 90px;
    }

    &__description {
      font-size: 16px;
      line-height: 50px;
      color: #cccccc;
    }

    &__button {
      font-size: 16px;
      line-height: 50px;
    }
  }
}
</style>
