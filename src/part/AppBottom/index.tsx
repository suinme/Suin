import * as React from 'react';
import {Link} from 'react-router-native'
import { StyleSheet, View, Text} from 'react-native';

const NAV_LIST = [
    {name:'首页', selected:true, to:"/home"},
    {name:'消息', selected:false, to:"/chat"},
    {name:'发现', selected:false, to:"/explore"},
    {name:'账号', selected:false, to:"/account"},
]

interface NavItemProps{
    selected:boolean,
    name:string
    to:string
}

const NavItem = (props:NavItemProps) => (
    <View >
        <Link to={props.to}>
        <View >
            <Text>{props.name}</Text>
        </View>
        </Link>
    </View>
    
)

export default () => (
    <View >
        <View  >
            <View >
                {
                    NAV_LIST.map((item, index)=>
                        <NavItem {...item} key={index}/>
                    )
                }
            </View>
        </View>
    </View>
)
