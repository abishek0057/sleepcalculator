// calculate when to wake of if you want to go to bed now

function changeFormat() {
    const now = new Date();
    const nowHrs = now.getHours() % 12;
    const nowMin = now.getMinutes();

    const amPm = (nowHrs >= 12) ? "pm" : "am";

    if (nowHrs === 0) {
        nowHrs = 12;
    } else if (nowHrs > 12) {
        nowHrs -= 12;
    }

    return { nowHrs, nowMin, amPm }
}

export function whenToWakeUp() {
    const { nowHrs, nowMin, amPm } = changeFormat();
    const averageSleepTime = 15;
    let times = [];
    for (i = 6; i >= 1; i--) {
        let addTime = i * 90 + averageSleepTime;

        let addMins = addTime % 60;
        let addHrs = (addTime - addMins) / 60;

        let wakeUpMin = nowMin + addMins;
        if (wakeUpMin >= 60) {
            wakeUpMin = wakeUpMin % 60;
            addHrs += 1;
        }

        let wakeUpHrs = nowHrs + addHrs;
        if (wakeUpHrs > 12) {
            wakeUpHrs = wakeUpHrs % 12;
        }

        if (amPm === "am" && (wakeUpHrs <= 12 && wakeUpHrs > nowHrs)) {
            times.push({
                id: i,
                hrs:wakeUpHrs.toString().padStart(2,0),
                min:wakeUpMin.toString().padStart(2,0),
                ampm: "am"
            })
        } else if (amPm === "am" && wakeUpHrs < 12) {
            times.push({
                id: i,
                hrs:wakeUpHrs.toString().padStart(2,0),
                min:wakeUpMin.toString().padStart(2,0),
                ampm: "pm"
            })
        } else if (amPm === "pm" && (wakeUpHrs <= 12 && wakeUpHrs > nowHrs)) {
            times.push({
                id: i,
                hrs:wakeUpHrs.toString().padStart(2,0),
                min:wakeUpMin.toString().padStart(2,0),
                ampm: "pm"
            })
        } else if (amPm === "pm" && wakeUpHrs < 12) {
            times.push({
                id: i,
                hrs:wakeUpHrs.toString().padStart(2,0),
                min:wakeUpMin.toString().padStart(2,0),
                ampm: "am"
            })
        }

    }

    return times;
}
