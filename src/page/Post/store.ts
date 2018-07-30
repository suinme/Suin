import { observable, action} from "mobx"
import {PostModel, defaultPostModel, CommentModel} from '../../entity';
import {Domain} from '../../constants';
import AppState from '../../store';
import { Alert, Keyboard } from "react-native";

const POST_URL = "/api/forum/topics"
const COMMENT_URL = "/api/forum/topics"

class Store {
    tid = 0;
    @observable post:PostModel = defaultPostModel;
    @observable comments:Array<CommentModel> = [];
    reply = "";
    @observable publishing = false;

    @action setTid=(tid)=>{
        this.tid = tid;
        this.fetchPost();
        this.fetchComments();
    }

    @action fetchPost=()=>{
        console.info(`request ${Domain}${POST_URL}/${this.tid}`);
        fetch(`${Domain}${POST_URL}/${this.tid}`)
        .then(response=>response.json())
        .then(json=>this.post=json.result)
        .catch(err=>console.error(err));
    }

    @action fetchComments=()=>{
        //console.info(`request ${Domain}${POST_URL}/${tid}`);
        fetch(`${Domain}${COMMENT_URL}/${this.tid}/comments`)
        .then(response=>response.json())
        .then(json=>this.comments=json.result)
        .catch(err=>console.error(err));
    }

    @action setReply=(reply)=>{
        this.reply = reply;
    }

    @action pushReply=()=>{
        this.publishing = true;
        let data = `tid=${this.tid}&content=${this.reply}&token=${AppState.user.token}`;
        fetch(`${Domain}/api/forum/addComment`, {
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
            this.comments.push(json.result)
            Keyboard.dismiss();
            Alert.alert("提交留言成功", "su");
        })
        .catch(err=>{
            this.publishing=false;
            Alert.alert("发布失败", err);
        });
    }
}

const store = new Store()
export default store;