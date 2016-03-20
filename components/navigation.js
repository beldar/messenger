'use strict';

import React, {
  Text,
  Navigator,
  NavigatorIOS,
  View,
  Platform,
  Component
} from 'react-native';

import Messenger from './messenger';

class Navigation extends Component {
  render() {
    console.log(Navigator);
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{id: 'first'}}
        renderScene={this.renderScene}
        sceneStyle={{paddingTop: (Platform.OS === 'android' ? 56 : 64)}}
        navigationBar={this._renderNavBar()}
        />

    );
    // return (
    //   <Navigator
    //     style={{flex:1, background: 'black'}}
    //     initialRoute={{index: 0, title: 'Gifted Messenger'}}
    //     renderScene={this.renderScene}
    //     configureScene={(route) => {
    //       if (route.sceneConfig) {
    //         return route.sceneConfig;
    //       }
    //       return Navigator.SceneConfigs.FloatFromRight;
    //     }}
    //
    //     sceneStyle={{paddingTop: (Platform.OS === 'android' ? 56 : 64)}}
    //
    //     navigationBar={this._renderNavBar()}
    //   />
    // );
  }

  _renderNavBar() {
    var _self = this;
    var routeMapper = {
      LeftButton(route, navigator, index, navState) {
        return null;
      },
      RightButton(route, navigator, index, navState) {
        return null;
      },
      Title(route, navigator, index, navState) {
        return null;
      }
    };
    return (
      <Navigator.NavigationBar
        style={{
          flex: 1,
          backgroundColor: '#007aff',
          alignItems: 'center',
        }}
        routeMapper={routeMapper}
      />
    );
  }

  renderScene(route, navigator) {
    console.log('Render scene');
    return (
      <Messenger />
    );
  }
};


export default Navigation
