<template>
  <div>
    <BlogPageComponent>
      <div class="bread">
        <router-link to="/">
          Home
        </router-link>
        <svg-icon icon-class="rightArrow" class="bread__arrow"/>
        <router-link to="/blog">
          Article
        </router-link>
        <svg-icon icon-class="rightArrow" class="bread__arrow"/>
        {{articleData[articleId].title}}
      </div>
      <div class="article">
        <div class="article__title" v-html="articleData[articleId].title"/>
        <div class="article__picture__container" >
          <img 
          class="article__picture" 
          :src="require(`@/assets/${articleData[articleId].picture}`)"
          >
        </div>
        <div class="article__description" v-html="articleData[articleId].description"/>

      </div>
    </BlogPageComponent>
  </div>
</template>

<script>
import BlogPageComponent from '@/components/blogPageComponent.vue';
import articleData from '../article'
  export default {
    data() {
      return {
        articleData,
        articleId: this.$route.params.articleId   
      }
    },
    components: {
      BlogPageComponent
    }
  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: rgb(208, 203, 219);
  }
  .bread {
    display: flex;
    align-items: center;
    color: rgb(208, 203, 219);
    margin: 10px 20px 5px;

    &__arrow {
      width: 20px;
      margin: 0 5px;
    }
  }
  .article {
    background-color: rgba(208, 203, 219, 0.9);
    margin: 0 20px 40px;
    color: rgb(60, 60, 60);
    width: calc(100% - 40px);

    
    &__title {
      font-size: 1.6em;
      font-weight: bold;
      padding: 10px;
    }

    &__picture {

      &__container {
        margin: 0 15px;
        background-color: rgb(228, 228, 228);
        width: calc(100% - 30px);
        display: flex;
        justify-content: center;
      }
      max-width: 100%;
      max-height: 80vh;
    }

    &__description {
      padding: 20px;
    }
  }

</style>