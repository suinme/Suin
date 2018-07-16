import * as React from 'react';
import {View, Text } from 'react-native';

import UserBanner from './UserBanner';

const AccountScreen = () => (
    <View style={{flex: 1}}>
        <UserBanner />
    </View>
);

export default AccountScreen;