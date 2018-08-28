import React, { Component } from 'react';
import {
  FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight,
  RefreshControl, TextInput
} from 'react-native';
import { connect } from 'react-redux';

import TaskItemComponent from '../components/TaskItemComponent';

export default connect(
  // mapStateToProps
  state => ({

  }),
  // mapDispatchToProps
  dispatch => ({
  })
)(TaskItemComponent);
