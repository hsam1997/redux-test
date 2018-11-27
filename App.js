import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from './src/reducers';
import Comp from './src/containers/Comp';
//const Cmp = () => {<View><Text>helloWorld!</Text></View>};

const createStoreWithMiddleware = applyMiddleware()(createStore);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Comp />
      </Provider>
    );
  }
}


