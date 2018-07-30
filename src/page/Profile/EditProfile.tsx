import * as React from 'react';
import {View, Text, ScrollView, Image } from 'react-native';

const Avatar = () => (
    <View style={{flexDirection:"row"}}>
        <Text>头像</Text>
        <Image source={{uri:""}} />
    </View>
)

const EditProfile = () => (
    <View>
        <Avatar />
    </View>
)

export default EditProfile;