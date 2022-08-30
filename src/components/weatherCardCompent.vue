<template>
  <div @mouseover="HandleActiveCard" @mouseout="HandleActiveCard"   class="weatherCardComponent">
    <slot></slot>
    <div class="weatherCardComponent__hover" :class="[isHover ? 'active' : '']" v-html=cardName />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isHover: false
      }
    },
    props: {
      cardName: {
        type: String,
        required: true,
      }
    },
    methods: {
      HandleActiveCard() {
        this.isHover ? this.isHover = false : this.isHover = true
      }
    }
  }
</script>

<style lang="scss" scoped>

  .weatherCardComponent {
    background-color:  rgba(19, 1, 37, 0.6);
    width: 120px;
    height: 120px;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &__hover{
      width: inherit;
      height: inherit;
      padding: inherit;
      position: absolute;
      color: #fff;
      font-size: 1.5em;
      background-color: rgba(0, 0, 0, 0.9);
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.6s;
    }
    &__hover.active {
      opacity: 1;
      transition: 0.6s;
    }
  }
  


</style>