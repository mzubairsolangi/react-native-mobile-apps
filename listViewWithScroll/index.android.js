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
  Text,
  ListView,
  Image,
  View
} from 'react-native';

export default class listViewWithScroll extends Component {

   constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {desc:"iOS developer", src:{uri: "http://files.softicons.com/download/business-icons/azuline!-business-icons-by-iconleak/png/256x256/5.png"}},
        {desc:"Front End developer", src:{uri: "http://files.softicons.com/download/business-icons/azuline!-business-icons-by-iconleak/png/256x256/5.png"}},
        {desc:"Android developer", src:{uri: "http://files.softicons.com/download/business-icons/azuline!-business-icons-by-iconleak/png/256x256/5.png"}},
        {desc:"Java developer", src:{uri: "http://files.softicons.com/download/business-icons/azuline!-business-icons-by-iconleak/png/256x256/5.png"}},
        {desc:"Web designer", src:{uri: "http://files.softicons.com/download/business-icons/azuline!-business-icons-by-iconleak/png/256x256/5.png"}},
        {desc:"Graphics designer", src:{uri: "http://files.softicons.com/download/business-icons/azuline!-business-icons-by-iconleak/png/256x256/5.png"}},
        {desc:"back End developer", src:{uri: "http://files.softicons.com/download/business-icons/azuline!-business-icons-by-iconleak/png/256x256/5.png"}},
        {desc:"Web designer", src:{uri: "http://files.softicons.com/download/business-icons/azuline!-business-icons-by-iconleak/png/256x256/5.png"}},
        {desc:"Graphics designer", src:{uri: "http://files.softicons.com/download/business-icons/azuline!-business-icons-by-iconleak/png/256x256/5.png"}},
        {desc:"back End developer", src:{uri: "http://files.softicons.com/download/business-icons/azuline!-business-icons-by-iconleak/png/256x256/5.png"}}
     
      ])
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, paddingTop: 0}}>
           <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, backgroundColor: '#66ccff'}}>
                        <Text style={{textAlign:'center', padding:10}}> Employees List </Text>
                </View>
           </View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={
              (rowData) => 
              <View style={{flex: 1, paddingTop: 22}}>
                <View style={{flex: 1, flexDirection: 'row'}} >
                  <Image source={rowData.src} style={{width: 70, height: 70}}/>
                   <Text style={{padding: 20}}>{rowData.desc}</Text>
                </View>
              </View>
            }
          />
       </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({ });

AppRegistry.registerComponent('listViewWithScroll', () => listViewWithScroll);
