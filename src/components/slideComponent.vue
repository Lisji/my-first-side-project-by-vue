<template>
  <div class="pageSlider">
    <div class="pageSlider__controller">
      <div
        v-for="dot in slidesLength" 
        :key=dot.id
        class="pageSlider__controller__dot"
        :class="[dot == nowAt + 1 ? 'active' : '']"
      >
        <svg-icon icon-class="dot"/>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

  export default {
    data() {
      return {
        nowAt: this.$route.query.index ? Number(this.$route.query.index) : 0,
        slidesLength: '',
        slides:''
      };
    },
    components: {
      SvgIcon
    },
    created() {
      this.closeOverflowScroll()
    },
    mounted() {
      const slides = document.querySelectorAll(".slide")
      this.slidesLength = Number(slides.length)
      this.slides = slides
      slides[this.nowAt].classList.add('active')
      window.scrollTo(0, slides[this.nowAt].offsetTop)

      window.addEventListener("resize", () => {
        slides.forEach(slide => {
          slide.style.height = `${window.innerHeight}px`
          window.scrollTo(0, slides[this.nowAt].offsetTop)
        })
      });

      slides.forEach(slide => {        
        let startY
        let endY
        slide.addEventListener("wheel", (e) => {
          let move = e.deltaY
          slide == slides[this.nowAt] ? this.moveSlide(slides, move) : ''
        });
        slide.addEventListener('touchstart',(e) => {
          startY = e.targetTouches[0].pageY
        })
        slide.addEventListener('touchmove',(e) => {
          endY = e.targetTouches[0].pageY
        })
        slide.addEventListener('touchend',() => {
          if (startY && endY) {
            let move = startY - endY
            slide == slides[this.nowAt] ? this.moveSlide(slides, move) : ''
          }
          startY, endY = null
        })
      })
    },
    methods: {
      closeOverflowScroll(){
        document.querySelector("body").style.overflow = "hidden";
        
      },
      routePusher(nowAt) {
        this.$router.push({path: this.$route.path, query: {index: nowAt}});
      },
      moveSlide(slides, move) {
        if (move > 0) {
          if (this.nowAt < slides.length - 1) {
            slides[this.nowAt].classList.remove('active')
            slides[this.nowAt].classList.toggle('top-leave')
            this.nowAt += 1;
            window.scrollTo(0, slides[this.nowAt].offsetTop)
            slides[this.nowAt].classList.toggle('active')
            this.routePusher(this.nowAt)
          }
        } else if (move < 0) {
          if (this.nowAt != 0) {
            slides[this.nowAt].classList.remove('active')
            this.nowAt -= 1;
            window.scrollTo(0, slides[this.nowAt].offsetTop)
            slides[this.nowAt].classList.remove('top-leave')
            slides[this.nowAt].classList.toggle('active')
            this.routePusher(this.nowAt)
          }
        }
      }
    }
  }

</script>

<style lang="scss" scoped>


  .slide {
    height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
    z-index: 100;
  }

  :deep(.slide > *) {
    transform: translateY(200px);
    opacity: 0;
    transition: 1s all ease;
  }

  :deep(.slide.top-leave > *) {
    transform: translateY(-200px);
    opacity: 0;
    transition: 1s all ease;
  }

  :deep(.slide.active > *){
    transform: translateY(0);
    opacity: 1;
    transition: 1s all ease;
  }


  .pageSlider {

    &__controller {
      position: fixed;
      right: 10px;
      top: 50%;
      &__dot {
        color: rgb(238, 238, 238);

        .svg-icon {
          width: 1em;
        }
      }

      &__dot.active {
        color: rgb(59, 7, 108);;
      }
    }
  }

</style>