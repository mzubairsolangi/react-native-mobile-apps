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
  ScrollView,
  View
} from 'react-native';

export default class layoutHightWidth extends Component {
  render() {
    return (
       <ScrollView>
          <View style={styles.titleContainer}>
            <View style={styles.titleFlex}>
                <Text style={styles.title}>Layout Height Width </Text>
                <Text style={styles.title}>Layout with Fixed Dimensions  </Text>
            </View>
          </View>
          <View>
            <View style={styles.boxOne} > 
                <Text>Layout 1 WH:100</Text>
            </View>
            <View  style={styles.boxTwo} > 
                <Text>Layout 2 WH:200 </Text>
            </View>
             <View style={styles.boxThree} > 
                <Text>Layout 3 WH:300 </Text>
            </View>
             <View style={styles.boxFour}> 
                <Text>Layout 3  WH:350  </Text>
            </View>
          </View>
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'stretch'
  },
  titleFlex: {
    flex: 1, 
    backgroundColor: '#ffff66',
    alignItems: 'stretch'
  },
  title: {
    textAlign:'center', 
    padding:10
  },
  boxOne: {
    width: 100, 
    height: 100, 
    backgroundColor: 'powderblue'
  },
  boxTwo: {
    width: 200, 
    height: 200, 
    backgroundColor: 'skyblue'
  },
  boxThree: {
    width: 300, 
    height: 300, 
    backgroundColor: '#00ffff'
  },
  boxFour: {
    width: 350, 
    height: 350, 
    backgroundColor: 'steelblue'
  }
});

AppRegistry.registerComponent('layoutHightWidth', () => layoutHightWidth);
