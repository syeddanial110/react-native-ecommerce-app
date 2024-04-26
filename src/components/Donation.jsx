import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const Donation = () => {
  return (
    <View style={styles.container}>
      <Text>App.tsx</Text>
      <WebView
        source={{uri: 'https://reactnative.dev/'}}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    height: 420,
  },
  webview: {
    flex: 1,
  },
});

export default Donation;
