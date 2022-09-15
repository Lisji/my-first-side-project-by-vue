<template>
  <div class="blogSubNavComponent">
    
    <div 
      v-if="isSubNavActive"
      class="blogSubNavBlocker"/>
    <div class="blogSubNav"
    :class="[isSubNavActive ? 'active' : '']"
    >
      <div 
        class="blogSubNav__container"
      >
        <div class="blogSubNav__container__headshot">
          <div class="headshot__circle">
            <img src="@/assets/introPage/headshot.jpg" class="headshot__image" alt="">
          </div>
        </div>
        <div class="blogSubNav__container__name" v-html="userName"/>
        <SocialmediaComponent/>
        <div class="blogSubNav__container__article">
          <div  v-for="index in count" :key="index.id">
            <a :href="`/blog/article/${(index - 1) % 8}`">
              <div class="article">
                <div class="title" v-html="articleData[(index - 1) % 8].title"/>
                <div class="description" v-html="articleData[(index - 1) % 8].description"/>
                <div class="articleImage"></div>
              </div>
            </a>
          </div>

        </div>
        <div class="blogSubNav__container__subscribe">
          <input type="text" class="subscribe__input" placeholder="請輸入信箱">
          <div class="subscribe__button">訂閱</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialmediaComponent from './socialmediaComponent.vue';
import articleData from '../article'
  export default {
    data() {
      return {
        articleData,
        userName: "湯智偉",
        count: 0,
      }
    },
    props: {
      isSubNavActive: {
        type: Boolean,
        required: true,
        default: false
      }
    },
    components: {
      SocialmediaComponent
    },
    mounted() {
      let leave = window.innerHeight - 260;
      this.count = Number(Math.floor(leave / 90)) - 1;
      window.addEventListener('resize', () => {
        let leave = window.innerHeight - 250;
        this.count = Number(Math.floor(leave / 90)) - 1;
      })
    },
  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }

  .blogSubNavBlocker {
    width: 300px;
  }

  .blogSubNav.active {
    transform: translateX(0);
    transition: 1s all ease;
  }


  .blogSubNav{
    height: 100vh;
    transform: translateX(100%);
    transition: 1s all ease;
    display: flex;
    position: fixed;
    top: 0;
    right: 0;

    &__container {
      padding-top: 60px;
      width: 300px;
      min-width: 300px;
      background-color: rgb(89, 68, 116);

      &__headshot {
        display: flex;
        align-items: center;
        justify-content: center;
        .headshot__circle {        
          width: 150px;
          height:150px;
          border-radius: 50%;
          overflow: hidden;
          .headshot__image {
            width: inherit;
          }
        }
      }

      &__name {
        color: white;
        text-align: center;
        margin: 8px 0;
      }

      &__article {

        .article {
          margin: 8px auto;
          width: 85%;
          height: 50px;
          padding: 10px;
          border: 1.5px solid #fff;
          border-radius: 8px;
          color: #fff;
        }
        .title {
          overflow:hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .description {
          margin: 4px 0;
          font-size: 0.75em;
          overflow:hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      &__subscribe {
        margin: 20px auto;
        display: flex;
        background-color: #fff;
        width: 90%;
        justify-content: space-between;
        padding: 5px;
        border-radius: 30px;

        .subscribe__input {
          margin-left: 5px;
          width: 70%;
          outline: none;
          border: none;
          font-size: initial;
        }

        .subscribe__button {
          min-width: 20%;
          color: #fff;
          font-size: 0.8em;
          
          border-radius: 30px;
          background-color: rgb(40,8,70);
          height: 24px;
          padding: 5px;
          text-align: center;
          font-weight: bold;
          line-height: 1.6em;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .blogSubNavBlocker {
      display: none;
    }
    .blogSubNav {
      height: 100vh;

      &__container {
        width: 100vw;
      }
    }
  }
</style>