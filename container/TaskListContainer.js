import React, { Component } from 'react';
import {
  FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight,
  RefreshControl, TextInput
} from 'react-native';
import { connect } from 'react-redux';

import TaskListComponent from '../components/TaskListComponent';

const TaskListContainer = connect(
  // mapStateToProps
  state => {
    return {
      tasks: !state.taskReducers ? [] : state.taskReducers
    }
},
  // mapDispatchToProps
  dispatch => ({
  })
)(TaskListComponent);

export default TaskListContainer;
