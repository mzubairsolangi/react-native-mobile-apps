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
  ListView,
  Image,
  View
} from 'react-native';
import { List, ListItem} from 'react-native-elements';
import { baseUrl } from './src/api/util';

export default class fetchAPI extends Component {

  constructor(props) {
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
     Books: ds.cloneWithRows([])
    }
  }

  // Automatically called by react when this component has finished mounting.
  componentDidMount () {
    this.fetchBooks();
  } 

  // This is where the magic happens! Fetches the data from our API and updates the application state.
  fetchBooks () {
    return fetch( baseUrl + '/books/v1/volumes?q=subject:fiction' )
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
          Books: this.state.Books.cloneWithRows(responseJson.items),
        });
      })
      .catch((error) => {
        console.error(error);
      });

  }

  renderRow (rowData, sectionID) {
    return (
      <ListItem
        roundAvatar
        key={sectionID}
        title={rowData.volumeInfo.authors[0]}
        subtitle={rowData.volumeInfo.title}
        avatar={{uri:rowData.volumeInfo.imageLinks.smallThumbnail}}
      />
    )
 }

  render() {
    return (
      <List containerStyle={{marginTop: 0}}>
      <Text style={styles.title}>Books and author's</Text>
        <ListView
          renderRow={this.renderRow}
          dataSource={this.state.Books}
        />
      </List>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign:'center', 
    padding:15,
    fontSize:20,
    backgroundColor: '#006666',
    color: "#ffffff"
  }
});

AppRegistry.registerComponent('fetchAPI', () => fetchAPI);
