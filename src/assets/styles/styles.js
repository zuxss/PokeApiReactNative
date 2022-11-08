'use strict';
import {StyleSheet, Dimensions} from 'react-native';

module.exports = StyleSheet.create({
  containerPokes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#98C1D9',
    paddingBottom: 10,
    paddingTop: 10,
    margin: 10,
    borderWidth: 4,
    borderRadius: 40,
    backgroundColor: '#34A0A4',
    alignItems: 'center',
  },
  textPokemon: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 20,
  },

  searchBar: {
    backgroundColor: '#c4c4c4dd',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#98C1D9',
    margin: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
