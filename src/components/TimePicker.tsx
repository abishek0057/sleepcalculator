import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TimePicker = () => {
  return (
    <View>
      <View style={styles.timePicker}>
        <Text>Scrollable time picker will be here</Text>
      </View>
    </View>
  )
}

export default TimePicker

const styles = StyleSheet.create({
  timePicker:{
    backgroundColor:"blue",
    height:200,
    width: 330,
    borderRadius: 10,
    alignSelf:"center",
    marginBottom:20
  }
})