import * as React from 'react';
import {StyleSheet, View, Text, Button, TextInput, Picker } from 'react-native';

const Header = () => (
    <View style={{height: 108, backgroundColor:"#d33a31"}}>
        <View style={{alignContent:"center", justifyContent:"center"}}>
            <Text style={{color: "#fff"}}>加入所因</Text>
            <Text style={{color: "#fff"}}>寻找对的人</Text>
        </View>
    </View>
)

export default Header;