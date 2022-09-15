<template>
  <div>
    <div class="weatherComponent__header">
      <div class="weatherComponent__title">天氣預報</div>
      <select v-model="position" class="weatherComponent__select">
        <option class="weatherComponent__select__option" disabled>請選擇地區</option>
        <option class="weatherComponent__select__option">新北市</option>
        <option class="weatherComponent__select__option">臺北市</option>
        <option class="weatherComponent__select__option">基隆市</option>
        <option class="weatherComponent__select__option">宜蘭縣</option>
        <option class="weatherComponent__select__option">桃園市</option>
        <option class="weatherComponent__select__option">新竹縣</option>
        <option class="weatherComponent__select__option">新竹市</option>
        <option class="weatherComponent__select__option">苗栗縣</option>
        <option class="weatherComponent__select__option">臺中市</option>
        <option class="weatherComponent__select__option">彰化縣</option>
        <option class="weatherComponent__select__option">南投縣</option>
        <option class="weatherComponent__select__option">雲林縣</option>
        <option class="weatherComponent__select__option">嘉義縣</option>
        <option class="weatherComponent__select__option">嘉義市</option>
        <option class="weatherComponent__select__option">臺南市</option>
        <option class="weatherComponent__select__option">高雄市</option>
        <option class="weatherComponent__select__option">屏東縣</option>
        <option class="weatherComponent__select__option">花蓮縣</option>
        <option class="weatherComponent__select__option">臺東縣</option>
        <option class="weatherComponent__select__option">澎湖縣</option>
        <option class="weatherComponent__select__option">金門縣</option>
        <option class="weatherComponent__select__option">連江縣</option>
      </select>
    </div>
    <div class="weatherComponent">
      <WeatherCardCompent
        :cardName=positionText
      >
        <div class="weatherComponent__text" v-html="position"/>
      </WeatherCardCompent>
      <WeatherCardCompent
        :cardName=dateText
      >
        <div>
          <div class="weatherComponent__text" v-html="month"/>
          <div class="weatherComponent__text" v-html="date"/>
        </div>
      </WeatherCardCompent>

      <WeatherCardCompent
        :cardName=maxTemperatureText
      >
        <BarComponent
          :barHeight=maxTemperature
          :degreedColor=maxTemperatureColor
        />
        <div class="weatherComponent__text">
          <div v-html="this.maxTemperature"/>
          <div>℃</div>
        </div>
      </WeatherCardCompent>
  
      <WeatherCardCompent
        :cardName=minTemperatureText
      >
        <BarComponent
          :barHeight=minTemperature
          :degreedColor=minTemperatureColor
        />
        <div class="weatherComponent__text">
          <div v-html="this.minTemperature"/>
          <div>℃</div>
        </div>
      </WeatherCardCompent>
  
      <WeatherCardCompent
        :cardName=rainPercentageText
      >
        <percentPieComponent
          :percentage=rainPercentage
          :color=rainPercentageColor
        />
      </WeatherCardCompent>
  
      <WeatherCardCompent
        :cardName=overviewWeatherText
      >
        <div class="weatherComponent__text" v-html="overviewWeather"/>
      </WeatherCardCompent>
  
      
    </div> 
    
  </div>
</template>

<script>
import percentPieComponent from '@/components/percentPieComponent'
import BarComponent from './barComponent.vue';
import WeatherCardCompent from './weatherCardCompent.vue';

const axios = require('axios');
  export default {
    data() {
      return {
        weather: '',
        rainPercentageText: "降雨機率",
        rainPercentage: 0,
        rainPercentageColor: '#9F4D95',
        minTemperatureText: "最低氣溫",
        minTemperature: 0,
        minTemperatureColor: '#054266',
        maxTemperatureText: "最高氣溫",
        maxTemperature: 0,
        maxTemperatureColor: '#E1004B',
        overviewWeatherText: '天氣概述',
        overviewWeather: '',
        positionText: '地區',
        position: '苗栗縣',
        dateText: '日期',
        month: '',
        date: '',
        timeText: '時間',
        time: ''
      }
    },
    components: {
      percentPieComponent,
      BarComponent,
      WeatherCardCompent
    },
    async mounted() {
      await this.requestWeather(this.position)
      console.log(this.weather);
      this.rainPercentage = Number(this.weather[0].condition[1])
      this.minTemperature = Number(this.weather[0].condition[2])
      this.overviewWeather = this.weather[0].condition[3]
      this.maxTemperature = Number(this.weather[0].condition[4])
      this.month = this.weather[0].date[0]
      this.date = this.weather[0].date[1]
      this.time = this.weather[0].time
      
    },
    watch: {
      position: async function() {
        this.rainPercentage = 0
        this.minTemperature = 0
        this.maxTemperature = 0
        await this.requestWeather(this.position)
        console.log(this.weather);
        this.rainPercentage = Number(this.weather[0].condition[1])
        this.minTemperature = Number(this.weather[0].condition[2])
        this.overviewWeather = this.weather[0].condition[3]
        this.maxTemperature = Number(this.weather[0].condition[4])
      }
    },
    methods: {
      async requestWeather(position) {
        try {
          const response = await axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-CA5DBCEE-F193-4A13-BB52-3C7F4697B086&limit=50&locationName=' + position)
          let location = response.data.records.location[0].locationName
          let time = response.data.records.location[0].weatherElement[0]['time'].map(time => time['startTime'])
          let date = response.data.records.location[0].weatherElement[0]['time'].map(time => time['startTime'].split(' ')[0].split('-'))
          const options = { month: 'short', day: 'numeric' };
          let result = []
          for (let i = 0; i < 3; i++) {
            result.push({
              location: location,
              date: String(new Date(date[i][0] ,date[i][1] - 1, date[i][2]).toLocaleDateString('en-US', options)).split(' '),
              time: time[i].split(' ')[1].slice(0, 5),
              condition: response.data.records.location[0].weatherElement.map(element => element['time'][i]['parameter']['parameterName'])
            })
          }
          this.weather = result
        }catch (error){
          console.log(error);
        }
      },
    }
  }
</script>

<style lang="scss" scoped>

  .weatherComponent {

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    row-gap: 20px;
    justify-items: center;
    align-items: center;
    overflow: hidden;

    &__text {
      font-size: 36px;
      font-weight: bold;
      color: #fff;
      text-align: center;
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__title {
      font-size: 36px;
      font-weight: bold;
      color: #fff;
      margin: 10px 20px;
    }

    &__select {

      color: black;
      border: none;
      outline: none;
      font-size: 18px;
      padding: 8px;
      border-radius: 24px;
      margin: 10px 20px ;
      max-width: 240px;

      &__option {
        text-align: center;
      }
    }
    
  }


  @media (max-width: 350px) {

    .weatherComponent {

      &__header {
        display: unset;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

</style>