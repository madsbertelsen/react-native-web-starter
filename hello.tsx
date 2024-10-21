import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native-web';
import { useLivePreview } from '@payloadcms/live-preview-react';

export default ({ name }: { name: string }) => {
  const { data, isLoading } = useLivePreview({
    initialData: null,

    serverURL: 'https://payload.demo.mapstory.io',
    depth: 2,
  });
  if (data) {
    alert(data);
  }
  return (
    <View>
      <Image
        style={{ height: 100, width: '100%' }}
        source={{
          uri: 'https://payload.demo.mapstory.io/api/media/file/Cover%20i%20APP,%20Sallingsund%20-%201000x200.jpg',
        }}
      />
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};
