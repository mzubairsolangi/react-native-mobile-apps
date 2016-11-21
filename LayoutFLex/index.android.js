/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

export default class LayoutFLex extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}} />
       </View>    
    );
  }
}


AppRegistry.registerComponent('LayoutFLex', () => LayoutFLex);

// Use flex in a component's style to have the component expand and shrink dynamically based on available space. 
//  Normally you will use flex: 1, which tells a component to fill all available space, shared evenly amongst each other component with the same parent. 
// A component can only expand to fill available space if its parent has dimensions greater than 0.

