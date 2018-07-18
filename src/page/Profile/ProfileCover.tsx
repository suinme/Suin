import * as React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const ProfileCover = () => (
    <View>
        <ImageBackground style={{alignItems:"center"}} source={{uri:"https://qnmob3.doubanio.com/view/user_profile_banner/large/public/5171a3d694f3af3.jpg?imageView2/0/q/80/w/640/h/640/format/jpg"}}>
            <Image style={styles.cover} source={{uri:"https://img3.doubanio.com/icon/up161989800-1.jpg"}}/>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container:{
        
    },
    cover:{
        marginTop: 46,
        marginBottom: 46,
        width: 100,
        height: 100,
        borderRadius: 50
    }
})

export default ProfileCover;