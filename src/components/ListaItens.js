import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';




export default class ListaItens extends Component {

  constructor(props){
    super(props);
    this.state = { listaItens:[]}
  }

  // roda antes de renderizar
  componentWillMount(){
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then((response) =>
  {
    this.setState({listaItens:response.data});
  }).catch(()=>{
    console.log('Erro');
  });

  }


  render() {
    return (
    <ScrollView style={{backgroundColor:'#DDD'}}>
     { this.state.listaItens.map((item) => {return(<Itens key={item.titulo} item={item}/>)})}
        {/* <Itens/>
        <Itens/>
        <Itens/> */}
    </ScrollView>
    );
  }
}


