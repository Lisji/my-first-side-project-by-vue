<template>
  <div class="percentPieComponent">
    <svg class="percentPieComponent__pie" viewBox="0 0 36 36">
      <path class="percentPieComponent__pie__background"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="percentPieComponent__pie__percentage" ref="percentage"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text v-html="percentage" x="18" y="20.25" class="percentPieComponent__pie__text"/>
    </svg>
  </div>
</template>

<script>
  export default {
    props: {
      percentage: {
        type: Number,
        required: true,
        default: 0
      },
      color: {
        type: String,
        required: false,
        default: '#fff'
      },
    },
    watch: {
      percentage: function() {
        const percentage = this.$refs.percentage
        percentage.style.stroke = this.color

        percentage.style.strokeDasharray = `0, 100`
        percentage.style.transitionDuration = `0s`
        setTimeout(() => {
          percentage.style.strokeDasharray = `${this.percentage}, 100`
          percentage.style.transition = `1s`
        }, 0)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .percentPieComponent {
    width: 100%;

    &__pie {

      &__background {
        fill: none;
        stroke: #eee;
        stroke-width: 3.8;
      }

      &__percentage {
        fill: none;
        stroke-dasharray: 0, 100;
        stroke-width: 2.8;
        stroke-linecap: round;
      }

      &__text {
        fill: #fff;
        font-size: .5em;
        font-weight: bold;
        text-anchor: middle;
      }
    }
  }

</style>