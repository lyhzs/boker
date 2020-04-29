import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

// let Base64 = {
//     encode(str) {
//           // first we use encodeURIComponent to get percent-encoded UTF-8,
//           // then we convert the percent encodings into raw bytes which
//           // can be fed into btoa.
//           return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
//               function toSolidBytes(match, p1) {
//                   return String.fromCharCode('0x' + p1);
//               }));
//       },
//       decode(str) {
//           // Going backwards: from bytestream, to percent-encoding, to original string.
//           return decodeURIComponent(atob(str).split('').map(function (c) {
//               return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//           }).join(''));
//       }
//   };



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
        }

    }
})
 
export default store