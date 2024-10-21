import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native-web';

export default ({ name }: { name: string }) => (
  <View>
    <Image
      style={{ height: 100, width: '100%' }}
      source={{
        uri: 'https://payload.demo.mapstory.io/api/media/file/Cover%20i%20APP,%20Sallingsund%20-%201000x200.jpg',
      }}
    />
  </View>
);
