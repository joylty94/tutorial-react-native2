import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight,
        RefreshControl, TextInput } from 'react-native';
import { Icon } from 'native-base';

export default class AddComponent extends Component {
  constructor(props){
    super(props);
    this.state = ({
      newTaskName: '',
    })
  }
  render(){
    return(
      <View style={{
        backgroundColor: 'tomato',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'center',
        height: 64,
      }}>
        <TextInput style={{
          height: 40,
          width: 200,
          margin: 10,
          padding: 10,
          borderColor: 'white',
          borderWidth: 1,
          color: 'white'
        }}
          keyboardType='default'
          placeholderTextColor='white'
          placehoder='Enter task name'
          autoCapitalize='none'
          onChangeText={
            (text) => {
                this.setState({ newTaskName : text });
            }
          }
        />
        <TouchableHighlight style={{marginRight: 10}}
          underlayColor='blue'
          onPress={(event)=>{
            if (!this.state.newTaskName.trim()){
              return;
            }
            this.props.onClickAdd(this.state.newTaskName);
          }}
        >
          <Icon style={{ width: 35, height: 35 }} name='home' />
        </TouchableHighlight>
      </View>
    )
  }
}
