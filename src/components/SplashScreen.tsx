import React from 'react';
import Lottie from 'lottie-react-native';

const SplashScreen = (props: any) => {
  return (
    <Lottie
      source={require('../assets/splash.json')}
      autoPlay
      loop={false}
      speed={3}
      onAnimationFinish={() => props.navigation.navigate('Home')}
    />
  );
};

export default SplashScreen;
