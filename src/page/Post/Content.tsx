import * as React from 'react';
import {View, Text, Image } from 'react-native';
import {observer} from 'mobx-react';

import * as BaseStyle from '../../baseStyle';
import * as Utils from '../../utils';
import Store from './store';

const Content = () => (
    <View>
        <Text style={{fontSize:24}}>{Store.post.title}</Text>
        <View style={{flexDirection: "row", paddingTop: 10}}>
            <Image style={BaseStyle.userAvatar_1_5} source={{uri: Store.post.avatar}}/>
            <View style={{justifyContent:"space-between", marginLeft: 10, paddingTop:3, paddingBottom:3}}>
                <Text>{Store.post.author}</Text>
                <Text>{Utils.formatTimestamp(Store.post.createTime)}</Text>
            </View>
        </View>
        <View style={{paddingTop: 15}}>
            <Text style={{fontSize: 17}}>{Store.post.content}</Text>
        </View>
    </View>
);

export default observer(Content);