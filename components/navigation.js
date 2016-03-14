'use strict';

import React, {
  Text,
  Navigator,
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
      renderScene={this.renderScene}
      initialRoute={{
        component: Messenger,
        title: 'My View Title',
        passProps: { myProp: 'foo' },
      }}
    />
    );
    // return (
    //   <Navigator
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
      <View>
        <Text>TEST</Text>
      </View>
    );
  }
};


export default Navigation
