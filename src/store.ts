import { observable, action} from "mobx"

class Store {
    activePage:string = ""
    @observable isAuth:boolean = true;
    @observable user = {
        token: "",
        nickName: "渐",
        userId: "",
        motto: "我是世界之主"
    }

    @action
    setUser=(user)=>{
        this.user = user;
        this.isAuth = true;
    }

    get userName(){
        return this.user.nickName;
    }
}

const GlobalStore = new Store();

export default GlobalStore;