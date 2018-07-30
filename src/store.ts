import { observable, action} from "mobx"
import {AsyncStorage} from 'react-native';
import NavigationService from './component/NavigationService';

class Store {
    activePage:string = ""
    @observable isAuth:boolean = true;
    @observable user = {
        token: "debug_model",
        nickName: "渐",
        userId: "",
        motto: "我是世界之主",
    }

    @action
    setUser=(user)=>{
        this.user = user;
        this.isAuth = true;
        AsyncStorage.setItem("user", JSON.stringify(this.user));
    }

    @action logout=()=>{
        this.isAuth = true;
        AsyncStorage.removeItem("user");
        NavigationService.navigate("Auth", null);
    }

    get userName(){
        return this.user.nickName;
    }
}

const GlobalStore = new Store();

export default GlobalStore;