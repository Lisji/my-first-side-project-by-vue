<template>
  <div>
    <BlogPageComponent>
      <WeatherComponent/>
    </BlogPageComponent>
  </div>
</template>

<script>
import BlogPageComponent from '@/components/blogPageComponent.vue';
import WeatherComponent from '../components/weatherComponent.vue';
  export default {
    components: {
      WeatherComponent,
      BlogPageComponent
    },
    
  }
</script>

<style lang="scss" scoped>

</style>