<template>
  <div class="introPage">
    <div class="introPage__container">
      <div class="introPage__headshot">
        <div class="introPage__headshot__circle">
          <img src="@/assets/introPage/headshot.jpg" class="introPage__headshot__image" alt="">
        </div>
      </div>
      <div class="introPage__socialmedia">
        <SocialmediaComponent></SocialmediaComponent>
      </div>
      <div class="introPage__name">
        <div class="introPage__name__fullName">
          湯智偉
        </div>
        <div class="introPage__name__nickname">
          湯湯 | LISJI
        </div>
      </div>
      <div class="introPage__nav">
        <div class="introPage__nav__button">文章</div>
        <div class="introPage__nav__button">作品</div>
      </div>
      <div class="introPage__description">
        <p>
          在學期間曾擔任學校永續發展與社會實踐中心及圖書館的網頁維護工讀生。<br><br>目前也正在新加坡犀牛盾科技股份有限公司擔任官網實習工程師。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SocialmediaComponent from '@/components/socialmediaComponent.vue';

  export default {
    components: { 
      SocialmediaComponent 
    }
}
</script>

<style lang="scss" scoped>
  .introPage {
    height: calc(var(--vh, 1vh) * 100);
    background-color: rgb(40, 8, 70);
    display: flex;
    align-items: center;
    justify-content: center;

    &__headshot {
      display: flex;
      align-items: center;
      justify-content: center;

      &__circle {        
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
      }

      &__image {
        width: inherit;
      }
    }

    &__name {
      color: rgb(238, 238, 238);
      text-align: center;
      font-size: 1em;
      
      &__nickname {
        font-size: 0.6em;
      }
    }

    &__nav {
      display: flex;
      color: rgb(238, 238, 238);
      align-items: center;
      justify-content: center;

      &__button {
        border: rgb(238, 238, 238) solid 1px;
        text-align: center;
        margin: 16px 6px;
        padding: 5px;
      }
    }

    &__description {
      text-align: center;
      color: rgb(238, 238, 238);
      font-size: 0.8em;
    }
  }
</style>