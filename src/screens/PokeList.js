import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
function uppLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const renderPokeList = ({props}) => {
  return (
    <View>
      return (
      <TouchableOpacity activeOpacity={0.5} key={index}>
        <Text>{uppLetter(props.name)}</Text>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: `https://img.pokemondb.net/sprites/ruby-sapphire/normal/${pokemon.name}.png`,
          }}
        />
      </TouchableOpacity>
      );
    </View>
  );
};

export default renderPokeList;
