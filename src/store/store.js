import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        //设置属性
        currentUser:null,
        currentUserId:null,
        isLogin:false,
        isAdmin:false
    },
    getters:{
        //获取数据的状态
        currentUser:state=>state.currentUser,
        currentUserId:state=>state.currentUserId,
        isLogin:state=>state.isLogin
    },
    mutations:{
        //改变属性的状态

        //更改用户的状态信息
        userStatus(state,user){
            if(user){
                state.currentUser = user.name
                state.currentUserId = user.id,
                state.isLogin = true
            }else{
                state.currentUser =  user
                state.isLogin = false
            }
        },

    },
    actions:{
        //应用mutations
        setUser({commit},user){
            commit("userStatus",user)
        },
    }
    
})