<template>
  <div id="app">
    <div class="homepage">
      <div class="homepage__lock">
      </div>
      <div class="homepage__timeArea">
        <div class="homepage__timeArea__time">

        </div>
        <div class="homepage__timeArea__date">

        </div>
        <div class="homepage__timeArea__chineseDate">

        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
  .homepage {
    background-image: url('./assets/homepage/homepageBackground.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size:cover;
    height: 100vh;
  }

</style>
