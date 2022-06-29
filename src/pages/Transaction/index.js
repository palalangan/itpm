import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import {Background2, Logo1} from '../../assets';

const Transaction = () => {
  return (
    <View style={styles.page}>
      <Header title="Page Transaction" />
      <View style={styles.contentWrapper}>
        <Text>Masih Kosong</Text>
        <View style={styles.logo}>
          <Logo1 />
        </View>
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
    marginTop: 24,
  },
  logo: {
    flex: 1,
    height: 1.1,
    width: 1.1,
    resizeMode: 'contain',
    aspectRatio: 100,
  },
});
