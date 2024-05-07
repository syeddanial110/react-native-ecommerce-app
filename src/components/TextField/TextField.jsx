import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const TextField = ({onChangeText, value, ...props}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor="#ffffff"
      {...props}
    />
  );
};

export default TextField;

const styles = StyleSheet.create({
  input: {
    height: 45,
    // margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    borderRadius: 10,
    color: 'white',
  },
});
