import React from 'react';
import {View, Button} from 'react-native';
import JohtoPoke from './Johto';

export default function JohtoList({navigation}) {
  return (
    <View>
      <JohtoPoke></JohtoPoke>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
