import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)


//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
        dataArr:[],
        age:15,
        details:[]
    },
    mutations:{
        //首页加载请求数据
        allData(state,data){
            state.dataArr = data
        },
        lookdetails(state,data){
            state.details =state.dataArr.filter((item)=>{
               return item.id==data    
            })
        },
    },
    getters:{
    }
})
 
export default store