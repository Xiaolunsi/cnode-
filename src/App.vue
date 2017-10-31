<template>
	<div class="app">
		
		<div class="header">
			<a href="https://cnodejs.org/" class="loog">
				<img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg"/>
			</a>
			<router-link to="/" class="a">首页</router-link>
			<router-link to="/login" class="a">登录</router-link>
		</div>
		
		<div class="view">
			<router-view class="view-left"></router-view>
			<div class="view-rigth">
				<div>广告投放区</div>
				<div>广告投放区</div>
				<div>广告投放区</div>
				<div>广告投放区</div>
				<div>广告投放区</div>
				<div>广告投放区</div>
			</div>
		</div>
		
		<div class="footer">
			
		</div>
		
		<div class="backtotop" @click="top" v-show="show">回到顶部</div>
		
	</div>
</template>

<script>
	export default {
		name: 'app',
		data(){
			return{
				show:false
			}
		},
		watch:{
		    
		},
		methods:{
			move(){
				if(window.scrollY>500){
		        	this.show=true
		        }else{
		        	this.show=false
		        }
			},
			top(){
				if(window.scrollY>0){
					var set=setInterval(function(){
						if(window.scrollY<=10){
							scrollBy(0,-1);
                                if(window.scrollY==0){
                                	clearInterval(set)
                                }
						}else{
							scrollBy(0,-60);
						}
					},10)
				}
			}
		},
		mounted(){
			window.addEventListener('scroll', this.move)
		}
	}
</script>

<style scoped>
	.app{
		width: 100%;
		height: 100%;
		background: #e1e1e1;
	}
	.loog{
		width: 120px;
		height: 28px;
        padding: 16px 20px;
        display: inline-block;
	}
	.a{
		color: gainsboro;
		padding: 10px;
		text-decoration: none;
	}
	.a:hover{
		color: white;
	}
	.header{
		width: 100%;
		height: 60px;
		background: #444;
	}
	.view{
		margin: 15px auto;
		width: 90%;
		display: flex;
		justify-content: space-between;
	}
	.view-left{
		width: 70%;
	}
	.view-rigth{
		width: 28%;
	}
	@media only screen and (max-width: 800px) {
		.view-left{
		    width: 100%;
	    }
		.view-rigth{
			display: none;
		}
	}
	@media only screen and (max-width: 500px) {
		.view{
			width: 98%;
		}
		.view-left{
		    width: 100%;
	    }
		.view-rigth{
			display: none;
		}
		.footer{
			display: none;
		}
	}
	.denglu{
		position:fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #968b8b;
		z-index: 100;
	}
	.footer{
		width: 100%;
		height: 200px;
		background: white;
	}
	.backtotop{
		width: 24px;
	    color: gray;
	    padding: 12px 0 12px 5px;
	    /*display: none;*/
	    position: fixed;
	    cursor: pointer;
	    text-align: center;
	    bottom: 190px;
	    right: 0;
	    z-index: 999;
	    background-color: #fff;
	    border-radius: 12px 0 0 12px;
	    transition: 3s linear;
	}
	
</style>