import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Background, Background2, Logo, Logo1} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* <View>
        <Background2 />
      </View> */}
      <View>
        <Logo1 />
      </View>
      {/* <Text style={styles.text}>Christian Friendly Maabuat</Text> */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#90EE91',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  text: {
    color: '#020202',
    fontSize: 32,
    fontFamily: 'Poppins-Regular',
  },
});
