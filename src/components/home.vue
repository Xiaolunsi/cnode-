<template>
	<div class="home">
		<div class="header">
			<router-link to="/" class="a">全部</router-link>
			<router-link to="good" class="a">精华</router-link>
			<router-link to="share" class="a">分享</router-link>
			<router-link to="ask" class="a">问答</router-link>
			<router-link to="job" class="a">招聘</router-link>
			<router-link to="dev" class="a">测试</router-link>
		</div>
		
		<div>
			<router-view></router-view>
		</div>
		
	</div>
</template>

<style scoped>
   .header{
		padding: 10px;
        background-color: #f6f6f6;
    	border-radius: 3px 3px 0 0;
	}
	
	.router-link-exact-active{
		background-color: #80bd01;
        color: #fff !important;
    	padding: 3px 4px;
    	border-radius: 3px;
	}
	.a{
		text-decoration: none;
		margin: 0 10px;
        color: #80bd01;
	}
	
</style>