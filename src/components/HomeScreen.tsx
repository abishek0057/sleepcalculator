import {
  StyleSheet,
  Text,
  View,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderText from './HeaderText';
import AppButton from './AppButton';
import TimePicker from './TimePicker';


function OpenInspiredBy() {
  Linking.openURL('https://sleepcalculator.com/');
}

const HomeScreen = (props: {navigation: object}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <HeaderText headerText="Sleep Calculator" />
          <Text style={styles.textStyle}>
            What time do you want to wake up?
          </Text>
          <TimePicker />
          <AppButton
            btnText="Calculate Bedtime"
            name="ShowBedTimes"
            navigation={props.navigation}
          />
          <Text style={styles.textStyle}>If you want to go to bed now...</Text>
          <AppButton
            btnText="Calculate wake-up time"
            name="ShowWakeUpTimes"
            navigation={props.navigation}
          />
          <Pressable onPress={OpenInspiredBy}>
            <Text style={[styles.InspiredBy]}>
              Inspired by{' '}
              <Text style={{fontStyle: 'italic'}}>SleepCalculator.com</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textStyle: {
    color: '#ffffff',
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Oswald-Regular',
    fontSize: 22,
  },
  InspiredBy: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Oswald-Regular',
    marginTop: 150,
  },
});
