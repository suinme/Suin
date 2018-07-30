import * as React from 'react';
import {StyleSheet, View, Text, Button, TextInput } from 'react-native';
import NavigationService from '../../component/NavigationService';
import Store from './store';

const Header = () => (
    <View style={styles.header}>
        <View style={styles.container}> 
            <Text style={{fontSize: 17}} onPress={() => NavigationService.goBack()}>取消</Text>
            <Text style={{fontSize: 17, fontWeight:"bold"}}>创建新话题</Text>
            <Text style={{fontSize: 17}} onPress={Store.addNewTopic}>发布</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin: 12,
        flexDirection:"row", 
        justifyContent:"space-between"
    },
    header:{
        height: 50,
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 2,
        borderStyle: "solid",
    }
});

export default Header;