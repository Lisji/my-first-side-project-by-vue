<template>
  <div class="socialmedia">
    <div class="socialmedia__class">
      <a href="https://www.instagram.com/tang.po.jii/" target="__blank">
        <img src="@/assets/introPage/instagram.png" class="socialmedia__class__image" alt="">
      </a>
    </div>
    <div class="socialmedia__class">
      <a href="https://github.com/Lisji" target="__blank">
        <img src="@/assets/introPage/github.png" class="socialmedia__class__image" alt="">
      </a>
    </div>
    <div class="socialmedia__class withFloat" @click="copy('copyText')">
      <input type="hidden" id="copyText" :value="email" disabled="disabled">
      <img src="@/assets/introPage/gmail.png" class="socialmedia__class__image" alt="">
      <DialogComponent 
        :dialogText=copyHint
        :class="[isActive ? 'active' : '']"
      />
    </div>
  </div>
</template>

<script>
import DialogComponent from './dialogComponent.vue'
export default {
    data() {
        return {
            email: "twn0958983620@gmail.com",
            copyHint: "Copied",
            isActive: false
        };
    },
    methods: {
        copy(textId) {
            this.isActive = true
            let copyText = document.querySelector(`#${textId}`);
            copyText.setAttribute("type", "text");
            copyText.select();
            try {
              document.execCommand("copy");
            }
            catch (err) {
              alert("Oops, unable to copy");
            }
            setTimeout((() => 
              this.isActive = false
            ), 1200)
            copyText.setAttribute("type", "hidden");
            window.getSelection().removeAllRanges();
        }
    },
    components: { DialogComponent }
}
</script>



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

      &.withFloat {
        display: flex;
      }

      &__image {
        width: -webkit-fill-available;
      }
    }
  }

</style>