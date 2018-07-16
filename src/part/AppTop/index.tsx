import * as React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default () => (
    <View style={styles.m_hometop}>
        <View style={styles.topfix} >
            <Text style={styles.topfl} >
                Suin
            </Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    m_hometop: {
        height: 54,
        backgroundColor: "#d43c33",
    },
    topfix: {

    },
    topfl: {
        width: 142,
        height: 25,
        color: "#fff"
    }
});