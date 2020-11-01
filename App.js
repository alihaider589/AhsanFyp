import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes/routes'
import firebase from 'firebase'

export default class App extends Component {
  componentWillMount(){
    if(!firebase.app.length){
    firebase.initializeApp({
      
      apiKey: "AIzaSyCLecy2i8vG1esvC3-KPV-wwR8orH_9O7Q",
      authDomain: "csmn-f3ba2.firebaseapp.com",
      databaseURL: "https://csmn-f3ba2.firebaseio.com",
      projectId: "csmn-f3ba2",
      storageBucket: "csmn-f3ba2.appspot.com",
      messagingSenderId: "173044083717",
      appId: "1:173044083717:web:aee099a9f92193ca64406c",
      measurementId: "G-FJCG0Z9S5Q"
          
    })
  }}
  render(){

    return (
      <Routes />
      );
    }
}


