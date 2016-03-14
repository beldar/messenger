/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

//import Navigation from './components/navigation'
import Navigation from './components/navigation'


class App extends Component {
  render() {
    return (
      <View>
        <Navigation />
      </View>
    );
  }
};

AppRegistry.registerComponent('Messenger', () => App);
