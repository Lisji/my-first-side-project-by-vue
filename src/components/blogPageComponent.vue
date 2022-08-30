<template>
  <div class="blogPage">
    <NavComponent @emi="emi"></NavComponent>
    <div class="blogPage__container">
      <slot></slot>     
    </div>
    <BlogSubNavComponent
      :isSubNavActive=isSubNavActive
    ></BlogSubNavComponent>
  </div>
</template>

<script>

import NavComponent from './navComponent.vue';
import BlogSubNavComponent from './blogSubNavComponent.vue';

  export default {
    data() {
      return {
        isSubNavActive: window.innerWidth > 480 ? this.isSubNavActive = true : this.isSubNavActive = false
      }
    },
    components: {
      NavComponent, 
      BlogSubNavComponent 
    },
    methods: {
      emi(vl) {
        console.log(this.isSubNavActive);
        this.isSubNavActive = vl
      }
    }
}
</script>

<style lang="scss" scoped>


  .blogPage {
    overflow-x: hidden;
    // height: 500vh;
    display: flex;


    &__container {
      width: 100vw;
    }
  }

  @media (max-width: 480px) {
    .blogPage {
      display: unset;
    }
  }

</style>