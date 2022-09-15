<template>
  <router-link :to="`blog/article/${articleId}`">
  <div class="article" :class="[isActive ? 'active' : '']" ref="article">
      <div>
        <img 
          class="article__picture" 
          :src="require(`@/assets/${picture}`)"
        >
      </div>
      <div 
        class="article__title"
        v-html="title"
      />
      <div class="article__commentArea">
        <div class="article__comment">
          <svg-icon icon-class="heart" class="article__comment__icon" />
          <div class="article__comment__count">12,378</div>
        </div>
        <div class="article__comment">
          <svg-icon icon-class="comment" class="article__comment__icon" />
          <div class="article__comment__count">86</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  props:{
    picture: {
      default: "articlepage/articlePic.jpg"
    },
    title: {
      default: "No title"
    },
    articleId: {
      required: true
    }
  },
  mounted() {
    this.handleEntryActive()
    window.addEventListener('scroll', this.handleEntryActive)
    window.addEventListener('resize', this.handleEntryActive)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleEntryActive)
    window.removeEventListener('resize', this.handleEntryActive)
  },
  methods: {
    handleEntryActive() {
      let top = this.$refs.article.offsetTop
      if (window.innerHeight + window.scrollY > top) {
        this.isActive = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  width: 100%;
}
.article {
  width: 100%;
  background-color: rgba(19, 1, 37, 0.6);
  transform: translateY(200px);
  min-height: 355px;
  cursor: pointer;

  &__picture {
    width: -webkit-fill-available;
    object-fit: cover;
    height: 220px;
  }

  &__title {
    font-size: 1.2em;
    color: white;
    padding: 10px;
  }

  &__commentArea {
    display: flex;
    padding: 5px;
    // justify-content: flex-end;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  &__comment {
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    padding: 2px;

    &__icon {
      width: 20px;
    }

    &__count {
      font-size: 18px;
      padding: 5px;
    }
  }
}

.article.active {
  transform: translateY(0);
  transition: all 1s;
}

.article:hover {
    scale: 1.1;
}

</style>
