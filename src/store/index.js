import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
        dataArr:[],//所有文章详情数据
        details:[],//details 返回详情页具体哪篇文章
        islogin:false,//登录状态
        isuser:""//登录成功的用户
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
        //用户状态更新
        updateLogin(state,data){
            state.islogin = data
             
        },
        //用户名更新
        updateuser(state,data){
            state.isuser = data
             
        },
 
    },
    getters:{
        //分类页面数据返回
        classify(state){
            // return state.dataArr
            var allify=[]
            state.dataArr.map(item=>{
                allify.push(item.classify)
            })

            for(var i=0; i<allify.length; i++){
                for(var j=i+1; j<allify.length; j++){
                    if(allify[i]==allify[j]){         //第一个等同于第二个，splice方法删除第二个
                        allify.splice(j,1);
                        j--;
                    }
                }
            }
            var newsarr=[]
             for(var z=0;z<allify.length; z++){
                 newsarr.push( {
                   title:  allify[z],
                   arr: state.dataArr.filter(item=>item.classify==allify[z])
                 }  )
             }
             return newsarr
        },
        //渲染的数据排序
        sortArr(state){
            return state.dataArr.sort((a,b)=>b.id-a.id)
        },
        //发布时选择分组的建议
        issueArr(state){
            var allify=[]
            state.dataArr.map(item=>{
                allify.push({  "value": item.classify })
            })

            for(var i=0; i<allify.length; i++){
                for(var j=i+1; j<allify.length; j++){
                    if(allify[i].value==allify[j].value){         //第一个等同于第二个，splice方法删除第二个
                        allify.splice(j,1);
                        j--;
                    }
                }
            }

            return allify
        }

    }
})
 
export default store