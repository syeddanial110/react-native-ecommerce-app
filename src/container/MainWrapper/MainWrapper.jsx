import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {mainBgColor} from '../../assets/Colors/colors';

const MainWrapper = props => {
  return (
    // <View style={{backgroundColor:COLORS.black2}}>
    //     {props.children}
    // </View>
    <SafeAreaView style={{flex: 1}}>
      <View
        // source={mainbg}
        //  tintColor={'rgba(0,0,0,0.9)'}
        style={{backgroundColor: mainBgColor, flex: 1}}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};

export default MainWrapper;

const styles = StyleSheet.create({});
