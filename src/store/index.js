import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
Vue.use(Vuex);
export default new Vuex.Store({
	// state 保存数据
	state: {
		postuser:{
			token:'',
			data:''
		},
		topics:{
			arr:[],
		    data:''
		},
		details:{
			data:[] ,
			html:'',
			arr:[]
		}
	},
	// mutations 中修改数据
	mutations: {
		postuser(state,data){
			axios.get('https://cnodejs.org/api/v1/user/alsotang',qs.stringify(data))
			.then(function(res){
				state.postuser=res
			})
		},
		details(state,data){
			//优化了加载操作，减少了ajax请求
			state.details.html='';
			state.details.arr=[];
			var num=0;
		  	for(var i=0;i<state.details.data.length;i++){
		  		if(state.details.data[i].id==data){
		  			num=1;
		  			state.details.html=state.details.data[i].html.content;
		  			state.details.arr=state.details.data[i].html.replies;
		  		}
		  	}
		  	if(num==0){
				axios.get('https://cnodejs.org/api/v1/topic/'+data)
				.then(function(res){
			  		state.details.html=res.data.data.content;
			  		state.details.arr=res.data.data.replies;
			  		var arr={id:data,html:res.data.data}
			  		state.details.data.push(arr);
			    })  		
		  	}
		},
		topics(state,data){
			state.topics.data='';
			if(data==''){
				data="all"
			}
			var num=0;
			for(var i=0;i<state.topics.arr.length;i++){
		  		if(state.topics.arr[i].name==data){
		  			num=1;
		  			state.topics.data=state.topics.arr[i].data;
		  		}
		  	}
		  	if(num==0){
		  		if(data=='all'){
		  			data=''
		  		}
				axios.get('https://cnodejs.org/api/v1/topics/?tab='+data)
				.then(function(res){
		  		     if(data==''){
				        data="all"
			         }
					state.topics.data=res.data.data;
			  		var arr={name:data,data:res.data.data}
			  		state.topics.arr.push(arr);
				})		
		  	}
				
			
			
		}
	},
	// 提交mutations
	actions:{
		postuser(context,data){context.commit('postuser',data)},
		details(context,data){context.commit('details',data)},
		topics(context,data){context.commit('topics',data)},
		//点赞
		postzan(context,data){
			return axios.post('https://cnodejs.org/api/v1/'+qs.stringify(data));
		}
	},
	//获取状态
	getters: {
		postuser:(state)=>state.postuser,
		details:(state)=>state.details,
		topics:(state)=>state.topics,
	}
})