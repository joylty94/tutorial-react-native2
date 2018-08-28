import React, { Component } from 'react';
import {
  FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight,
  RefreshControl, TextInput
} from 'react-native';

import TaskItemContainer from '../container/TaskItemContainer'

export default class TaskListComponent extends Component {
  render(){
    return(
      <FlatList
        data={this.props.tasks}
        renderItem={({item, index}) => {
          return (
            <TaskItemContainer {...item}>
            </TaskItemContainer>
          )
        }}
        keyExtractor={(item, index) => item.taskName}
      >

      </FlatList>
    )
  }
}
