<template>
  <div class="socialmedia">
    <div class="socialmedia__class">
      <a href="">
        <img src="@/assets/introPage/instagram.png" class="socialmedia__class__image" alt="">
      </a>
    </div>
    <div class="socialmedia__class">
      <a href="">
        <img src="@/assets/introPage/github.png" class="socialmedia__class__image" alt="">
      </a>
    </div>
    <div class="socialmedia__class">
      <a href="">
        <img src="@/assets/introPage/gmail.png" class="socialmedia__class__image" alt="">
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .socialmedia {
    display: flex;
    align-items: center;
    justify-content: center;

    &__class {
      width: 30px;
      height: 30px;
      margin: 0px 8px;
      padding: 20px 0;

      &__image {
        width: -webkit-fill-available;
      }
    }
  }

</style>