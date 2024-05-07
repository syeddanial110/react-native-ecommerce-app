import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import image1 from '../../assets/images/profile.png';

const Chats = () => {
  return (
    <View style={styles.chatView}>
      <Image
        source={image1}
        style={{height: 80, width: 80, borderRadius: 50}}
      />
      <View style={{flex: 1}}>
        <Text style={styles.chatText}>Someone</Text>
        <Text style={styles.chatDescriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
          impedit minima? Explat
        </Text>
      </View>
      <View>
        <Text style={styles.notificationCountText}>3</Text>
      </View>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  chatView: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  chatText: {
    color: 'white',
    fontSize: 20,
  },
  chatDescriptionText: {
    color: 'white',
    fontSize: 15,
  },
  notificationCountText: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'red',
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 20,
  },
});
