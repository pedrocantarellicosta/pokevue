<template>
  <div id="app"  :class="{ 'loading': appIsLoading }">
    <router-view />
    <spinner v-if="appIsLoading" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Spinner from '@/components/ui/Spinner.vue';

export default {
  components: {
    Spinner,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = `PokeVue - ${to.meta.title}`;
      },
    },
  },
  computed: {
    ...mapGetters(['appIsLoading']),
  },
};
</script>

<style lang="scss">
#app {
  &.loading {
    overflow: hidden;
    &:after {
      content: '';
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .4);
      top: 0;
      left: 0;
      z-index: 9999;
    }
    * {
      pointer-events: none;
    }
  }
  .linkable {
    cursor: pointer;
  }
}
</style>
