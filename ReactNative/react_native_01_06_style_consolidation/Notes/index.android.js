/***
 * Excerpted from "Seven Mobile Apps in Seven Weeks",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/7apps for more book information.
***/
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  View,
  ToolbarAndroid,
  StyleSheet,
} from 'react-native';

import MainScreen from './screens/MainScreen';
import NewNote    from './screens/NewNote';
import styles     from './styles';

var mainRoute = {name: 'Notes'};
var newNoteRoute = {name: 'New Note'};
var mainMenuActions = [ { title: 'New', show: 'ifRoom' } ];
var newNoteMenuActions = [
  { title: 'Save', show: 'ifRoom' },
  { title: 'Cancel', show: 'ifRoom' },
];

class Notes extends Component {

  initialRoute() {
    return mainRoute;
  }

  routeMapper(route, navigator) {
    switch(route.name) {
      case mainRoute.name: return (
        <View style={{flex:1}}>
          <ToolbarAndroid
            title={route.name}
            actions={mainMenuActions}
            style={styles.androidToolbar}
            onActionSelected={() => {
              navigator.push(newNoteRoute);
            }}
          />
          <MainScreen />
        </View>
      );
      case newNoteRoute.name: return (
        <View style={{flex:1}}>
          <ToolbarAndroid
            title={route.name}
            actions={newNoteMenuActions}
            style={styles.androidToolbar}
            onActionSelected={(position) => {
              switch(position) {
                case 0: return null;
                case 1: navigator.pop();
              }
            }}
          />
          <NewNote />
        </View>
      );
    }
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        initialRoute={this.initialRoute()}
        renderScene={this.routeMapper} />
    );
  }
}

AppRegistry.registerComponent('Notes', () => Notes);
