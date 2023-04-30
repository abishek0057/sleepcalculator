import {wakeUpTimeType} from '../types/types';

// calculate when to wake of if you want to go to bed now
function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60000);
}

export function calculateWakeUpTime() {
  let wakeUpTimes: wakeUpTimeType[] = [];
  const now = new Date();

  for (let i = 6; i >= 1; i--) {
    let wakeUpTime = addMinutes(now, i * 90 + 15);

    let hrs = (wakeUpTime.getHours() % 12).toString().padStart(2, '0');
    if(hrs === "00") hrs = "12";
    const min = wakeUpTime.getMinutes().toString().padStart(2, '0');
    const period = wakeUpTime.getHours() < 12 ? 'AM' : 'PM';

    wakeUpTimes.push({id: i, hrs, min, period});
  }
  return wakeUpTimes;
}
