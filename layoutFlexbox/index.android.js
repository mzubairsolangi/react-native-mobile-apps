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
       <View style={{flex: 1, backgroundColor: '#9ACD32'}}>
          <Text style={{textAlign:'center', padding:10}}>Flex Direction - Row</Text>
       </View>
      </View>

      <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#E6E6FA', height:300}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}><Text>Row 1</Text></View>
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} ><Text>Row 2</Text></View>
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}><Text>Row 3</Text></View>
          </View>
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
       <View style={{flex: 1, backgroundColor: '#9ACD32'}}>
              <Text style={{textAlign:'center', padding:10}}> Flex Direction - Column</Text>
       </View>
      </View>

      <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#E6E6FA', height:270}}>
        <View style={{flex: 1, flexDirection: 'Column'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}><Text>Column 1</Text></View>
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} ><Text>Column2</Text></View>
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}><Text>Column 3</Text></View>
        </View>
      </View>

       <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: '#9ACD32'}}>
                <Text style={{textAlign:'center', padding:10}}> Justify - space-between </Text>
        </View>
      </View>

      <View style={{flex: 1, flexDirection: 'row', backgroundColor:'Gray ', height:270}}>
        <View style={{flex: 1, flexDirection: 'Column', justifyContent: 'space-between'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}><Text>Column 1</Text></View>
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} ><Text>Column2</Text></View>
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}><Text>Column 3</Text></View>
        </View>
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: '#9ACD32'}}>
                <Text style={{textAlign:'center', padding:10}}> Justify - flex-start</Text>
        </View>
      </View>
       <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#E6E6FA', height:270}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}><Text>Column 1</Text></View>
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} ><Text>Column2</Text></View>
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}><Text>Column 3</Text></View>
        </View>
      </View>

       <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: '#9ACD32'}}>
                <Text style={{textAlign:'center', padding:10}}> Justify - center, </Text>
        </View>
      </View>

       <View style={{flex: 1, flexDirection: 'row', backgroundColor:'	#E6E6FA', height:270}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}><Text>Column 1</Text></View>
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} ><Text>Column2</Text></View>
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}><Text>Column 3</Text></View>
        </View>
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: '#9ACD32'}}>
                <Text style={{textAlign:'center', padding:10}}> Justify - flex-end</Text>
        </View>
      </View>

       <View style={{flex: 1, flexDirection: 'row', backgroundColor:'E6E6FA ', height:270}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}><Text>Column 1</Text></View>
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} ><Text>Column2</Text></View>
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}><Text>Column 3</Text></View>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: '#9ACD32'}}>
                <Text style={{textAlign:'center', padding:10}}> Align Items  - alignItems:center</Text>
        </View>
      </View>

       <View style={{flex: 1, flexDirection: 'row', backgroundColor:'E6E6FA ', height:270}}>
         <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
      </View>
    </ScrollView>
    );
  }
}

AppRegistry.registerComponent('layoutFlexbox', () => layoutFlexbox);
