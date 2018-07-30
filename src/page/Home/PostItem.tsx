import * as React from "react";
import {StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';

import { PostModel } from '../../entity';
import {Routers} from '../../constants';
import NavigationService from '../../component/NavigationService';
import * as Utils from '../../utils';

/*
 [   Text    ] | [  ]
 [Image][Text] | [  ]
 --------------------
 [T]              [T]
*/

const PostItem = (props:PostModel) =>(
    <View style={styles.container} >
        <TouchableOpacity onPress={() => {NavigationService.navigate(Routers.Topic, {tid:props.tid})}}>
        <View style={styles.row}>
            <View style={styles.column}>
                <Text style={styles.title} >{props.title}</Text>
                <View style={styles.row}>
                    <Image style={styles.user_avatar} source={{uri:props.avatar}} />
                    <Text style={styles.topic_author}>作者:{props.author}</Text>
                </View>
            </View>
            {props.image && (
                <Image source={{uri:props.image}} style={styles.topic_cover}/>   
            )}
        </View>
        <View style={styles.topic_info}>
            <Text style={styles.left}>{props.replyCount}回应</Text>
            <Text style={styles.right}>{Utils.formatTimestamp(props.createTime)}</Text>
        </View>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 6,
        paddingTop: 6,
        flexDirection: "column",
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        borderStyle: "solid"
    },
    column: {
        flex: 1,
        flexDirection: "column",
    },
    row: {
        flex: 1,
        flexDirection: "row",
    },
    title: {
        fontSize: 17
    },
    topic_cover: {
        width: 48,
        height: 48,
        marginTop: 4
    },
    topic_author:{
        fontSize: 14,
        lineHeight: 1,
        marginLeft: 10
    },
    user_avatar: {
        height: 28,
        width: 28,
        borderRadius: 14
    },
    topic_info: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        overflow: "hidden",
        marginTop: 6
    },
    left: {
        color: "#aaa",
    },
    right: {
        color: "#ccc"
    }
});

export default PostItem;