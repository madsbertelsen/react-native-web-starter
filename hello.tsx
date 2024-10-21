import React from 'react';
import { Text, StyleSheet } from 'react-native-web';

export default ({ name }) => <Text style={styles.text}>Hello {name}!</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  }
})
