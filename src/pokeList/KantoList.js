import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

const globalStyles = require('../assets/styles/styles');

const KantoPoke = props => {
  const [pokemons, setPokemons] = useState([]);
  const [searchfeild, setSearchfeild] = useState('');

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())

      .then(pokemons => setPokemons(pokemons.results));
  };

  function uppLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <KeyboardAvoidingView style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View>
          {pokemons
            .filter(pokemon =>
              pokemon.name.toLowerCase().includes(searchfeild.toLowerCase()),
            )
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={globalStyles.containerPokes}>
                  <Text style={globalStyles.textPokemon}>
                    {uppLetter(pokemon.name)}
                  </Text>
                  <Image
                    style={{width: 120, height: 120}}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/diamond-pearl/normal/${pokemon.name}.png`,
                    }}
                  />
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
      <View>
        <TextInput
          style={globalStyles.searchBar}
          placeholder="Search Pokemons"
          onChangeText={value => setSearchfeild(value)}
          value={searchfeild}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default KantoPoke;
