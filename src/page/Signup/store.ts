import { observable, action} from "mobx"
import {Domain, HTTP} from '../../constants';
import NavigationService from '../../component/NavigationService';
import AppState from '../../store';

interface LoginResponse{
    statusCode:number;
    result:{
        nickName:string;
        token:string;
        userId:string;
    }
}

class Store {
    @observable phoneNumber = ""
    areaCode = "86";
    @observable captcha = ""

    @action setPhoneNumber=(phoneNumber)=>{
        this.phoneNumber = phoneNumber;
    }

    @action setCaptcha=(captcha)=>{
        this.captcha = captcha;
    }

    @action quickLogin=()=>{
        console.info("quick login")
        let baseUrl = '/api/signup/quick_login'
        let request = `deviceId=&phoneNumber=${this.phoneNumber}&areaCode=${this.areaCode}&captcha=${this.captcha}`;
        fetch(encodeURI(Domain+baseUrl+'?'+request))
        .then(response=>response.json())
        .then((json:LoginResponse)=>{
            if(json.statusCode == HTTP.RESPONSE.OK){
                AppState.setUser(json.result);
                NavigationService.navigate('App', null);
            }
        })
        .catch(err=>console.error(err));
    }

    sendCaptcha=()=>{
        let baseUrl = '/api/signup/sendCaptchaByPhoneNumber';
        let request = `deviceId=&phoneNumber=${this.phoneNumber}&areaCode=${this.areaCode}`
        fetch(encodeURI(Domain+baseUrl+'?'+request))
        .then(response=>response.json())
        .then(json=>console.log("发送成功"))
        .catch(err=>console.error(err));
    }
}

const store = new Store()
export default store;