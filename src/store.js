import Vue from 'vue'
import Vuex from 'vuex'
import {httpPost} from '@/requset/http'
import interfaceUrl from '@/requset/interface'
Vue.use(Vuex)
function urlSearchParams(dataObj) {
    let qs = '',
        split = '&',
        keys = Object.keys(dataObj);
    for (let i = 0; i < keys.length; i++) {
        if (i === keys.length - 1) {
            split = '';
        }
        qs += keys[i] + '=' + dataObj[keys[i]] + split;
    }
    return qs;
}

export default new Vuex.Store({
    state: {
        //某些不确定名称的title
        notExactTitle: '',
        //个人信息
        userInfor:{
            userName:'',
            idNumber:'',
            token:'4464f308-974a-4f37-b00b-f85b5dc4b885'
        },
        //tab下标
        tabSelected:'tab1'

    },
    getters: {
        vuexTitle: state => state.notExactTitle,
        vuexUserInfor:state=>state.userInfor,
        vuexTabSelected:state=>state.tabSelected
    },
    mutations: {
        set_notExactTitle(state, str) {
            state.notExactTitle = str
        },
        set_userInfor(state,infor){
            state.userInfor={...infor}
        },
        set_tabSelected(state,val){
             state.tabSelected=val
        }

    },
    actions: {
        login({ commit },parmas){
            let data=urlSearchParams({
                username: parmas.userName,
                password: parmas.password,
                client_id: 'm1',
                client_secret: 's1',
                grant_type: 'password',
                scope: 'read',
                f1:true, //  标记本次请求是否对密码进行MD5加密
                sign: parmas.sign, // 验证码生成唯一标识
                kaptcha: parmas.imgCode // 验证码
            })
            let res=httpPost(interfaceUrl.login,data,true);
            return res
        },
        loginOut({commit},params){
            let res=httpPost(interfaceUrl.loginOut,{});
            if(res.code==='200'){
                commit('set_userInfor',{
                    userName:'',
                    idNumber:'',
                    token:''
                });
                return true;
            } else {
                return false;
            }


        }
    }
})
