import { ref, computed, readonly, onMounted } from "vue"
export function MinNumDigit(startVal,minNum){
  const val = ref(0),
        numTimes = computed(() => {
          if(minNum === 3) return (val.value < 10 ? '00' : val.value < 100 ? '0' : '') + val.value;
          if(minNum === 4) return (val.value < 10 ? '000' : val.value < 100 ? '00' : val.value < 1000 ? '0' : '') + val.value;
        }),
        numTimesAdd = () => val.value++;
  onMounted(() => val.value = startVal);
  return {
    numTimes:readonly(numTimes),
    numTimesAdd
  }
}