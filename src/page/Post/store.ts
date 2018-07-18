import { observable, action} from "mobx"
import {PostModel, defaultPostModel, CommentModel} from '../../entity';
import AppState from '../../store';

const POST_URL = "/api/forum/topics"
const COMMENT_URL = "/api/forum/topics"

const FAKE_COMMENTS:Array<CommentModel> = [
    {
        "uid" : "90534817",
        "tid" : "117815056",
        "author" : "富江2号—Tomie",
        "content" : "哈哈哈哈哈哈哈哈淡定淡定，等她分手了就会记得你的好了",
        "likeCount" : 14,
        "createTime" : 1529831662,
        "avatar" : "https://img3.doubanio.com/icon/up90534817-54.jpg"
    },
    {
        "uid" : "180120121",
        "tid" : "117815056",
        "author" : "赤木晴子",
        "content" : "等她跟男朋友吵架就会想起你",
        "likeCount" : 14,
        "createTime" : 1529831381,
        "avatar" : "https://img3.doubanio.com/icon/up180120121-1.jpg"
    }
]

class Store {
    @observable post:PostModel = defaultPostModel;
    @observable comments:Array<CommentModel> = [];

    @action fetchPost=(tid)=>{
        fetch(`${POST_URL}/${tid}`)
        .then(response=>response.json())
        .then(json=>this.post=json.result)
        .catch(err=>console.error(err));
    }

    @action fetchComments=(tid)=>{
        /*
        fetch(`${COMMENT_URL}/${tid}/comments`)
        .then(response=>response.json())
        .then(json=>this.comments=json.result)
        .catch(err=>console.error(err));
        */
        this.comments = FAKE_COMMENTS;
    }
}

const store = new Store()
export default store;