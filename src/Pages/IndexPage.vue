<template>
  <div>
    <SlideComponent>
      <HomePage class="slide"/>
      <IntroPage class="slide"/>
      <SocialmediaComponent class="slide"></SocialmediaComponent>
    </SlideComponent>
  </div>
</template>

<script>
import HomePage from './HomePage.vue';
import IntroPage from './IntroPage.vue';
import SlideComponent from '../components/slideComponent.vue';
import SocialmediaComponent from '@/components/socialmediaComponent.vue';

  export default {
    components: {
    HomePage,
    IntroPage,
    SlideComponent,
    SocialmediaComponent
}
  }
</script>

<style lang="scss" scoped>

</style>