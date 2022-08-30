<template>
  <div class="barComponent">
    <div class="barComponent__degreed" ref="degreed"/>
  </div>
</template>

<script>
  export default {
    props: {
      barHeight: {
        required: true,
        default: 10
      },
      degreedColor: {
        default: '#E1004B'
      }
    },
    watch: {
      barHeight: function() {
        
        const barContainerHeight = document.querySelector(".barComponent")
        const degreedStyle = this.$refs.degreed.style
        degreedStyle.backgroundColor = this.degreedColor
        degreedStyle.height = `10px`
        degreedStyle.transition = `0s`
        degreedStyle.height = `${Number(this.barHeight) / barContainerHeight.offsetHeight * 100 * 2}px`
        degreedStyle.transition = `1s`
      }
    }
  }
</script>

<style lang="scss" scoped>

  .barComponent {
    border-radius: 18px;
    background-color: white;
    height: calc(100% - 10px);
    padding: 5px;
    width: 18px;
    display: flex;
    align-items: end;

    &__degreed {
      height: 10px;
      width: inherit;
      border-radius: 0 0 18px 18px;
    }
  }

</style>