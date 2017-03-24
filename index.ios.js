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

export default class Flex006 extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={[styles.view1,styles.base]}></View>
          <View style={[styles.view2,styles.base]}></View>
          <View style={[styles.view3,styles.base]}></View>
          <View style={[styles.view4,styles.base,{backgroundColor:'yellow'}]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"red",
 
  },
  base:{
     width:150,
    height:150,
    backgroundColor:'green',
  },
  view1:{
    // relative:相对布局  absolute:绝对布局
    // relative只能使用left和top，不能存在right，但absolute
    position:'absolute',
    // 如果使用relative 就要使用上下左右四个属性
    // left:左
    left:20,
    top:20
  },
  view2:{
    // relative:相对布局  absolute:绝对布局
    position:'absolute',
    // 如果使用relative 就要使用上下左右四个属性
    // right：右
    right:20,
    top:20
  },
  view3:{
    // relative:相对布局  absolute:绝对布局
    position:'absolute',
    // 如果使用relative 就要使用上下左右四个属性
    // right：右
    left:20,
    bottom:20
  },
   view4:{
    // relative:相对布局  absolute:绝对布局
    position:'absolute',
    // 如果使用relative 就要使用上下左右四个属性
    // right：右
    right:20,
    bottom:20
  }
});

AppRegistry.registerComponent('Flex006', () => Flex006);
