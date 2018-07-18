/** 帖子 */
export interface PostModel{
    avatar:string,
    author:string,
    title:string,
    content:string,
    image?:string,
    tid:string,
    uid:string,
    createTime:number,
    likeCount:number,
    replyCount:number
}

export const defaultPostModel = {
    avatar:"https://img3.doubanio.com/icon/up161989800-1.jpg",
    author:"渐",
    title:"欢迎大家来到所因",
    content:"组织会分配小可爱的, 希望每个人都被甜到",
    image:"",
    tid:"",
    uid:"",
    createTime: 1528041600,
    likeCount:0,
    replyCount:0
}

/** 评论 */
export interface CommentModel{
    avatar:string,
    author:string,
    content:string,
    tid:string,
    uid:string,
    likeCount: number,
    createTime: number,
}