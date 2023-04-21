import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderText from './HeaderText';
import TimeBox from './TimeBox';
import styles from '../Styles/StyleForShowTimePage';

const ShowBedTimes = () => {
  const times = [
    {id: 6, hrs: '05', min: '32', ampm: 'pm'},
    {id: 5, hrs: '04', min: '02', ampm: 'pm'},
    {id: 4, hrs: '02', min: '32', ampm: 'pm'},
    {id: 3, hrs: '01', min: '02', ampm: 'pm'},
    {id: 2, hrs: '11', min: '32', ampm: 'am'},
    {id: 1, hrs: '10', min: '02', ampm: 'am'},
  ];

  let wakeUpTime = '6:30 AM';

  const topTwo = times.slice(0, 2);
  const remaining = times.slice(2);

  return (
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
        sleep cycles. A good night’s sleep consists of 5-6 complete sleep
        cycles.
      </Text>
    </View>
  );
};

export default ShowBedTimes;
