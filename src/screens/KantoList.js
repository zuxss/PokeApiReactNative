import React from 'react';
import {View, Button} from 'react-native';
import Pokemon from './Kanto';

export default function KantoList({navigation}) {
  return (
    <View>
      <Pokemon></Pokemon>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}
