import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StackHeader from '../../container/Header/StackHeader';
import {mainBgColor} from '../../assets/Colors/colors';
import TextField from '../../components/TextField/TextField';
import Chats from '../../container/Chat/Chats';

const ChatScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: mainBgColor, flex: 1}}>
      <StackHeader />
      <View style={styles.mainView}>
        <TextField placeholder="Search here" />

        <View style={{paddingTop: 10, gap: 10}}>
          <Chats />
          <Chats />
          <Chats />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
  },
});
