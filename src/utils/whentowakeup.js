// calculate when to wake of if you want to go to bed now
function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

export function calculateWakeUpTime() {
  let wakeUpTimes = [];
  const now = Date.now();
  for (let i = 6; i >= 1; i--) {
    let wakeUpTime = new Date(now);
    wakeUpTimes.push(addMinutes(wakeUpTime, i * 90 + 15));
  }
  return wakeUpTimes;
}
