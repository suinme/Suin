import * as React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ProfileScreen from '../Profile';
import UserBanner from './UserBanner';
import AppState from '../../store';

const AccountScreen = () => (
    <View style={{flex: 1, backgroundColor:"#fff"}}>
        <UserBanner />
        <View style={styles.column}>
            <Text style={{fontSize: 20, paddingLeft:20}} onPress={AppState.logout}>退出登录</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    column: {
        borderColor: "#E8E8E8",
        borderWidth: 1,
        borderStyle: "solid",
        height: 50,
        paddingTop: 15
    }
})

export default createStackNavigator({
    Account: {
        screen: AccountScreen
    },
    Profile: { screen: ProfileScreen },
});