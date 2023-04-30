import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import HeaderText from './HeaderText';
import TimeBox from './TimeBox';
import styles from '../Styles/StyleForShowTimePage';
import { useEffect, useState } from 'react';
import {calculateSleepAt} from '../utils/calculatesleepat'
import AsyncStorage from '@react-native-async-storage/async-storage';


const ShowBedTimes = () => {
  const [pickedTime, setPickedTime] = useState({hour: '', min: '', amPm: ''});
  const [times, setTimes] = useState([{ id: 0, hrs: '', min: '', ampm: '' }]);

  useEffect( () => {
    (async () => {
      const pickedTime = await AsyncStorage.getItem("pickedTime");
      if (pickedTime) {
        let {hour, min, amPm} = JSON.parse(pickedTime);
        setPickedTime({hour, min, amPm})
        let tempHrs = Number(hour)      
        let tempMin = Number(min)
        let tempAmPm = amPm.toLowerCase()
        setTimes(calculateSleepAt(tempHrs, tempMin, tempAmPm))      
      }
    })();
  },[]);

  let wakeUpTime = `${pickedTime.hour}:${pickedTime.min} ${pickedTime.amPm.toUpperCase()}`;

  const topTwo = times.slice(0, 2);
  const remaining = times.slice(2);

  return (
    <ScrollView>
      <View>
      <HeaderText headerText="Sleep Calculator" />
      <Text style={styles.subHeading}>Bedtime</Text>
      <Text style={styles.textStyle}>
        The average human takes 15 minutes to fall alseep.
      </Text>
      <Text style={styles.textStyle}>
        {`To wake up refreshed at ${wakeUpTime}, you need go to sleep at one of the following times:`}
      </Text>
      <View style={styles.timesContainer}>
        <View style={styles.topTwoTimes}>
          {topTwo.map(e => {
            return (
              <TimeBox
                key={e.id}
                hrs={e.hrs}
                min={e.min}
                period={e.ampm}
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
                period={e.ampm}
                suggested={false}
              />
            );
          })}
        </View>
      </View>
      <Text style={styles.textStyle}>
        If you wake up at one of these times, you will rise in between 90-minute
        sleep cycles. A good night’s sleep consists of 5-6 complete sleep
        cycles.
      </Text>
    </View>
    </ScrollView>
  );
};

export default ShowBedTimes;
