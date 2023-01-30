<script setup>
import yeekeeMp3 from '@/assets/img/lotteryAT/yeekee/yeekee.mp3';
import { useMinNumDigit } from '@/composables';
import dayjs from 'dayjs';
let timer = null;
const {numTimes, numTimesAdd} = useMinNumDigit(1,3),
      yeekeeMusic = ref(null),
      yeekee = reactive({
        nowData:'', glassBall:[...Array(10)], isReady:false, isLottery:false, isResult:false,
        numBall:[{color:'blue',num:''}, {color:'yellow',num:''}, {color:'red',num:''}, {color:'yellow',num:''}, {color:'blue',num:''}]
      }),
      resetLottery = () => {
        yeekee.isResult = false;
        timer = setTimeout(() => readyLottery(),2000);
      },
      readyLottery = () => {
        yeekee.isResult = false;
        yeekee.isReady = true;
        timer = setTimeout(() => toLottery(),4000);
      },
      toLottery = () => {
        yeekee.numBall.forEach((val,i) => yeekee.numBall[i].num = '');
        yeekee.isReady = false;
        yeekee.isLottery = true;
        yeekee.numBall.forEach((val,i) => {
          setTimeout(() => {
            const yeekeeNum = Math.round(Math.random() * 9).toString();
            yeekee.numBall[i].num = yeekeeNum;
            if(i === yeekee.numBall.length - 1) timer = setTimeout(() => resultNum(),4000);
          },i*1000);
        });
      },
      resultNum = () => {
        numTimesAdd();
        yeekee.isLottery = false;
        yeekee.isResult = true;
        timer = setTimeout(() => resetLottery(),3000);
      },
      audioPlay = () => yeekeeMusic.value.play();
onMounted(() => {
  yeekee.nowData = dayjs().format('YYYYMMDD')
  resetLottery();
});
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
<div :class="['yeekee',{'yeekee-ready':yeekee.isReady},{'yeekee-lottery':yeekee.isLottery},{'yeekee-result':yeekee.isResult}]">
  <div class="yeekee_wrap">
    <div class="yeekee__table">
      <ul class="yeekee__table_wrap">
        <li
          v-for="(item, idx) in yeekee.numBall" :key="idx"
          class="yeekee__table__item"
        >
          <span :class="['yeekee__table__item_ball yeekee__table__item_ball-'+item.color, item.num ? `yeekee__table__item_ball-num${item.num}` : '']"/>
        </li>
      </ul>
    </div>
    <div class="yeekee__glass">
      <ul class="yeekee__glass_wrap">
        <li 
          v-for="(item, idx) in yeekee.numBall" :key="idx"
          :class="['yeekee__glass__box yeekee__glass__box-'+item.color, item.num ? `yeekee__glass__box-num${item.num}` : '']"
        >
          <span
            v-for="(item, idx) in yeekee.glassBall" :key="idx"
            :class="['yeekee__glass__box_ball yeekee__glass__box_ball-']+idx"
          />
        </li>
      </ul>
    </div>
    <div class="yeekee__title">
      <p class="yeekee__title_txt">
        <span class="yeekee__title__num">{{yeekee.nowData}}{{numTimes}}</span>
      </p>
    </div>
    <span class="yeekee__girl"/>
  </div>
</div>
</template>

<style lang="scss">
@import"@/assets/scss/yeekeeVariables.scss";
</style>