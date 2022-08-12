<template>
  <div>
    <div class="arrow arrow-1"></div>
    <div class="arrow arrow-2"></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

  .arrow {
    position: absolute;
    left: calc(50% - 15px);
    bottom: 10%;
    transform-origin: 50% 50%;
  }

  .arrow-1 {
    animation: arrow-movement 1.5s ease-in-out infinite;
  }

  .arrow-2 {
    animation: arrow-movement 1.5s 0.5s  ease-in-out infinite;
  }

  .arrow:before,
  .arrow:after {
    background: #fff;
    content: '';
    display: block;
    position: absolute;
    height: 3px;
    width: 30px;
  }

  .arrow:before {
    transform: rotate(45deg) translateX(-23%);
    transform-origin: top left;
  }

  .arrow:after {
    transform: rotate(-45deg) translateX(23%);
    transform-origin: top right;
  }

  @keyframes arrow-movement {
    0% {
      opacity: 0;
      bottom: 16%;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

</style>