<template>
  <div class="main" v-title data-title="标签">
	  <div class="mainbox"> 
		  <div class="title">
			  标签
		  </div>
		  <div class="tj">目前共计{{ Object.keys(dataArr).length}}个标签</div>
		  <div class="tag">
			  	<ul class="clearfix">
					  <li v-for="(value, key, index) in dataArr" :key="index"  @click="todetails(key)"><i><svg t="1589784613318" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2191"><path d="M522.1 951c-5.7 0-11.4-1.4-16.5-4.3L160.8 757c-8-4.4-13.9-11.8-16.4-20.5s-1.5-18.1 2.9-26.1l259.1-470.6c4-7.3 10.6-12.9 18.5-15.7L634.3 149c27-9.7 57-7.3 82.2 6.5 25.2 13.9 43.3 37.9 49.6 66l14.8 65.9c4.1 18.5-7.5 36.8-26 41-18.4 4.2-36.8-7.5-41-26l-14.8-65.9c-2-9-7.6-16.5-15.7-20.9-8-4.4-17.3-5.2-26-2l-197.2 70.7L224 713.4l284.6 156.7 236.2-429.2-6.2-27.7c-4.1-18.5 7.5-36.8 26-40.9 18.6-4.2 36.8 7.5 41 26l9 40.3c1.8 8.1 0.6 16.7-3.4 24l-259 470.6c-4.4 8-11.8 13.9-20.5 16.4-3.2 1-6.4 1.4-9.6 1.4z" fill="#009FE8" p-id="2192"></path><path d="M571.568671 418.867868a45.4 45.4 0 1 0 43.786278-79.544968 45.4 45.4 0 1 0-43.786278 79.544968Z" fill="#009FE8" p-id="2193"></path><path d="M593.4 413.4c-17.9 0-33-13.9-34.2-32-1.3-18.9 12.9-35.2 31.8-36.5 8.2-0.7 192.2-17.9 217.9-250.2 2.1-18.9 19.1-32.4 37.9-30.3 18.8 2.1 32.4 19.1 30.3 37.9-32.3 290.8-278.8 310.9-281.3 311-0.8 0.1-1.6 0.1-2.4 0.1z" fill="#009FE8" p-id="2194"></path><path d="M474.1 804.3c-2.7 0-5.5-0.7-8.1-2l-166.2-89.2c-8.3-4.5-11.5-14.9-7-23.2 4.5-8.3 14.8-11.5 23.2-7l166.2 89.2c8.3 4.5 11.5 14.9 7 23.2-3.1 5.8-9 9-15.1 9z" fill="#009FE8" p-id="2195"></path></svg></i>{{key}}({{value.num }})</li>
				</ul>
		  </div>

	  </div>
  </div>
</template>

<script>
export default {
  name: "Label",
  data() {
    return {};
  },
  methods: {
	 todetails(id) {
      this.$router.push({
       path: `/labeldetails/${id}`,
      });
    },

  },
  mounted() {
	     
  },
  computed: {
	  dataArr(){
		//    console.log( this.$store.getters.islable ,111);
		  return this.$store.getters.islable
	  }
  },
};
</script>


<style scoped lang="less">
.mainbox{
	.title{
		text-align: center;
		padding: 30px 0 10px;
		font-size: 25px
	}
	.tj{
		text-align: center;
		padding: 15px 0 10px;
		font-size: 15px
	}
	.tag{
		margin-top: 25px;
		height: 100%;
		ul{
			height: 100%;
			li{
				width: 19%;
				height: 100%;
				padding: 20px 0;
				text-align: center;
				cursor: pointer;
				float: left;
				box-sizing: border-box;
				white-space: pre-wrap;
				display:block;
				border-bottom:1px solid transparent;
				i{
					svg{
						height: 20px;
						width: 20px;
						vertical-align: middle;
						margin-right: 10px
					}
				}
			}
			li:nth-child(5n+1){
				clear:left;
			}
			li:hover{
				border-bottom:1px solid #ccc;
			}
		}
	}
}
</style>
