import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header_home} from '../../components';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header_home title="Money Tracker" title2="Track your money" />
      <View style={styles.contentWrapper}>
        <Text style={styles.text}>Your Balance</Text>
        <Text style={styles.text1}>Rp. 10.000.000</Text>
        <Text style={styles.line}>
          ______________________________________________________
        </Text>
        <View style={styles.contentWrapper1}>
          <Text style={styles.text2}>Cash On Hand</Text>
          <Text style={styles.text2}>Rp. 4.000.000</Text>
        </View>
        <View style={styles.contentWrapper1}>
          <Text style={styles.text2}>Cash On Bank</Text>
          <Text style={styles.text2}>Rp. 6.000.000</Text>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.text}>Add Transaction</Text>
        <Gap height={8.81} />
        <Button
          textColor="#020202"
          title={'Cash On Hand'}
          onPress={() => navigation.navigate('TransactionHand')}
        />
        <Gap height={18.04} />
        <Button
          textColor="#020202"
          title={'Cash On Bank'}
          onPress={() => navigation.navigate('TransactionBank')}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 13,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    paddingTop: 10.6,
    color: '#000000',
  },
  text1: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    paddingHorizontal: 93,
    color: '#000000',
  },
  text2: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    paddingTop: 20,
  },
  line: {
    lineHeight: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    color: '#000000',
  },
  contentWrapper1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 145,
  },
});
