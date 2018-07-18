import * as React from 'react';
import {StyleSheet, View, Text, Button } from 'react-native';
import NavigationService from '../../component/NavigationService';


const Header = (props) => (
    <View style={{height: 30, flexDirection: "row", backgroundColor:"#fff", }}>
        <View style={styles.box}>
            <Text style={{paddingLeft: 20, color:"#848fa6"}}>今日有趣的话题</Text>
        </View>
        <View style={{flex:1}}>
            <Button title="发言" onPress={()=>{}}></Button>
        </View>
    </View>
)

const styles = StyleSheet.create({
    box: {
        marginLeft: 15,
        backgroundColor:"#E8E8E8",  
        borderColor: "#E8E8E8",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 4,
        flex: 4,
        alignItems: "flex-start",
        justifyContent: "center"
    }
})

export default Header;