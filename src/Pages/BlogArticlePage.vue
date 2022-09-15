<template>
  <div>
    <BlogPageComponent>
      <div class="articleContainer">
        <ArticleEntryComponent
          v-for="index in 19"
          :key="index"
          :title="article[(index - 1) % 8].title"
          :picture="article[(index - 1) % 8].picture"
          :articleId="(index - 1) % 8"
        /> 
      </div>
    </BlogPageComponent>
  </div>
</template>

<script>
import BlogPageComponent from '@/components/blogPageComponent.vue';
import ArticleEntryComponent from '../components/articleEntryComponent.vue';
import articleData from '../article'



  export default {
    data() {
      return {
        article: articleData
      }
    },

    components: {
      BlogPageComponent,
      ArticleEntryComponent
    },
  }
</script>

<style lang="scss" scoped>

  .articleContainer {
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 30px;
    justify-items: center;
    align-items: center;
  }

</style>