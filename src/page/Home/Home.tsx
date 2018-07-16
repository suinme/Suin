import * as React from 'react';
import {StyleSheet, View, ScrollView, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {observer} from 'mobx-react';
import {Routers} from '../../constans';
import HomeHeader from './Header';
import PostItem from './PostItem';
import State from './store';

import { defaultPostModel } from '../../entity';

@observer
class PostList extends React.Component<any, any>{
    render(){
        return(
            <ScrollView style={styles.post_list}>
                {State.postList.map((item, index)=>
                    <PostItem {...item} key={index}/>
                )}
            </ScrollView>
        )
    }
}

export default class HomeScreen extends React.Component<any, any>{
    componentDidMount(){
        State.fetchPostList();
    }
    render(){
        return(
            <View style={styles.container}>
                <HomeHeader />
                <PostList />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 12,
        justifyContent: "flex-start",
        //alignItems: "flex-start",
        alignContent: "flex-start",
        flexDirection: "column"
    },
    post_list: {
        flex: 1,
    }
})