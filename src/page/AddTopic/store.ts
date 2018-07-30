import { observable, action} from "mobx"
import {Alert} from 'react-native';
import NavigationService from '../../component/NavigationService';
import {Domain, HTTP} from '../../constants';
import AppState from '../../store';

interface LoginResponse{
    statusCode:number;
    result:{
        nickName:string;
        token:string;
        userId:string;
    }
}


const POST_LIST_URL = "http://www.suin.me:9000/api/forum/topics"

class Store {
    @observable title = "";
    @observable content = "";
    @observable tag = "同城"
    @observable tags = [
        "同城", "好玩", "创意", "租房", "交易", "工作"
    ]

    @observable publishing = false;

    @action setTag=(tag:string)=>{
        this.tag = tag;
    }

    @action setTitle=(title)=>{
        this.title = title
    }

    @action setContent=(content)=>{
        this.content = content;
    }

    @action addNewTopic=()=>{
        this.publishing = true;
        let data = `title=${this.title}&content=${this.content}&tag=${this.tag}&token=${AppState.user.token}`;
        fetch(`${Domain}/api/forum/addPost`, {
            method:"POST",   //请求方法
            body:data,   //请求体
    　　　　　headers: {
       　　　　 'Accept': 'application/json',
       　　　　 'Content-Type': 'application/x-www-form-urlencoded',
     　　　　 },
        })
        .then(response=>response.json())
        .then(json=>{
            this.publishing = false;
            NavigationService.goBack();
        })
        .catch(err=>{
            this.publishing=false;
            Alert.alert("发布失败", err);
        });
    }
}

const store = new Store()
export default store;