import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const AppButton = (props:{btnText: string, navigation: any, name: string}) => {
  return (
    <TouchableHighlight style={styles.btn} activeOpacity={0.7} underlayColor="#fff" onPress={() => {props.navigation.navigate(props.name)}}>
      <Text style={styles.btnText}>{props.btnText}</Text>
    </TouchableHighlight>
  )
}

export default AppButton

const styles = StyleSheet.create({
  btn:{
    justifyContent:"center",
    backgroundColor: "#E1D9A8",
    paddingVertical: 10,
    width: 310,
    alignSelf: "center",
    borderRadius: 10,
  },
  btnText:{
    textAlign:"center",
    fontFamily:"Oswald-Regular",
    fontSize: 22,
    color: "#000000",
    letterSpacing:1.5
  }
})