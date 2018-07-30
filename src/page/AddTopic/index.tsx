import * as React from 'react';
import {StyleSheet, View, Text, Button, TextInput, Picker } from 'react-native';
import NavigationService from '../../component/NavigationService';
import {SafeAreaView} from 'react-navigation';
import {observer} from 'mobx-react';

import Header from './Header'
import Store from './store';

class Tag extends React.Component<any, any>{
    render(){
        return(
            <View style={styles.tagBox}>
                <View style={{flex:4,  justifyContent: "center"}}>
                    <Text style={{fontSize: 17}}>发布节点</Text>
                </View>
                <View style={{flex:4,  justifyContent: "center"}}>
                    <Text style={{fontSize: 17}}>同城</Text>
                </View>
                <View style={{flex:1,  justifyContent: "center"}}>
                    <Text style={{fontSize: 17}}>></Text>
                </View>
            </View>
        )
    }
}

const AddTopicScreen = () => (
    <SafeAreaView style={{flex:1, backgroundColor:"#fff"}}>
        <Header/>
        <View style={{flex:1,margin: 15}}> 
            <View style={{height: 40}}>
                <TextInput style={styles.title} multiline 
                    placeholder="标题"
                    onChangeText={Store.setTitle}/>
            </View>
            <Tag />
            <View style={{flex:1}}>
                <TextInput style={styles.content} placeholder="内容" 
                    multiline
                    onChangeText={Store.setContent}/>
            </View>
        </View>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    title: {
        flex:1,
        paddingTop: 10,
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        borderStyle: "solid",
        fontSize: 20,
        fontWeight: "bold"
    },
    tagBox: {
        paddingTop: 15,
        paddingBottom: 10,
        flexDirection: "row",
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        borderStyle: "solid",
        justifyContent: "center"
    },
    content:{
        flex:1,
        paddingTop: 15,
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        borderStyle: "solid",
        fontSize: 17
    }
})

export default AddTopicScreen;