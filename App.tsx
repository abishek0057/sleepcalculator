import React from 'react';
import HomeScreen from './src/components/HomeScreen';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShowBedTimes from './src/components/ShowBedTimes';
import ShowWakeUpTimes from './src/components/ShowWakeUpTimes';
import SplashScreen from './src/components/SplashScreen';
const stack = createNativeStackNavigator();

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#080F31',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={myTheme}>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Splash" component={SplashScreen} />
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="ShowBedTimes" component={ShowBedTimes} />
        <stack.Screen name="ShowWakeUpTimes" component={ShowWakeUpTimes} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
