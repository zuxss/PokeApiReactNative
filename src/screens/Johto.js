import React from 'react';
import {View} from 'react-native';
import JohtoPoke from '../pokeList/JohtoList';

export default function JohtoList({navigation}) {
  return (
    <View>
      <JohtoPoke></JohtoPoke>
    </View>
  );
}
