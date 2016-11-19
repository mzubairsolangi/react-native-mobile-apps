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
  ScrollView,
  View
} from 'react-native';

export class Greeting extends Component {
   constructor(props) {
    super(props);
     this.state = {
      pic:{uri: this.props.pic}
    };
  }
  
  render() {
    return (
      <View style={{alignItems: 'center', marginVertical: 10}}>
        <Image source={this.state.pic} style={{width: 350, height: 110}}/>
        <Text style={styles.title}>{this.props.name}!</Text>
      </View>
    );
  }
}

export default class imagesList extends Component {
  render() {
    return (
      <ScrollView>
        <Greeting name='AngularJS' pic='https://eyalvardi.files.wordpress.com/2013/04/angularjs-logo.png' />
        <Greeting name='NodeJS' pic='http://benznext.com/wp-content/uploads/2015/04/nodejs_logo_green.jpg' />
        <Greeting name='Ionic' pic='http://blog.teamtreehouse.com/wp-content/uploads/2015/05/ionic.jpg' />
        <Greeting name='ReactJS' pic='https://d2sis3lil8ndrq.cloudfront.net/screencasts/46e215cd-2eb3-4cf0-b699-713977a2b644.png' />
        <Greeting name='MongoDB' pic='http://nop4you.com/content/images/thumbs/0001494_search-engine-powered-by-mongodb.jpeg' />
        <Greeting name='Javascript' pic='http://ourcodeworld.com/public-media/articles/articleocw-565adecfc4fe7.jpg' />
        <Greeting name='Firebase' pic='http://www.zone-numerique.com/wp-content/uploads/2014/10/firebase-logo.jpg' />
        <Greeting name='Python' pic='https://cdn.fedoramagazine.org/wp-content/uploads/2015/11/Python_logo.png' />
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
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('imagesList', () => imagesList);

//  A View is useful as a container for other components, to help control style and layout.

