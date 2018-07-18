import * as React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

import AppState from '../../store';

const INFO_LIST = [
    {name:"行业", value:"IT/互联网"},
    {name:"工作领域", value:"软件工程师"},
    {name:"公司", value:"Suin"}
]

const InfoItem = (props) => (
    <View style={styles.info_container}>
        <Text style={styles.info_name}>{props.name}</Text>
        <Text style={styles.info_value}>{props.value}</Text>
    </View>
)

const UserInfo = () => (
    <View style={{marginTop: 20}}>
        <Text style={{fontSize: 22, paddingLeft: 10}}>我的信息</Text>
        <View style={{backgroundColor: "#fff", marginTop: 3}}>
            <View style={{marginLeft: 10, marginRight: 10}}>
            {INFO_LIST.map((item, index)=>
                <InfoItem {...item} key={index}/>
            )}
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginTop: 18,
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    info_container: {
        flexDirection: "row", 
        paddingTop: 10, 
        paddingBottom: 10,
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        borderStyle: "solid"
    },
    info_name: {
        flex: 2,
        fontSize: 17
    },
    info_value: {
        flex: 3,
        fontSize: 17
    }
});

export default UserInfo;