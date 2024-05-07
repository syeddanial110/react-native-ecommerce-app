import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';


const Stories = ({image, name}) => {
  return (
    <TouchableOpacity>
      <Image source={image} style={styles.profileImg} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  text: {
    color: 'white',
  },
});

export default Stories;
