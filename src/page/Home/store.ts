import { observable, action} from "mobx"

interface LoginResponse{
    statusCode:number;
    result:{
        nickName:string;
        token:string;
        userId:string;
    }
}

const TOPIC_LIST = [
    {uid:'171039889', tid:'117815056',author:'不早睡就是狗', replyCount:182, createTime:'05-31 19:32',avatar:'https://img3.doubanio.com/icon/u171039889-14.jpg', title:'推荐几首歌我听', image:'https://img3.doubanio.com/icon/u171039889-14.jpg'},
    {uid:'171039889', tid:'117815056',author:'不是小老虎', replyCount:70, createTime:'06-01 10:01',avatar:'https://img3.doubanio.com/icon/u43250405-23.jpg', title:'工作太无聊 感觉有抑郁倾向', image:'https://img3.doubanio.com/view/group_topic/small/public/p120225522.webp'},
    {uid:'171039889', tid:'117815056',author:'はる', replyCount:93, createTime:'06-01 14:10',avatar:'https://img3.doubanio.com/icon/u82680283-6.jpg', title:'男友家的房子应该要男友出钱装修吗？这样做对吗', image:"https://img3.doubanio.com/icon/u171039889-14.jpg"},
    {uid:'171039889', tid:'117815056',author:'Ruo', replyCount:16, createTime:'06-01 14:09',avatar:'https://img3.doubanio.com/icon/u92452762-21.jpg', title:'狮子男对水瓶女是什么感觉？', image:"https://img3.doubanio.com/view/group_topic/small/public/p120362800.webp"},
    {uid:'171039889', tid:'117815056',author:'不早睡就是狗', replyCount:182, createTime:'05-31 19:32',avatar:'https://img3.doubanio.com/icon/u171039889-14.jpg', title:'推荐几首歌我听', image:'https://img3.doubanio.com/icon/u82680283-6.jpg'},
    {uid:'171039889', tid:'117815056',author:'不是小老虎', replyCount:70, createTime:'06-01 10:01',avatar:'https://img3.doubanio.com/icon/u43250405-23.jpg', title:'工作太无聊 感觉有抑郁倾向', image:'https://img3.doubanio.com/view/group_topic/small/public/p120225522.webp'},
    {uid:'171039889', tid:'117815056',author:'はる', replyCount:93, createTime:'06-01 14:10',avatar:'https://img3.doubanio.com/icon/u82680283-6.jpg', title:'男友家的房子应该要男友出钱装修吗？'},
    {uid:'171039889', tid:'117815056',author:'不早睡就是狗', replyCount:182, createTime:'05-31 19:32',avatar:'https://img3.doubanio.com/icon/u171039889-14.jpg', title:'推荐几首歌我听', image:'https://img3.doubanio.com/view/group_topic/small/public/p119848382.webp'},
    {uid:'171039889', tid:'117815056',author:'不是小老虎', replyCount:70, createTime:'06-01 10:01',avatar:'https://img3.doubanio.com/icon/u43250405-23.jpg', title:'工作太无聊 感觉有抑郁倾向', image:'https://img3.doubanio.com/view/group_topic/small/public/p120225522.webp'},
    {uid:'171039889', tid:'117815056',author:'はる', replyCount:93, createTime:'06-01 14:10',avatar:'https://img3.doubanio.com/icon/u82680283-6.jpg', title:'男友家的房子应该要男友出钱装修吗？'},
]

const POST_LIST_URL = "http://www.suin.me:9000/api/forum/topics"

class Store {
    @observable postList = []
    tid = "";

    @action fetchPostList=()=>{
        /*
        fetch(`${POST_LIST_URL}?tid=${this.tid}`)
        .then(response=>response.json())
        .then(json=>this.postList=json.result)
        .catch(err=>console.log(err));
        */
        this.postList = TOPIC_LIST;
    }
}

const store = new Store()
export default store;