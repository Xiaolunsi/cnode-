<template>
	<div class="hello">

		<div class="con" v-for="sint in data">
			<div class="con-img"><img :src="sint.author.avatar_url"/></div>
			<div class="con-return">
				<span style="font-size: 13px;color: #9e78c0;">{{sint.reply_count}}/</span><span style="font-size: 10px;color: #b4b4b4;">{{sint.visit_count}}</span>
			</div>
			<div class="con-title" @click="tit(sint.id)">{{sint.title}}</div>
			<div class="con-time">
				{{sint.last_reply_at | date}}
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'hello',
		data:()=>({
			data:''
		}),
		filters: {
			date: function (value) {
				var date='';
			    var datax=new Date();
			    var datay=new Date(value);
			    var dayx=datax.getDay();
			    var dayy=datay.getDay();
			    var hourx=datax.getHours();
			    var houry=datay.getHours();
			    var minx=datax.getMinutes();
			    var miny=datay.getMinutes();
			    if(dayx-dayy>0){
			    	date=dayx-dayy+"天前"
			    }else if(hourx-houry>0){
			    	date=hourx-houry+"小时前"
			    }else{
			    	date=minx-miny+"分钟前"
			    }
			    return date
			}
	    },
		methods:{
			tit(a){
				this.$router.push("/details?id="+a)
			}
		},
		mounted(){
			this.$store.dispatch("topics","dev");
		  	if(this.$store.getters.topics.data){
				this.data=this.$store.getters.topics.data;
			}else{
				var a=0;
				var out=setInterval(()=>{
					a++;
					if(this.$store.getters.topics.data){
						this.data=this.$store.getters.topics.data;
						clearInterval(out)
					}
					if(a>5){this.$message.error('数据加载失败');clearInterval(out)};
				},1000)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.con {
		height: 30px;
		display: flex;
		text-align: center;
		line-height: 30px;
		background: white;
		border-bottom: 1px solid gainsboro;
		align-items: center;
		text-overflow: ellipsis;
		justify-content: space-around;
		padding: 10px;
	}
	.con-img {
		width: 30px;
		height: 30px;
		border-radius:5px;
		overflow: hidden;
	}
	.con-return{
		width: 70px;
		text-align: center;
	}
	.con-bl {
		width: 32px;
		height: 18px;
		border-radius: 5px;
		text-align: center;
		line-height: 18px;
		font-size: 12px;
	}
	.green {
		background:#44d644;
		color: white;
	}
	.gray{
		background: ghostwhite;
		color: gray;
	}
	.con-title {
		width: 67%;
		height: 100%;
		font-size: 16px;
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.con-time {
		width: 60px;
		height: 100%;
		font-size: 12px;
		color: gray;
		float: right;
	}
	@media only screen and (max-width: 500px) {
		.con-return{
			display: none;
		}
	}
</style>