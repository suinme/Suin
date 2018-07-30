import * as React from 'react';
import {View, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator, SafeAreaView } from 'react-navigation';

import Content from './Content';
import Comment from './Comment';
import Reply from './Reply';

import Store from './store';

export default class PostScreen extends React.Component<any, any>{
    componentDidMount(){
        Store.setTid(this.props.navigation.getParam('tid'));
    }
    componentWillReceiveProps(nextProps){
        Store.setTid(nextProps.navigation.getParam('tid'));
    }
    render(){
        return (
            <SafeAreaView style={{flex: 1, backgroundColor:"#fff"}}>
                <KeyboardAvoidingView style={{flex:1}} behavior="padding">
                    <View style={{flex:1, padding: 12}}>
                        <Content />
                        <Comment />
                    </View>
                    <Reply />
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }  
};