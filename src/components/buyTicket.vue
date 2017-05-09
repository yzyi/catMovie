<template lang="html">
	<form onsubmit="" action="">
		<div id="buy-header">
			<a href="javascript:history.go(-1)" class="goBack"></a>
			<span>dfd映</span>
			<a class="share"><img src="../assets/share.png"></a>
		</div>
		<div id="buy-ticket">
			<ul class="choose-icon">
				<li><img src="../assets/1.gif"> 可选</li>
				<li><img src="../assets/2.gif"> 不可选</li>
				<li><img src="../assets/3.gif"> 已选</li>
			</ul>
			<div class="buyTicket-seat">
				<p>4号厅(4K超清厅)银幕</p>
				<h3>银幕中央</h3>
				<div class="ticket-num">
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>6</li>
						<li>7</li>
						<li>8</li>
						<li>9</li>
						<li>10</li>
						<li>11</li>
						<li>12</li>
						<li>13</li>
					</ul>
					<div class="ticketSeat">
						<ul>
							<li v-for="i in new Array(3)">
								<input type="checkbox" v-for="n in new Array(11)">
							</li>
						</ul>
						<ul>
							<li v-for="i in new Array(10)">
								<input type="checkbox" v-for="n in new Array(12)">
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="recommended-seat">
			<p>推荐座位</p>
			<ul>
				<li>1人</li>
				<li>2人</li>
				<li>3人</li>
				<li>4人</li>
				<li>5人</li>
			</ul>
			<div>
				一次最多选择5个座位<span>请先选座</span>
			</div>
		</div>
		<ul class="selected-seat">
			<li>
				<p>已选座位</p>
				<p></p>
			</li>
			<li>
				<h3>{{39*2}}元</h3>
				<p></p>
				<input type="button" value="确认选座">
			</li>	
		</ul>
	</form>
</template>

<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	Vue.use(VueResource)
	export default{
		data (){
			return {
				bannerData : []
			}
		},
		mounted (){
			// 在这里做http数据请求
		}
	}
</script>

<style lang="css">
	*{margin:0;padding:0;}
	#buy-header{
		width: 92%;
		height: 4rem;
		line-height: 4rem;
		display: flex;
		justify-content: space-between;
		background: #fafafa;
		padding: 0 4%;
	}
	.goBack::before{
		content: "";
		width: 0.8rem;
		height: 0.8rem;
		border-top:2px solid #e2605e;
		border-left:2px solid #e2605e;
		transform: rotate(-45deg);
		display: inline-block;
		vertical-align: middle;
	}
	.share{
		width: 1.8rem;
		height: 1.8rem;
	}
	.share img{
		width: 100%;
		height: 100%;
		vertical-align: middle;
	}
	#buy-ticket{
		width: 100%;
		margin-top: 1rem;
	}
	.choose-icon{
		width: 90%;
		height: 3rem;
		margin:0 auto;
		display: flex;
		justify-content: space-around;
	}
	.choose-icon li{
		line-height: 3rem;
	}
	.choose-icon img{
		vertical-align: top;
	}
	.buyTicket-seat{
		width: 100%;
		margin-top:0.5rem;
		background: #f1f1f1;
		padding-bottom: 3rem;
	}
	.buyTicket-seat>p{
		width: 70%;
		margin:0 auto;
		height: 3.5rem;
		font-size: 1.4rem;
		background: #dcdcdc;
		border-radius: 0 0 30px 30px;
	}
	.buyTicket-seat>h3{
		height: 5rem;
		line-height:7.5rem;
		font-size: 1.4rem;
	}
	.ticket-num{
		display: flex;
		justify-content: space-around;
	}
	.ticket-num>ul{
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		background: #c0c0c0;
		border-radius: 2.0rem;
		padding:0.7rem;
	}
	.ticket-num>ul li{
		width: 100%;
		height: 2.2rem;
		line-height: 2.2rem;
		text-align: center;
		color:#fff;
		font-size: 1.4rem;
	}
	.ticket-num>ul li:nth-of-type(3){
		margin-bottom: 2.5rem;
	}
	.ticketSeat{
		display: flex;
		justify-content: space-around;
		flex-direction: column;
	}
	.ticketSeat input[type="checkbox"]{
		width: 2rem;
		height: 2rem;
	}
</style>