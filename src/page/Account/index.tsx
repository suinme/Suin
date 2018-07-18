import * as React from 'react';
import {View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ProfileScreen from '../Profile';
import UserBanner from './UserBanner';

const AccountScreen = () => (
    <View style={{flex: 1}}>
        <UserBanner />
    </View>
);

export default createStackNavigator({
    Account: {
        screen: AccountScreen
    },
    Profile: { screen: ProfileScreen },
});