<template>
  <div id="app">
    <div class="homepage">
      <div class="homepage__lock">
        <svg-icon icon-class="lock"></svg-icon>
      </div>
      <div class="homepage__timeArea">
        <div class="homepage__timeArea__time" v-html='`${date.hour}:${date.minute}`'/>
        <div class="homepage__timeArea__date" v-html='`${date.month}月${date.date}日 星期${date.day}`'/>
        <div class="homepage__timeArea__chineseDate" v-html='`${date.lunarYear}年${date.lunarMonth}月${date.lunarDate}`'/>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
const startTime = new Date()

export default {
  name: 'App',
  data() {
    return {
      date: {
        month: startTime.getMonth(),
        date: startTime.getDate(),
        day: this.weekToChinese(startTime.getDay()),
        hour: this.zeroPadding(String(startTime.getHours())),
        minute: this.zeroPadding(String(startTime.getMinutes())),
        second: startTime.getSeconds(),
        lunarYear: String(startTime.toLocaleString('ja-JP-u-ca-chinese').split(' ')[0].split('-')[0]),
        lunarMonth: this.lunarDateToChinese(this.zeroPadding(String(startTime.toLocaleString('ja-JP-u-ca-chinese').split(' ')[0].split('-')[1]))),
        lunarDate: this.lunarDateToChinese(this.zeroPadding(String(startTime.toLocaleString('ja-JP-u-ca-chinese').split(' ')[0].split('-')[2])))
      }
    }
  },
  mounted() {
    setInterval(this.updateTime , 1000);
  },
  methods: {
    updateTime() {
      const nowTime = new Date()
      this.date.month = nowTime.getMonth()
      this.date.date = nowTime.getDate()
      this.date.day = this.weekToChinese(nowTime.getDay())
      this.date.hour = this.zeroPadding(String(nowTime.getHours()))
      this.date.minute = this.zeroPadding(String(nowTime.getMinutes()))
      this.date.second = nowTime.getSeconds()
      this.date.lunarYear = String(nowTime.toLocaleString('ja-JP-u-ca-chinese').split(' ')[0].split('-')[0])
      this.date.lunarMonth = this.lunarDateToChinese(this.zeroPadding(String(nowTime.toLocaleString('ja-JP-u-ca-chinese').split(' ')[0].split('-')[1])))
      this.date.lunarDate =  this.lunarDateToChinese(this.zeroPadding(String(nowTime.toLocaleString('ja-JP-u-ca-chinese').split(' ')[0].split('-')[2])))
    },
    zeroPadding(dateString) {
      return dateString.length < 2 ? '0' + dateString : dateString
    },
    weekToChinese(dateString) {
      const week = ['', '一', '二', '三', '四', '五', '六', '日']
      let toChinese = week[Number(dateString)];
      return toChinese
    },
    lunarDateToChinese(dateString) {
      const tens = ['', '十', '二十', '三十']
      const digits = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九']
      let toChinese = tens[Number(dateString[0])] + digits[Number(dateString[1])]
      return toChinese
    }

  }
}
</script>

<style lang="scss" scoped>
  .homepage {
    background-color: rgba(0, 0, 0, .6);
    background-image: url('./assets/homepage/homepageBackground.jpg');
    background-blend-mode: multiply;
    background-position: center center;
    background-repeat: no-repeat;
    background-size:cover;
    height: 100vh;

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
  }

</style>
