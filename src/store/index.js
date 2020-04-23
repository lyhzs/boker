import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)


//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
        dataArr:[],
        age:15
    },
    mutations:{
        //首页加载请求数据
        allData(state,data){
            state.dataArr = data
        }
    },
    getters:{
        nameInfo(state){
            return "姓名:"+state.name
        },
        fullInfo(state,getters){
            return getters.nameInfo+'年龄:'+state.age
        }  
    }
})
 
export default store