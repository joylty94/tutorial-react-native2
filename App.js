import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CreateStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers'
import TaskManagerComponent from './components/TaskManagerComponent'

export default class App extends React.Component {
  render() {
    let store = CreateStore(allReducers);
    return (
      <Provider store={store}>
        <TaskManagerComponent/>
      </Provider>
    );
  }
}