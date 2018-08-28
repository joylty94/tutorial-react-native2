import React, { Component } from 'react';
import {
  FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight,
  RefreshControl, TextInput
} from 'react-native';

import AddContainer from '../container/AddContainer';
import TaskListContainer from '../container/TaskListContainer';

export default class TaskManagerComponents extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
        <AddContainer/>
        <TaskListContainer/>
      </View>
    )
  }
}
