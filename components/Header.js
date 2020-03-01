import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Headers = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Hello World!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Headers;
