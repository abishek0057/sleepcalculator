// screen for when to wake of if you want to go to bed now

import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import HeaderText from './HeaderText';
import TimeBox from './TimeBox';
import styles from '../Styles/StyleForShowTimePage';
import {calculateWakeUpTime} from '../utils/whentowakeup';
import {wakeUpTimeType} from '../types/types';

const ShowWakeUpTimes = () => {
  const [wakeUpTimes, setWakeUpTimes] = useState<wakeUpTimeType[]>([]);

  useEffect(() => {
    setWakeUpTimes(calculateWakeUpTime);
  }, []);

  const topTwo = wakeUpTimes.slice(0, 2);
  const remaining = wakeUpTimes.slice(2);

  return (
    <ScrollView>
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
            {topTwo.map(time => {
              return (
                <TimeBox
                  key={time.id}
                  hrs={time.hrs}
                  min={time.min}
                  period={time.period}
                  suggested={true}
                  topTwo={true}
                />
              );
            })}
          </View>

          <View style={styles.bottomTimes}>
            {remaining.map(time => {
              return (
                <TimeBox
                  key={time.id}
                  hrs={time.hrs}
                  min={time.min}
                  period={time.period}
                  suggested={false}
                />
              );
            })}
          </View>
        </View>
        <Text style={styles.textStyle}>
          If you wake up at one of these times, you will rise in between
          90-minute sleep cycles. A good night's sleep consists of 5-6 complete
          sleep cycles.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ShowWakeUpTimes;
