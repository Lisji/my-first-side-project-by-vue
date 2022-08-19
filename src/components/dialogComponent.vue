<template>
  <div class="dialog">
    <div 
      v-html="dialogText"
      class="dialog__bubble"
      />
  </div>
</template>

<script>
  export default {
    props: {
      dialogText: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dialog {
    position: relative;
    margin-left: 8px;
    transform: translateX(-60%);
    opacity: 0;
    transition: .3s all ease;

    &__bubble {
      color: rgb(238, 238, 238);
      font-size: 0.8em;
      background: rgb(115, 80, 148);
      border-radius: 4px;
      padding: 4px;
    }

    &__bubble:after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      border: 0.4em solid transparent;
      border-right-color:rgb(115, 80, 148);
      transform: translate(-90%,-50%);
    }

    &.active {
      opacity: 1;
      transform: translateX(0);
      transition: .8s all ease;
    }
  }



</style>