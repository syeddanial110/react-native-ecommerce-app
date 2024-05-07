import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const StackHeader = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color="#ffffff" size={30} />
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 30}}>Chat</Text>
      </View>
    </View>
  );
};

export default StackHeader;

const styles = StyleSheet.create({});
