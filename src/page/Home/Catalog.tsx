import * as React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const Tabs = ['最新', '最热', '同城', '好玩', '交易', '更多»']

const HomeHeader = () => (
    <View style={styles.container}>
        {Tabs.map((tab, index)=>
            <Text style={styles.tabs} key={index}>{tab}</Text>
        )}                  
    </View>
);

const styles = StyleSheet.create({
    container:{
        paddingBottom: 5,
        marginBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#dfdfdf",
        borderBottomWidth: 2,
        borderStyle: "solid"
    },
    tabs: {
        fontSize: 13,
        //marginLeft: 5,
        height: 24,
        lineHeight: 24,
        paddingLeft: 10,
        paddingRight: 10,
        color: "#42BD56",
        borderColor:"#42BD56",
        borderWidth: 1,
        borderStyle: "solid",
        //border: "1px solid #42BD56",
        borderRadius: 2
    }
})

export default HomeHeader;