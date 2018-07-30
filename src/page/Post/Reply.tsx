import * as React from 'react';
import {View, StyleSheet, TextInput, Button } from 'react-native';
import Store from './store';

const Reply = () => (
    <View style={{height: 60, backgroundColor: "#E8E8E8", alignItems:"center"}}>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
            <TextInput style={styles.input} 
                placeholder="留下你的回复"
                onChangeText={Store.setReply}/>
            <Button title="发送" onPress={Store.pushReply}/>
        </View>
    </View>
)

const styles = StyleSheet.create({
    input: {
        flex: 1,
        backgroundColor: "#fff",
        borderColor: "#E8E8E8",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 5,
        fontSize: 17,
        marginLeft: 10,
        paddingLeft:10,
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default Reply;