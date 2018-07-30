import * as React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  Text,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import AppState from '../../store';

export default class AuthLoadingScreen extends React.Component<any, any> {
    constructor(props) {
      super(props);
      this._bootstrapAsync();
    }
  
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('user');
      if (userToken){
        AppState.setUser(JSON.parse(userToken));
      }
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };
  
    // Render any loading content that you like here
    render() {
      return (
        <View style={{ flex: 1,
            alignItems: 'center',
            justifyContent: 'center',}}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
          <Text>Loading</Text>
        </View>
      );
    }
  }