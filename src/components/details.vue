<template>
  <div class="details">
  	<div class="header">
			<router-link to="/" style="color: #80bd01;">主页</router-link>/
			<span style="color: #999;">详情</span>
		</div>
    <div v-html="html" class="html"></div>
    <div class="header" style="margin-top: 10px;">
			<span style="color: #999;">{{arr.length}}条回复</span>
		</div>
    <div v-for="(sint,index) in arr" class="con">
    	<div class="con-left"><img :src="sint.author.avatar_url"/></div>
    	<div class="con-right">
    		<div class="con-right-top">
    			<div>
    				   <div class="con-right-top-name">{{sint.author.loginname}}</div>
		    				<div class="con-right-top-time">{{index+1}}楼·{{sint.create_at | date}}</div>
		    				<div class="con-right-top-tag"></div>
    			</div>
    			<div class="con-right-top-zan hand"  @click="zan()">
    				<i class="el-icon-star-off" style="width: 20px;height: 20px;font-size: 20px;"></i>
    				<span style="width: 20px;height: 20px;margin-left: 5px;">{{sint.ups.length}}</span>
    			</div>
    		</div>
    		<div v-html="sint.content" class="con-right-bottom"></div>
    	</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: '',
  data () {
    return {
      html:'',
      arr:[]
    }
  },
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
  	zan(e){
  		this.$message.error('该功能还未完善')
  		var data={
  			accesstoken:1321312
  		}
//		this.$store.dispatch("postzan",data)
//		.then(function(res){
//			console.log(res)
//		})
  	}
  },
  mounted(){
  				var data=this.$router.history.current.query.id;
  				this.$store.dispatch("details",data);
					if(this.$store.getters.details.html){
							this.html=this.$store.getters.details.html;
							this.arr=this.$store.getters.details.arr;
					}else{
							var a=0;
							var out=setInterval(()=>{
									a++;
									if(this.$store.getters.details.html){
											this.html=this.$store.getters.details.html;
											this.arr=this.$store.getters.details.arr;
											console.log(this.arr)
											clearInterval(out)
									}
									if(a>5){this.$message.error('数据加载失败');clearInterval(out)};
							},1000)
					}
					
  }
}
</script>

<style scoped>
	
	.con-left{
		width: 30px;
		height: 30px;
		border-radius: 5px;
		overflow: hidden;
	}
	.con-right-top{
		height: 30px;
		padding: 3px;
		display: flex;
		justify-content: space-between;
	}
	.con-right-top>div{
		display: flex;
	}
	.con-right-top-name{
		font-size: 13px;
		color: #666;
	}
	.con-right-top-time{
		margin-left: 10px;
		font-size: 12px;
		color: #08c;
	}
	.con-right-top-zan{
		float: right;
		text-align: center;
	}
	.con-right-bottom{
		padding: 10px;
	}
	.con-right{
		width: 90%;
		word-wrap: break-word;
		text-align-last: left;
	}
	.con{
		display: flex;
		background: white;
		padding: 10px;
		border-top: 1px solid #f0f0f0;
	}
	
	.header{
		padding: 10px;
        background-color: #f6f6f6;
    	border-radius: 3px 3px 0 0;
	}

.html{
	padding: 15px;
	background: white;
}

</style>
