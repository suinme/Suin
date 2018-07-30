import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import EditProfileScreen from './EditProfile';
import ProfileScreen from './Profile';

let flag = false;

export default createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: ({ navigation }) => {
            console.log("[HomeScreen]", navigation)
            return {
                header: null
            }
        }
    },
    EditProfile: { 
        screen: EditProfileScreen,
        navigationOptions: ({ navigation }) => {
            return {
                header: null
            }
        }
    }
});