//calculate when to sleep when wake up time is given

function calculateSleepAt(wakeUpHrs, wakeUpMin, amPm) {
    const averageSleepTime = 15;
    let times = [];
    for (i = 6; i >= 1; i--) {
        let addTime = i * 90 + averageSleepTime;

        let subtractMins = addTime % 60;
        let subtractHrs = (addTime - subtractMins) / 60;

        let sleepAtMin = wakeUpMin - subtractMins;
        if (sleepAtMin < 0) {
            sleepAtMin = 60 - Math.abs(sleepAtMin);
            subtractHrs += 1;
        }

        let sleepAtHrs = wakeUpHrs - subtractHrs;
        if (sleepAtHrs < 0) {
            sleepAtHrs = 12 - Math.abs(sleepAtHrs);
        }
        if (sleepAtHrs === 0) {
            sleepAtHrs = 12;
        }


        if (amPm === "am" && (sleepAtHrs <= 12 && (sleepAtHrs < wakeUpHrs || sleepAtHrs === 12))) {
            times.push({
                id:i,
                hrs:sleepAtHrs.toString().padStart(2,0),
                min:sleepAtMin.toString().padStart(2,0),
                ampm: "am"
            })
        } else if (amPm === "am" && sleepAtHrs < 12) {
            times.push({
                id:i,
                hrs:sleepAtHrs.toString().padStart(2,0),
                min:sleepAtMin.toString().padStart(2,0),
                ampm: "pm"
            })
        } else if (amPm === "pm" && (sleepAtHrs <= 12 && (sleepAtHrs < wakeUpHrs || sleepAtHrs === 12))) {
            times.push({
                id:i,
                hrs:sleepAtHrs.toString().padStart(2,0),
                min:sleepAtMin.toString().padStart(2,0),
                ampm: "pm"
            })
        } else if (amPm === "pm" && sleepAtHrs < 12) {
            times.push({
                id:i,
                hrs:sleepAtHrs.toString().padStart(2,0),
                min:sleepAtMin.toString().padStart(2,0),
                ampm: "am"
            })
        }

    }
    return times;
}
