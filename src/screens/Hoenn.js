import React from 'react';
import {View} from 'react-native';
import HoennPoke from '../pokeList/HoennList';

export default function JohtoList({navigation}) {
  return (
    <View>
      <HoennPoke></HoennPoke>
    </View>
  );
}
