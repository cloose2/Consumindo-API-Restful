import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ListaItens from './src/components/ListaItens';
import Itens from './src/components/Itens';




export default class App extends Component {

 

  render() {
   // console.log('renderiza');
    return (
      <ListaItens></ListaItens>
    );
  }
}


AppRegistry.registerComponent('app4', () => App);