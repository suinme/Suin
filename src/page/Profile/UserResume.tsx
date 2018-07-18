import * as React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

import AppState from '../../store';

const UserResume = () => (
    <View style={styles.container}>
        <View>
            <Text style={{fontSize: 19}}>{AppState.userName}</Text>
            <View style={{flexDirection: "row", paddingTop: 3}}>
                <Text style={styles.label}>24</Text>
                <Text style={styles.label}>杭州</Text>
                <Text style={styles.label}>巨蟹座</Text>
            </View>
        </View>
        <View >
            <Text style={styles.edit_box}>编辑资料</Text>
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
    edit_box: {
        //alignItems: "center",
        justifyContent: "center",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 4,
        paddingBottom: 4,
        borderWidth: 1,
        borderColor: "#42BD56",
        borderStyle: "solid",
        borderRadius: 2,
        color: "#42BD56"
    },
    edit: {
        color: "#42BD56",
    },
    label: {
        marginRight: 5,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor: "#b7b0e2",
        borderStyle: "solid",
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#b7b0e2",
    }
})

export default UserResume;