import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const AboutUsScreen = ({navigation}) => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>About Screen</Text>
        <Text>Count : {count}</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('ProductDetail')}
        />
        <Button title="Counter" onPress={() => setCount(count + 1)} />
      </View>
    </SafeAreaView>
  );
};

export default AboutUsScreen;
