import React, {useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      >
      <View>
        <Text>Home Screen</Text>
        <Text>Count : {count}</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.push('About')}
        />
        <Button title="Counter" onPress={() => setCount(count + 1)} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
