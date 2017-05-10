<template lang="html">
	<div class="mine">
		<div class="mine-head">
			<router-link to="/login">立即登录</router-link>
		</div>
		<div class="mine-center-top"></div>
		<div class="mine-center">
			<div class="box">
				<img src="../assets/xin.jpg" />
				<div>想看</div>
			</div>
			<div class="box">
				<img src="../assets/yan.jpg" />
				<div>看过</div>
			</div>
			<div class="box">
				<img src="../assets/yingpinglogo.jpg" />
				<div>影评</div>
			</div>
			<div class="box">
				<img src="../assets/huatilogo.jpg" />
				<div>话题</div>
			</div>
		</div>
		<div class="mine-center-top"></div>
		<div class="myDeal">
			<div class="myDeal-left">我的订单</div>
			<div class="myDeal-right">全部&nbsp;<span><img src="../assets/more.png"></span></div>
		</div>
		<div class="myDeal_bottom">
			<div><img src="../assets/weixiaofei.png"><div>未消费</div></div>
			<div><img src="../assets/daifukuan.png"><div>待付款</div></div>
			<div><img src="../assets/daipingjia.png"><div>待评价</div></div>
			<div><img src="../assets/tuikuan.png"><div>退款</div></div>
		</div>

		<ul>
			<li v-for="item in items">{{item.list}}<img src="../assets/more.png"></li>
		</ul>

		<ul>
			<li v-for="item_data in itemData">{{item_data.list}}<img src="../assets/more.png"></li>
		</ul>

		<ul class="setting">
			<router-link to="/setting"><li v-for="item_data2 in itemData2">{{item_data2.list}}<img src="../assets/more.png"></li></router-link>
		</ul>
	</div>

</template>
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	Vue.use(VueResource)
	export default{
		data (){
			return {
				items : [{
					list : "我的消息"
				},{
					list : "我的收藏"
				},{
					list : "会员中心"
				},{
					list : "我的成就"
				}],

				itemData : [{
					list : "我的钱包"
				},{
					list : "我的余额"
				},{
					list : "优惠券"
				},{
					list : "影院会员卡"
				},{
					list : "商城"
				}],

				itemData2 : [{
					list : "设置"
				}]
			}
		}
	}
</script>
<style lang="css">
	html{
		font-size : 10px;
		/*background:#f5f5f5;*/
	}
	.mine{
		width : 100%;
		height:100%;
		background: #f5f5f5;
	}
	.mine-head{
		width : 100%;
		height : 24rem;
		background : red;
		display:flex;
		align-items:center;
		justify-content:center;
		font-size:4.5rem;
	}
	.mine-center-top{
		width:100%;
		height:3rem;
		background:white;
	}
	.mine-center{
		width: 100%;
		height:15rem;
		display:flex;
		background:white;
	}
	.mine-center>.box{
		border:1px solid white;
		width : 100%;
		margin-right:1px;
	}
	
	.mine-center>.box>div{
		margin-top:2.4rem;
		font-size:4.5rem;
	}
	.myDeal{
		width:100%;
		height:12rem;
		background:white;
		margin-top:3rem;
		font-size:5.4rem;
		line-height:12rem;
		
	}
	.myDeal-left{
		float:left;
		margin-left:3rem;
	}
	.myDeal-right{
		float:right;
		margin-right:3rem;
		color:#999;
	}
	.myDeal_bottom{
		margin-top: 1px;
		width: 100%;
		height: 14rem;
		background: white;
		display: flex;
	}
	.myDeal_bottom>div{
		width: 25%;
		height: 100%;
		/*text-align: center;*/
		font-size: 3.8rem;
		font-family: "微软雅黑";
	}
	.myDeal_bottom>div>img{
		margin-top: 2.5rem;
	}

	ul{
		list-style: none;
		margin-top: 4rem;
	}
	li{
		width: 100%;
		height: 10rem;
		background: white;
		font-size: 4rem;
		line-height: 10rem;
		margin-bottom: 1px;
		text-align: left;
		text-indent: 3rem;
	}
	li>img{
		display: block;
		float: right;
		margin-right: 3rem;
		margin-top: 3rem;
	}
	.setting>a{
		text-decoration: none;
		color: black;
	}
	
	
</style>