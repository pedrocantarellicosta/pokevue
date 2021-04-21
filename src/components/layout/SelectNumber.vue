<template>
  <div class="select-number">
    <span @click="$emit('previousPage','previous')" >&#60;</span>
    <a
      v-for="paginationTrigger in paginationTriggers"
      :key="paginationTrigger"
      v-html="paginationTrigger"
      :class="{active: (paginationTrigger === currentPage)}"
      @click="$emit('toPage', paginationTrigger)"
    />
    <span @click="$emit('nextPage', 'next')">&#62;</span>
  </div>
</template>

<script>
export default {
  name: 'select-number',
  data() {
    return {
      visiblePagesCount: 9,
    };
  },
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    pageCount: {
      type: Number,
      required: true,
      default: 150,
    },
  },
  components: {
  },
  created() {
  },
  computed: {
    paginationTriggers() {
      const { currentPage } = this;
      const { pageCount } = this;
      const { visiblePagesCount } = this;
      const visiblePagesThreshold = (visiblePagesCount - 1) / 2;
      const pagintationTriggersArray = Array(this.visiblePagesCount - 1).fill(0);

      if (currentPage <= visiblePagesThreshold + 1) {
        pagintationTriggersArray[0] = 1;
        const pagintationTriggers = pagintationTriggersArray.map(
          (paginationTrigger, index) => {
            return pagintationTriggersArray[0] + index;
          },
        );
        pagintationTriggers.push(pageCount);
        return pagintationTriggers;
      }
      if (currentPage >= pageCount - visiblePagesThreshold + 1) {
        const pagintationTriggers = pagintationTriggersArray.map(
          (paginationTrigger, index) => {
            return pageCount - index;
          },
        );
        pagintationTriggers.reverse().unshift(1);
        return pagintationTriggers;
      }
      pagintationTriggersArray[0] = currentPage - visiblePagesThreshold + 1;
      const pagintationTriggers = pagintationTriggersArray.map(
        (paginationTrigger, index) => {
          return pagintationTriggersArray[0] + index;
        },
      );
      return pagintationTriggers;
    },
  },
};
</script>

<style lang="scss" scoped>
.select-number{
  color: $white;
  display:flex;
  align-items: center;

  span {
    font-size: 25px;
    font-weight: 800;
    transition: .3s;
    line-height: 40px;
    cursor: pointer;

    &:first-of-type{
      margin-right: 10px;
    }
    &:last-of-type{
      margin-left: 10px;
    }
    &:hover {
      color: darken($white, 30%);
    }
  }

  a {
    margin: 5px;
    font-size: 15px;
    transition: .3s;
    text-align: center;
    line-height: 40px;
    display: table-cell;
    vertical-align: middle;
    padding-bottom: 2px;

    &.active{
      font-size: 30px;
      padding-bottom: 5px;
    }

    &:hover {
      transform: translateY(-10px);
    }
  }
}
</style>
