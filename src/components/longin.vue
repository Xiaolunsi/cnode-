<template>
	<div>
		
		<div class="header">
			<router-link to="/" style="color: #80bd01;">主页</router-link>/
			<span style="color: #999;"> 登录</span>
		</div>
		<div class="box">
			<div>
				<div class="img" v-if="data!=''"><img :src="data.avatar_url" v-if="data!=''"/></div>
				<div v-if="data!=''"class="pass">{{data.loginname}}</div>
				<div v-if="data==''">
					<div class="pass"><mt-field label="accessToken" placeholder="请输入accessToken" type="password" v-model="password"></mt-field></div>
				    <div class="denglu"><mt-button type="primary" size="large" @click='denglu'>登录</mt-button></div>
				</div>
				<div v-else style="color: white;font-size: 24px;">
					<div class="denglu"><mt-button type="primary" size="large" @click='tui'>退出登录</mt-button></div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data(){
			return{
				password:"",
				data:""
			}
		},
		methods:{
			denglu(){
				this.$store.dispatch("postuser",this.password);
				setTimeout(()=>{
					this.data=this.$store.getters.postuser.data.data
					this.password=""
				},1000)
			},
			tui(){
				this.$store.getters.postuser.data.data="";
				this.data=""
			}
		},
		mounted(){
			if(this.$store.getters.postuser.data.data!=undefined){
				this.data=this.$store.getters.postuser.data.data
				console.log(this.data)
			}
		}
	}
</script>

<style scoped>
	.header{
		padding: 10px;
        background-color: #f6f6f6;
    	border-radius: 3px 3px 0 0;
	}
	
	.box{
		width:100%;
		height: 300px;
		background: rgba(209, 201, 201, 0.43);
		padding-top: 60px;
	}
	.img{
		width: 100px;
		height: 100px;
		margin: 0 auto;
		margin-bottom: 40px;
		border-radius: 50%;
		background: palegoldenrod;
		overflow: hidden;
	}
	
	.pass{
		text-align: center;
		width: 60%;
		margin: 40px auto;
		border-radius: 10px;
		overflow: hidden;
	}
	@media only screen and (max-width: 500px) {
		.pass{
			width: 90%;
	    }
	}
	.denglu{
		width: 50%;
		margin: 40px auto;
	}
</style>