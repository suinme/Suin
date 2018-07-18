import * as React from 'react';
import {View, Text } from 'react-native';

import Content from './Content';
import Comment from './Comment';

const PostScreen = (props) => (
    <View style={{flex: 1, backgroundColor:"#fff"}}>
        <View style={{padding: 12}}>
            <Content />
            <Comment tid={props.navigation.getParam('tid')}/>
        </View>
    </View>
);

export default PostScreen;