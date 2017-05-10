<template lang="html">
	<div>
		<div id="buy-header">
			<router-link to="/Cinema" class="goBack"></router-link>
			<span>{{cinemasData.length>0 && cinemasData[0].nm}}</span>
			<a class="share"><img src="../assets/share.png"></a>
		</div>
		<div class="cinemasData">
			<h3>{{cinemasData.length>0 &&cinemasData[1][0].nm}}</h3>
			<p>{{cinemasData.length>0 &&cinemasData[1][0].showCinemaNum}}分钟 
			{{cinemasData.length>0 &&cinemasData.length>0 &&cinemasData[1][0].cat}} 
			{{cinemasData.length>0 &&cinemasData[1][0].star.split(",")[0]}}</p>
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
			<div class="peopleNum">
				<input type="button" value="1人">
				<input type="button" value="2人">
				<input type="button" value="3人">
				<input type="button" value="4人">
				<input type="button" value="5人">
			</div>
			<div class="alert-five">
				一次最多选择5个座位 <span>请先选座</span>
			</div>
		</div>
		<ul class="selected-seat">
			<li class="selected">
				<p>已选座位</p>
			</li>
			<li class="buy-submit">
				<h3 class="totalPrice">{{39*ticketCode}}元</h3>
				<router-link to="/ok">确认选座</router-link>
			</li>	
		</ul>
	</div>
</template>

<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	import eventTicked from "../buy.js"

	Vue.use(VueResource)
	export default{
		data (){
			return {
				cinemasData : [],
				isShow : false,
				ticketCode :0
			}
		},
		mounted (){
			// 在这里做http数据请求
			// console.log(eventTicked.todos)
			this.cinemasData = eventTicked.todos;
			window.onload = this.checkboxClick();
			
		},
		methods : {
			checkboxClick : function(){
				var _this = this;
				$(".ticketSeat").on("click","input[type='checkbox']",function(){
					var checkboxs = $("input[type=checkbox]:checked");
					if(checkboxs.size() > 0){
						$(".recommended-seat").hide();
						$(".selected-seat").show();
					}else{
						$(".recommended-seat").show();
						$(".selected-seat").hide();
					}
					_this.ticketCode = checkboxs.size();
				});
			}
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
		button- value="人"align: center;
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
	.recommended-seat,.selected-seat{
		width: 90%;
		margin:0 auto;
		margin-bottom: 3rem;
	}
	.recommended-seat p{
		text-align: left;
		height: 3rem;
		line-height: 3rem;
	}
	.peopleNum{
		display: flex;
		justify-content: space-between;
		padding-bottom: 1.2rem;
		border-bottom: 1px solid #eee;
	}
	.peopleNum input{
		width: 17%;
		text-align: center;
		height: 2.5rem;
		line-height: 2.5rem;
		border-radius: 0.3rem;
		outline:none;
		background: #fff;
		border: 1px solid #ddd;
	}
	.alert-five,.buy-submit{
		width: 100%;
		height: 5rem;
		font-size: 1.2rem;
		color: #ababab;
		line-height: 5rem;
	}
	.alert-five span{
		display: inline-block;
		width: 57%;
		border-radius: 6px;
		height: 3.5rem;
		line-height: 3.5rem;
		background: #fcdfb3;
		color:#fff;
	}
	.selected{
		height: 2rem;
		line-height: 2rem;
		text-align: left;
		border-bottom: 1px solid #eee;
		width: 100%;
	}
	.selected-seat{
		display: none;
	}
	.buy-submit{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.buy-submit h3{
		color: #e12931;
	}
	.buy-submit a{
		width: 40%;
		text-align: center;
		height: 3.5rem;
		line-height: 3.5rem;
		border-radius:6px;
		outline:none;
		background: #fe9903;
		border: 1px solid #ddd;
		color: #fff;
	}
	.cinemasData{
		width: 90%;
		margin:0 auto;
		height: 6rem;
		line-height: 3rem;
		text-align: left;
		border-bottom: 1px solid #eee;
	}
	.cinemasData p{
		color: #6e6e6e;
	}
</style>