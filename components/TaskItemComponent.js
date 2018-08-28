import React, { Component } from 'react';
import {
  FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight, TouchableOpasity,
  RefreshControl, TextInput
} from 'react-native';

export default class TaskItemComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <TouchableOpasity onPress={() => {

        }}
          style={{
            position: 'absolute', top: 0, bottom: 0, left: 0, right: 0
          }}
        >
          <Text style={{ margin:20, color: this.props.completed === true ? 'darkgreen' : 'black'}}>
            {this.props.taskName}
          </Text>
        </TouchableOpasity>
      </View>
    )
  }
}
