import * as React from 'react';
import {StyleSheet, View, ScrollView, Button, Text, Image } from 'react-native';

import AppState from '../../store';

const UserAvatar = () => (
    <Image 
        source={{uri:"https://img3.doubanio.com/icon/ul161989800-1.jpg"}} 
        style={styles.avatar}
    />
);

const BasicInfo = () => (
    <View style={styles.basic_info}>
        <View>
            <Text style={{fontSize: 19, color: "#fff"}}>{AppState.userName}</Text>
            <Text style={styles.text}>星标用户</Text>
        </View>
        <Text style={styles.home_link}>个人主页 ></Text>
    </View>
)

const UserProperty = () => (
    <View style={{flexDirection:"row", justifyContent: "flex-start"}}>
        <Text style={styles.account_info}>关注: 9</Text>
        <Text style={styles.account_info}>信任值: 98</Text>
    </View>
);

const UserBanner = () => (
    <View style={styles.container}>
        <UserAvatar />
        <View style={styles.account}>
            <BasicInfo />
            <UserProperty />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container:{
        height: 124,
        flexDirection: "row",
        backgroundColor: "#b75c5c",
    },
    account: {
        flex:1,
        paddingTop: 30,
        marginLeft: 20
    },
    basic_info: {
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderBottomColor: "#ffffff4d",
        flexDirection: "row", justifyContent:"space-between"
    },
    avatar: {
        marginLeft: 20,
        marginTop: 20,
        width:70, 
        height: 70,
        borderRadius: 35
    },
    home_link: {
        marginTop:30,
        paddingRight:10,
        color: "#fff"
    },
    account_info:{
        color: "#fff",
        marginRight: 20
    },
    text:{color: "#fff"}
})

export default UserBanner;