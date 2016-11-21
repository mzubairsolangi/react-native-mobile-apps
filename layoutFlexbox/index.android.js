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
  View,
  ScrollView  
} from 'react-native';

export default class layoutFlexbox extends Component {
  render() {
    return (
   <ScrollView>
      <View style={{flex: 1, flexDirection: 'row'}}>
       <View style={{width: 300, height: 50, backgroundColor: '#ffff66'}}>
          <Text style={{ftextAlign:'center', padding:10}}>Flex Direction </Text>
       </View>
      </View>

       <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}><Text>Flex row 1</Text></View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} ><Text>Flex row 2</Text></View>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}><Text>Flex row 3</Text></View>
      </View>

      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}><Text>Flex column 1</Text></View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} ><Text>Flex column 2</Text></View>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}><Text>Flex column 3</Text></View>
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
       <View style={{width: 300, height: 50, backgroundColor: '#ffff66'}}>
          <Text style={{ftextAlign:'center', padding:10}}>Justify Content </Text>
       </View>
      </View>

       <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
       <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}><Text>Flex 1</Text></View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} ><Text>Flex 2</Text></View>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}><Text>Flex 3</Text></View>
      </View>
      </View>


      <View style={{flex: 1, flexDirection: 'row'}}>
       <View style={{width: 300, height: 50, backgroundColor: '#ffff66'}}>
          <Text style={{ftextAlign:'center', padding:10}}>Align Items  </Text>
       </View>
      </View>
       <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}><Text>Flex 1</Text></View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} ><Text>Flex 2</Text></View>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}><Text>Flex 3</Text></View>
      </View>
    </ScrollView>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('layoutFlexbox', () => layoutFlexbox);
