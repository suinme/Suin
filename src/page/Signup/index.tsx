import * as React from 'react';
import {StyleSheet, View, Text, Button, TextInput, Picker } from 'react-native';

import Header from './Header';
import Store from './store';

const PhoneBlock = () => (
    <View style={{alignContent:"center", justifyContent:"center", paddingTop: 10}}>
        <View style={styles.phone}>
            <TextInput style={{fontSize: 20}} placeholder="请输入手机号"
                onChangeText={Store.setPhoneNumber}/>
        </View>
        <View style={styles.box}>
            <TextInput style={{fontSize: 20, flex:2}} 
                placeholder="输入四位验证码"
                onChangeText={Store.setCaptcha}/>
            <Button  title="发送验证码" onPress={Store.sendCaptcha}/>
        </View>
    </View>
)

const LoginTip = () => (
    <View style={{alignContent:"center", justifyContent:"center"}}>
        <Text>未注册手机验证后自动登录</Text>
        <View style={{flexDirection:"row"}}>
            <Text>注册代表你已经阅读并同意</Text>
            <Text>《用户使用协议》</Text>
        </View>
    </View>
)

const SignupScreen = () => (
    <View style={{flex: 1, backgroundColor:"#fff"}}>
        <Header />
        <View style={{flex:1, margin: 15}}>
            <PhoneBlock />
            <LoginTip />
            <Button title="登陆"  onPress={Store.quickLogin}/>
        </View>
    </View>
)

const styles = StyleSheet.create({
    box: {
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        borderStyle: "solid",
        flexDirection: "row",
        paddingTop: 10
    },
    phone: {
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        borderStyle: "solid"
    },

})

export default SignupScreen;