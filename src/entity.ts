export interface PostModel{
    avatar:string,
    author:string,
    title:string,
    content:string,
    image?:string,
    tid:string,
    uid:string,
    createTime:string,
    likeCount:number,
    replyCount:number
}

export const defaultPostModel = {
    avatar:"",
    author:"",
    title:"",
    content:"",
    image:"",
    tid:"",
    uid:"",
    createTime:"",
    likeCount:0,
    replyCount:0
}