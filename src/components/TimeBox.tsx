import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TimeBox = (props: {
  topTwo?: boolean;
  suggested?: boolean;
  hrs: string;
  min: string;
  ampm: string;
}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
      }}>
      <Text style={[styles.timeText, props.topTwo ? {fontSize: 22} : null]}>
        {`${props.hrs}:${props.min} ${props.ampm.toUpperCase()}  `}
        {props.suggested ? (
          <Text style={styles.suggestedTxt}>Suggested</Text>
        ) : null}
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
