export interface LoginResponse{
    statusCode:number;
    result:{
        nickName:string;
        token:string;
        userId:string;
    }
}