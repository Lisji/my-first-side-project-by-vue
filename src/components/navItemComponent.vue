<template>
  <div class="navItem">
    <img :src="require(`@/assets/${image}`)" class="navItem__icon">
    <div class="navItem__content">
      <div class="navItem__content__title" v-html="title"/>
      <div class="navItem__content__description" v-html="description"/>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      image: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

.navItem {
  display: flex;
  width: 90vw;
  height: 60px;
  max-width: 360px;
  margin: 5px 0;
  background-color: rgba(0, 0, 0, .35);
  border-radius: 8px;

  &__icon {
    height: 40px;
    margin-left: 8px;
    padding: 10px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 0;

    &__title {
      font-weight: bold;
    }

    &__description {
      margin: 4px 0;
      font-size: 0.72em;
    }
  }
}

</style>