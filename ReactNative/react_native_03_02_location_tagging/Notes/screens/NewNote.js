/***
 * Excerpted from "Seven Mobile Apps in Seven Weeks",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/7apps for more book information.
***/
'use strict';

import React, {Component} from 'react'; 
import {
    AppRegistry,
    View,
    TextInput,
    Text,
    TouchableOpacity,
} from 'react-native';

import styles from '../styles';

class NewNote extends Component {

  constructor(props) {
    super(props)
    this.getLocationTimeoutMax = 2;
    this.getLocationTimeoutAttempts = 0;
    this.addLocationPressed = this.addLocationPressed.bind(this);
  }

  componentDidMount() {
    this.props.saveEventEmitter.addListener('shouldSaveNewNote',
                                         this.saveNote, this);
  }

  componentWillUnmount() {
    this.props.saveEventEmitter.removeAllListeners('shouldSaveNewNote');
  }

  saveNote({model:model}) {
    model.createNewNote(
      this.state.noteTitle,
      this.state.noteBody
    );
  }

  addLocationPressed() {
    this.getLocation();
  }

  getLocation() {
    var self = this;
    self.getLocationTimeoutAttempts = 1;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        self.locationLoaded(position);
      },
      (error) => {
        if (error.code === error.TIMEOUT &&
            self.getLocationTimeoutAttempts <
            self.getLocationTimeoutMax) {
          self.getLocation();
        } else {
          alert(error.message)
        }
      },
      {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000}
    );
  }

  locationLoaded(position) {
    console.log(position);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref='titleText'
          placeholder="Note Title"
          onChangeText={(text) =>
            this.setState({...this.state, noteTitle:text})}
          style={[styles.noteTextInput, styles.titleTextInput]} />
        <View style={styles.divider} />
        <View style={styles.locationButtonContainer}>
          <TouchableOpacity
            onPress={this.addLocationPressed}>
            <Text style={styles.locationPreferenceLabel}>
              Add current location
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <TextInput
          ref='bodyText'
          placeholder="Enter a note..."
          multiline={true}
          textAlignVertical='top'
          onChangeText={(text) =>
            this.setState({...this.state, noteBody:text})}
          style={[styles.noteTextInput, styles.noteBodyTextInput]} />
      </View>
    );
  }
}

module.exports = NewNote;
