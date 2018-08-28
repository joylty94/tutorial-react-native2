import React, { Component } from 'react';
import {
  FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight,
  RefreshControl, TextInput
} from 'react-native';
import { connect } from 'react-redux';

import AddComponent from '../components/AddComponent';
import { addNewTask } from '../actions';

const AddContainer = connect(
  // mapStateToProps
  state => ({

  }),
  // mapDispatchToProps
  dispatch => ({
    onClickAdd: (inputTaskName) => {
      dispatch(addNewTask(inputTaskName))
    }
  })
)(AddComponent);

export default AddContainer;
