import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeaderText = (props: {headerText: string}) => {
  return <Text style={styles.headerStyle}>{props.headerText}</Text>;
};

export default HeaderText;

const styles = StyleSheet.create({
  headerStyle: {
    color: '#ffffff',
    fontFamily: 'Oswald-Bold',
    fontSize: 45,
    textAlign: 'center',
    marginTop: 50,
    textDecorationLine: 'underline',
  },
});
