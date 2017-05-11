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
		<div class="mine-list-wrap">
			<ul class="mine-list">
				<li v-for="item in items">{{item.list}}<img src="../assets/more.png"></li>
			</ul>

			<ul class="mine-list">
				<li v-for="item_data in itemData">{{item_data.list}}<img src="../assets/more.png"></li>
			</ul>
		</div>
		<ul class="setting">
			<router-link to="/setting"><li v-for="item_data2 in itemData2">{{item_data2.list}}<img src="../assets/more.png"></li></router-link>
		</ul>
		<FooterComponent></FooterComponent>
	</div>
</template>
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	import FooterComponent from "./footerComponent"
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
		},
		components: {
			FooterComponent
		}
	}
</script>
<style lang="css">
	a{
		color:#fff;
	}
	.mine{
		width : 100%;
		height:100%;
		background: #f5f5f5;
		padding-bottom:4rem;
	}
	.mine-head{
		width : 100%;
		height : 10rem;
		background : red;
		display:flex;
		align-items:center;
		justify-content:center;
	}
	.mine-center{
		width: 100%;
		height:6rem;
		display:flex;
		background:white;
		padding:1rem 0;
	}
	.mine-center>.box{
		border:1px solid white;
		width : 100%;
		margin-right:1px;
	}
	.myDeal{
		width:100%;
		height:4rem;
		background:white;
		margin-top:2rem;
		line-height:4rem;
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
	.myDeal-right img{
		vertical-align:middle;
		height:2.5rem;
	}
	.myDeal_bottom{
		padding-top:1rem;
		margin-top: 1px;
		width: 100%;
		height: 6rem;
		background: white;
		display: flex;
		justify-content:space-around;
	}
	.myDeal_bottom>div>img{
		height:2rem;
	}
	.box{
		width: 25%;
		height: 100%;
		font-family: "微软雅黑";
	}
	.box>img{
		width:30%;
	}
	.mine-list-wrap{
		margin-top:1rem;
		background:#efefef;
		display:flex;
		flex-direction:column;
	}
	.mine-list{
		margin-bottom:1rem;
		background:#fff;
	}
	.mine-list li{
		padding:0 1rem;
		height:4rem;
		line-height:4rem;
		border-bottom:1px solid #efefef;
		text-align:left;
	}
	.mine-list li img{
		float:right;
		vertical-align:top;
		margin-top:1rem;
		height:2rem;
	}
	.setting{
		padding:1.5rem 1rem;
		background:#fff;
	}
	.setting>a{
		text-decoration: none;
		color: black;
		text-align:left;
	}
	.setting>a>li>img{
		height:2rem;
		vertical-align:middle;
		float:right;
		margin-top:-.5rem;
	}
</style>