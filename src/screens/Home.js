import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Dimensions,
  Image,
} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.homeContainer}>
      <ImageBackground
        source={require('../assets/pokeScreen2.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <Image
          source={require('../assets/pokeLogo.png')}
          style={{width: 250, height: 150}}></Image>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('Kanto')}>
          <View>
            <Text style={styles.buttonText}>Kanto</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('Johto')}>
          <View>
            <Text style={styles.buttonText}>Johto</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('Hoenn')}>
          <View>
            <Text style={styles.buttonText}>Hoenn</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('Sinnoh')}>
          <View>
            <Text style={styles.buttonText}>Sinnoh</Text>
          </View>
        </TouchableHighlight>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,

    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 32,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    height: 70,
    alignItems: 'center',
    backgroundColor: '#98C1D9',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 32,
  },
});
