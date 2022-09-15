<template>
  <div class="homepage">
    <div class="homepage__container">
      <div class="homepage__lock">
        <svg-icon icon-class="lock" class="homepage__lock__icon"/>
      </div>
      <div class="homepage__timeArea">
        <div class="homepage__timeArea__time" v-html='`${date.hour}:${date.minute}`'/>
        <div class="homepage__timeArea__date" v-html='`${date.month}月${date.date}日 星期${date.day}`'/>
        <div class="homepage__timeArea__chineseDate" v-html='`${date.lunarYear}年${date.lunarMonth}月${date.lunarDate}`'/>
      </div>
      <div class="homepage__nav">
        <NavItemComponent 
          v-for="item in nav"
          :key=item.id
          :image=item.image
          :title=item.title
          :description=item.description
          :link=item.link
        />
      </div>
      <div class="homepage__nextEntry">
        <ArrowComponent/>
        <div class="homepage__nextEntry__text">
          About me
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavItemComponent from '@/components/navItemComponent.vue';
import ArrowComponent from '@/components/arrowComponent.vue';
const startTime = new Date()

export default {
  name: "App",
  data() {
    return {
      date: {
        month: startTime.getMonth() + 1,
        date: startTime.getDate(),
        day: this.weekToChinese(startTime.getDay()),
        hour: this.zeroPadding(String(startTime.getHours())),
        minute: this.zeroPadding(String(startTime.getMinutes())),
        second: startTime.getSeconds(),
        lunarYear: String(startTime.toLocaleString("ja-JP-u-ca-chinese").split(" ")[0].split("-")[0]),
        lunarMonth: this.lunarDateToChinese(this.zeroPadding(String(startTime.toLocaleString("ja-JP-u-ca-chinese").split(" ")[0].split("-")[1]))),
        lunarDate: this.lunarDateToChinese(this.zeroPadding(String(startTime.toLocaleString("ja-JP-u-ca-chinese").split(" ")[0].split("-")[2])))
      },
      nav: {
        aboutMe: {
          image: "homepage/programmer.png",
          title: "關於我",
          description: "我的自我介紹",
          link: '/?index=1'
        },
        article: {
          image: "homepage/article.png",
          title: "文章",
          description: "生活紀錄 | 技術交流 | 心情日記",
          link: "/blog"
        }
      }

    };
  },
  components: {
    NavItemComponent,
    ArrowComponent,
  },
  mounted() {
    setInterval(this.updateTime, 1000);
    this.test();
    window.addEventListener("resize", this.test);
  },
  destroyed() {
    window.removeEventListener("resize", this.test);
  },
  methods: {
    updateTime() {
      const nowTime = new Date();
      this.date.month = nowTime.getMonth() + 1;
      this.date.date = nowTime.getDate();
      this.date.day = this.weekToChinese(nowTime.getDay());
      this.date.hour = this.zeroPadding(String(nowTime.getHours()));
      this.date.minute = this.zeroPadding(String(nowTime.getMinutes()));
      this.date.second = nowTime.getSeconds();
      this.date.lunarYear = String(nowTime.toLocaleString("ja-JP-u-ca-chinese").split(" ")[0].split("-")[0]);
      this.date.lunarMonth = this.lunarDateToChinese(this.zeroPadding(String(nowTime.toLocaleString("ja-JP-u-ca-chinese").split(" ")[0].split("-")[1])));
      this.date.lunarDate = this.lunarDateToChinese(this.zeroPadding(String(nowTime.toLocaleString("ja-JP-u-ca-chinese").split(" ")[0].split("-")[2])));
    },
    zeroPadding(dateString) {
      return dateString.length < 2 ? "0" + dateString : dateString;
    },
    weekToChinese(dateString) {
      const week = ["", "一", "二", "三", "四", "五", "六", "日"];
      let toChinese = week[Number(dateString)];
      return toChinese;
    },
    lunarDateToChinese(dateString) {
      const tens = ["", "十", "二十", "三十"];
      const digits = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
      let toChinese = tens[Number(dateString[0])] + digits[Number(dateString[1])];
      return toChinese;
    },
    test() {
      const container = document.querySelector('.homepage__container')
      container.style.height = `${window.innerHeight}px`
    }
  },
}
</script>

<style lang="scss" scoped>

  .homepage {
    background-color: rgba(0, 0, 0, .6);
    background-image: url('@/assets/homepage/homepageBackground.jpg');
    background-blend-mode: multiply;
    background-position: center center;
    background-repeat: no-repeat;
    background-size:cover;
    height: calc(var(--vh, 1vh) * 100);
    
    color: rgb(238, 238, 238);

    &__container {
      height: calc(var(--vh, 1vh) * 100);
    }
    
    &__lock {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0;

      &__icon {
          color: rgb(238, 238, 238);
          width: 2em;
          height: 2em;
      }

    }

    &__timeArea {
      color: rgb(238, 238, 238);
      text-align: center;   

      &__time {
        font-size: 12vh;
      }

      &__date {
        font-size: 3vh;
      }

      &__chineseDate {
        font-size: 2vh;
      }
    }

    &__nav {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__nextEntry {

      &__text {
        position: absolute;
        left: 50%;
        bottom: 2%;
        animation: spark 1.6s infinite;
        transform: translateX(-50%);
      }
    }
  }

  @keyframes spark {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>