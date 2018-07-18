import * as React from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';
import {observer} from 'mobx-react';

import { CommentModel } from '../../entity';
import * as BaseStyle from '../../baseStyle';
import * as Utils from '../../utils';

import Store from './store';

const Comment = (props:CommentModel) => (
    <View style={{paddingBottom: 6,paddingTop: 6, flexDirection: "row"}}>
        <Image style={BaseStyle.userAvatar} source={{uri: props.avatar}} />
        <View style={styles.box}>
            <View style={{flexDirection:"row"}}>
                <Text style={{fontWeight:"bold"}}>{props.author}</Text>
                <Text style={{paddingLeft: 10}}>{Utils.formatTimestamp(props.createTime)}</Text>
            </View>
            <View style={{paddingTop: 5}}>
                <Text>{props.content}</Text>
            </View>
        </View>
    </View>
)

@observer
export default class ReplyList extends React.Component<{tid:string}, any>{
    componentDidMount(){
        Store.fetchComments(this.props.tid)
    }
    render(){
        return(
            <View style={{marginTop: 15}}>
                <Text style={{fontSize:17, fontWeight:"bold"}}>评论</Text>
                {Store.comments.map((item, index)=>(
                    <Comment {...item} key={index}/>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {marginLeft: 15,  borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        borderStyle: "solid",
        flex: 1,
        paddingBottom: 10
    }
})