import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const JohtoPoke = props => {
  const [pokemons, setPokemons] = useState([]);
  const [searchfeild, setSearchfeild] = useState('');

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=151')
      .then(response => response.json())

      .then(pokemons => setPokemons(pokemons.results));
  };

  function uppLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View>
      <View>
        <TextInput
          placeholder="Search Pokemons"
          onChangeText={value => setSearchfeild(value)}
          value={searchfeild}
        />
      </View>
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
                  style={styles.containerPokes}>
                  <Text>{uppLetter(pokemon.name)}</Text>
                  <Image
                    style={{width: 100, height: 100}}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/ruby-sapphire/normal/${pokemon.name}.png`,
                    }}
                  />
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPokes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    paddingBottom: 10,
    paddingTop: 10,
    marginRight: 15,
    marginLeft: 15,
    borderBottomWidth: 1,
  },
});

export default JohtoPoke;
