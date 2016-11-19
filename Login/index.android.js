/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import { Button, Card, ListItem, SocialIcon,
  FormLabel, FormInput  } from 'react-native-elements';

export default class actionSheet extends Component {

  constructor(props){
    super(props)
    this.state = {
      pic : {
        uri: 'http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png'
      }
    }
  }

  render() {
    return (
      <View>
          <Image source={this.state.pic} style={{width: 150, height: 110, margin: 20, marginLeft:100, borderRadius:180}}/>
          <FormLabel>Name</FormLabel>
          <FormInput type="text"/>
          <FormLabel>Password</FormLabel>
          <FormInput type="password"/>

         <SocialIcon
            title='Login'
            button
            type='medium'
          />
          <Text style={styles.title}>OR</Text>
          <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
   title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
    
  },
  btnRadius: {
     borderRadius: 10,
  }

});

AppRegistry.registerComponent('actionSheet', () => actionSheet);
