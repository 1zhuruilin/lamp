import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class type extends Component {
  render() {
    return (
      <View>
        <Text>主轴方向</Text>
        <view>
            <text>flexDirection:'column'（默认）</text>
            <view>
                <text>刘备</text>
                <text>关羽</text>
                <text>张飞</text>
            </view>
        </view>

      </View>
    )
  }
},

const styles = StyleSheet.create({})