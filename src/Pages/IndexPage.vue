<template>
  <div>
    <SlideComponent>
      <HomePage class="slide"/>
      <IntroPage class="slide"/>
    </SlideComponent>
  </div>
</template>

<script>
import HomePage from './HomePage.vue';
import IntroPage from './IntroPage.vue';
import SlideComponent from '../components/slideComponent.vue';

  export default {
    components: {
    HomePage,
    IntroPage,
    SlideComponent,
}
  }
</script>

<style lang="scss" scoped>

</style>