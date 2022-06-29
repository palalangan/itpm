import {
  StyleSheet,
  View,
  Text,
  TextInput as TextInput_React_Native,
} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {showMessage} from 'react-native-flash-message';
import {Kecil, Logo1} from '../../assets';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      {/* <Header title="Sign in" /> */}
      <View style={styles.contentWrapper}>
        <View style={styles.Logo1}>
          <Kecil />
        </View>
        <TextInput title="Username" />
        <Gap height={16} />
        <Text style={styles.Text}>Password</Text>
        <TextInput_React_Native
          style={styles.Input}
          title="Password"
          secureTextEntry={true}
        />
        <Gap height={24} />
        <Button
          title="Login"
          color="#53D654"
          textColor="white"
          onPress={() => {
            navigation.navigate('SignIn');
            showMessage({
              message: 'Error!!',
              description: 'Data base not found!',
              backgroundColor: 'red',
            });
          }}
        />
        <Gap height={12} />
        <Button
          title="Register"
          color="#53D654"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
    marginTop: 24,
  },
  Text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 6,
    color: '#000000',
  },
  Input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingLeft: 10,
    paddingHorizontal: 10,
  },
  Logo1: {
    alignItems: 'center',
    paddingBottom: 30,
  },
});
