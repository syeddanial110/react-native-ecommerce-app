import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import instagramImg from '../../assets/icons/instaLogo.png';
import likeOutline from '../../assets/icons/likeOutline.png';
import chatIcon from '../../assets/icons/chat.png';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerView}>
      <Image
        source={instagramImg}
        style={{height: 60, width: 200, resizeMode: 'contain'}}
      />
      <View style={{flexDirection: 'row', gap: 10}}>
        <TouchableOpacity>
          <Image source={likeOutline} style={{height: 30, width: 30}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Image source={chatIcon} style={{height: 30, width: 30}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Header;
