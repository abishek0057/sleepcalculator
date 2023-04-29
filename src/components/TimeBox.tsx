import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TimeBox = ({
  topTwo,
  suggested,
  hrs,
  min,
}: {
  topTwo?: boolean;
  suggested?: boolean;
  hrs: number;
  min: number;
}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
      }}>
      <Text style={[styles.timeText, topTwo ? {fontSize: 22} : null]}>
        {`${(hrs % 12).toString().padStart(2, '0')}:${min
          .toString()
          .padStart(2, '0')} ${hrs <= 12 ? 'PM' : 'AM'}  `}
        {suggested ? <Text style={styles.suggestedTxt}>Suggested</Text> : null}
      </Text>
    </View>
  );
};

export default TimeBox;

const styles = StyleSheet.create({
  timeText: {
    fontFamily: 'Oswald-Regular',
    fontSize: 20,
    backgroundColor: '#202646',
    color: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  suggestedTxt: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#FEDC87',
  },
});
