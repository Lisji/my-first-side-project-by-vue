<template>
  <div>
    <div>
      <div class="slide"/>
      <HomePage></HomePage>
    </div>

    <div>
      <div class="slide"/>
      <IntoPage></IntoPage>
    </div>

    <div>
      <div class="slide"/>
      <div class="slide3">
      </div>
    </div>

  </div>
</template>

<script>
import HomePage from "./HomePage.vue";
import IntoPage from "./IntoPage.vue";



  export default {
    data() {
      return {
          nowAt: this.$route.query.index ? Number(this.$route.query.index) : 0
      };
    },
    mounted() {
      document.querySelector("body").style.overflow = "hidden";
      const slides = document.querySelectorAll(".slide");
      console.log(slides);
      slides.forEach(slide => {
          slide.dataset.canScroll = false;
          slide.addEventListener("wheel", (e) => {
              // console.log(this.nowAt);
              // console.log(e.target);
              if (e.target == slides[this.nowAt]) {
                  e.target.dataset.canScroll = true;
              }
              if (e.target.dataset.canScroll == "true") {
                console.log(e.deltaY)
                  if (e.deltaY > 0) {
                      window.scrollTo(0, window.scrollY + slide.offsetHeight);
                      if (this.nowAt < slides.length - 1) {
                          this.nowAt += 1;
                          this.$router.push({ path: "slide", query: { index: this.nowAt } });
                      }
                  }
                  else if (e.deltaY < 0) {
                      window.scrollTo(0, window.scrollY - slide.offsetHeight);
                      if (this.nowAt != 0) {
                          this.nowAt -= 1;
                          this.$router.push({ path: "slide", query: { index: this.nowAt } });
                      }
                  }
                  e.target.dataset.canScroll = false;
              }
          });
        });
    },
    components: { HomePage, IntoPage }
}

</script>

<style lang="scss" scoped>
  .slide {
    height: 100vh;
    width: 100vw;
    z-index: 100;
    position: absolute;

  }

  .slide2 {
    background-color: green;
    height: 100vh;

  }
  .slide3 {
    background-color: red;
    height: 100vh;

  }

</style>