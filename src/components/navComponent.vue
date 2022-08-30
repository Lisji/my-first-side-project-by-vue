<template>
  <div class="navComponent">
    <div class="navComponent__blocker"></div>
    <div class="navComponent__container">
      <div @click="emi" class="navComponent__navButton">
        <svg-icon icon-class="home"/>
      </div>
      <div @click="emi" class="navComponent__navButton">
        <svg-icon icon-class="subNav"/>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        isSubNavActive: window.innerWidth > 480 ? this.isSubNavActive = true : this.isSubNavActive = false
      }
    },

    methods: {
      emi() {
        this.isSubNavActive ? this.isSubNavActive = false : this.isSubNavActive = true
        this.$emit('emi', this.isSubNavActive)
      }
    }
}
</script>

<style lang="scss" scoped>
  .navComponent {
    &__blocker {
      width: 50px;
    }
    &__container {
      z-index: 999;
      background-color: rgb(89, 68, 116);
      height: 100%;
      width: 50px;
      position: fixed;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: end;
    }

    &__navButton {
      cursor: pointer;
      color: rgb(40,8,70);
      padding: 5px;
    }
    &__navButton:hover {
      color: #fff
    }
  }

  @media (max-width: 480px) {
    .navComponent {
      &__blocker {
        width: 10vw;
        height: 50px;
      }
      &__container {
        position: fixed;
        width: 100vw;
        height: 50px;
        flex-flow: unset;
        top: 0;
      }
    }
  }
</style>