import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CreateStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers/index'

export default class App extends React.Component {
  render() {
    let store = CreateStore(allReducers);
    return (
      <Provider store={store}>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
