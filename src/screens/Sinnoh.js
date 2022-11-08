import React from 'react';
import {View} from 'react-native';
import SinnohPoke from '../pokeList/SinnohList';

export default function SinnohList({navigation}) {
  return (
    <View>
      <SinnohPoke></SinnohPoke>
    </View>
  );
}
