import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Header from './Header';
import TopicScreen from '../Post';
import HomeScreen from './Home';
import AddTopicScreen from '../AddTopic';
import Store from './store';

let flag = false;

export default createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => {
            console.log("[HomeScreen]", navigation)
            return {
                header: null
            }
        }
    },
    Topic: { 
        screen: TopicScreen,
        path: 'topic/:tid',
        navigationOptions: ({ navigation }) => {
            return {
                header: null
            }
        }
    },
    AddTopic: {
        screen: AddTopicScreen,
        path: 'topic/add',
        navigationOptions: ({ navigation }) => {
            console.log("[AddTopicScreen]", navigation)
            return {
                header: null,
                tabBarVisible: false
            }
        }
    }
});