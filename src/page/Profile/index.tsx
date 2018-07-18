import * as React from 'react';
import {View, Text, ScrollView } from 'react-native';

import ProfileConver from './ProfileCover';
import UserResume from './UserResume';
import UserInfo from './UserInfo';

const ProfileScreen = () => (
    <ScrollView style={{flex: 1}}>
        <View style={{backgroundColor: "#fff"}}>
            <ProfileConver />
            <UserResume />
        </View>
        <UserInfo />
    </ScrollView>
);

export default ProfileScreen;