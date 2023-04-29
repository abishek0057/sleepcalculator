import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {RadioButton} from 'react-native-paper';

const TimePicker = () => {
  const [hour, setHours] = useState('07');
  const [min, setMins] = useState('00');
  const [amPm, setAmPm] = useState('AM');

  const handleHrs = (hrs: string) => {
    if (Number(hrs) > 12 || Number(hrs) < 1) setHours('12');
    else setHours(hrs.padStart(2, "0"));
  };

  const handleMins = (mins: string) => {
    if (Number(mins) > 59 || Number(mins) < 1) setMins('00');
    else setMins(mins.padStart(2, "0"));
  };

  const handleRadioButton = (value: any) => {
    setAmPm(value);
  };

  useEffect(() => {
  }, [hour, min, amPm]);

  return (
    <View>
      <View style={styles.timePicker}>
        <TextInput
          style={styles.input}
          maxLength={2}
          value={hour}
          keyboardType="numeric"
          onEndEditing={(e) => handleHrs(e.nativeEvent.text)}
          onChangeText={hrs => setHours(hrs)}
          selectTextOnFocus>
        </TextInput>
        <TextInput
          style={styles.input}
          maxLength={2}
          value={min}
          keyboardType="numeric"
          onEndEditing={(e) => handleMins(e.nativeEvent.text)}
          onChangeText={min => setMins(min)}
          selectTextOnFocus>
        </TextInput>
        <View style={styles.amPm}>
          <RadioButton.Group onValueChange={handleRadioButton} value={amPm}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value="AM" />
              <Text style={styles.radioText}>AM</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value="PM" />
              <Text style={styles.radioText}>PM</Text>
            </View>
          </RadioButton.Group>
        </View>
      </View>
    </View>
  );
};

export default TimePicker;

const styles = StyleSheet.create({
  timePicker: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: 200,
    width: 330,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    alignSelf: 'center',
    fontFamily: 'Oswald-Bold',
    fontSize: 40,
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
    width: 90,
    height: 90,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 15,
  },
  amPm: {
    backgroundColor: 'white',
    width: 90,
    height: 90,
    borderRadius: 15,
    textAlign: 'center',
    padding: 10,
  },
  radioText: {
    color: 'black',
    fontFamily: 'Oswald-Bold',
  },
});
