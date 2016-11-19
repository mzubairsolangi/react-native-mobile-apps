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
  View
} from 'react-native';
import { Button, Card, ListItem, SocialIcon,
  FormLabel, FormInput  } from 'react-native-elements';

export default class actionSheet extends Component {

  constructor(props){
    super(props)
    this.state = {
      text: '',
      users : [
            {
                name: 'Muhammad Zubair',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },
             {
                name: 'Shahzad',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            }
      ]
    }
  }

  render() {
    return (
      <View>
        <Card containerStyle={{padding: 10}} title='Employee List'>
            {
              this.state.users.map((u, i) => {
                return (
                  <ListItem
                    key={i}
                    roundAvatar
                    title={u.name}
                    avatar={{uri:u.avatar}} />
                    
                )
              })
            }
          </Card>
          <FormLabel>Name</FormLabel>
          <FormInput />
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
  }
});

AppRegistry.registerComponent('actionSheet', () => actionSheet);
