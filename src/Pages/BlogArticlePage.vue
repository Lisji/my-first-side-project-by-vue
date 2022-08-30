<template>
  <div>
    <BlogPageComponent>
      <WeatherComponent
      />
    </BlogPageComponent>
  </div>
</template>

<script>
import BlogPageComponent from '@/components/blogPageComponent.vue';
import WeatherComponent from '../components/weatherComponent.vue';



  export default {
    components: {
      BlogPageComponent, 
      WeatherComponent 
    },

}
</script>

<style lang="scss" scoped>
  

</style>