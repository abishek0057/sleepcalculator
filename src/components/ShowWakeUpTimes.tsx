// screen for when to wake of if you want to go to bed now
import React, { useEffect, useState } from 'react';
import {Text, View} from 'react-native';
import HeaderText from './HeaderText';
import TimeBox from './TimeBox';
import styles from '../Styles/StyleForShowTimePage';
import {whenToWakeUp} from "../utils/whentowakeup";

const ShowWakeUpTimes = () => {
  const [times, setTime] = useState([{ id: 0, hrs: '', min: '', ampm: '' }]);

  useEffect( () => {
    setTime(whenToWakeUp)
  },[])

  const topTwo = times.slice(0, 2);
  const remaining = times.slice(2);
  
  return (
    <View>
      <HeaderText headerText="Sleep Calculator" />
      <Text style={styles.subHeading}>Wake-up time</Text>
      <Text style={styles.textStyle}>
        The average human takes 15 minutes to fall alseep.
      </Text>
      <Text style={styles.textStyle}>
        If you go to sleep right now, you should try to wake up at one of the
        following times:
      </Text>
      <View style={styles.timesContainer}>
        <View style={styles.topTwoTimes}>
          {topTwo.map(e => {
            return (
              <TimeBox
                key={e.id}
                hrs={e.hrs}
                min={e.min}
                ampm={e.ampm}
                suggested={true}
                topTwo={true}
              />
            );
          })}
        </View>

        <View style={styles.bottomTimes}>
          {remaining.map(e => {
            return (
              <TimeBox
                key={e.id}
                hrs={e.hrs}
                min={e.min}
                ampm={e.ampm}
                suggested={false}
              />
            );
          })}
        </View>
      </View>
      <Text style={styles.textStyle}>
        If you wake up at one of these times, you will rise in between 90-minute
        sleep cycles. A good night's sleep consists of 5-6 complete sleep
        cycles.
      </Text>
    </View>
  );
};

export default ShowWakeUpTimes;

