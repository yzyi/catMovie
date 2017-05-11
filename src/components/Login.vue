<template lang="html">
	<div class="bd">
		<div class="login_header">
			<div class="login_header_left">登录</div>
			<div class="login_header_right">注册</div>
		</div>
		<div class="loginWay">
			<div>账号密码登录</div>
			<div>手机号快捷登录</div>
		</div>

		<div class="account_password">
			<div class="account_password_left">账号</div>
			<div class="account_password_right"><input type="text" placeholder="请输入手机号" id="account" style="outline:none"></div>
		</div>
		<hr/>
		<div class="account_password">
			<div class="account_password_left">密码</div>
			<div class="account_password_right"><input type="text" placeholder="请输入密码" id="pwd" style="outline:none"></div>
		</div>
		<hr/>
		
		<div class="btn_login">登录</div>
		<a href="" class="login_problem">登录遇到问题？</a>
		
		<div class="arrows">
			<img src="../assets/arrows_1.png">
		</div>
		<p class="other_way_p">-其他登录方式-</p>

		<div class="other">
			<div class="other_way">
				<img src="../assets/weibo.png">
				<img src="../assets/weixin.png">
				<img src="../assets/qq.png">
				<img src="../assets/baidu.png">
			</div>
			<div class="other_way_name">
				<div>微博</div>
				<div>微信</div>
				<div>QQ</div>
				<div>百度</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style lang="css">
	.bd{
		width: 100%;
		background: white;
	}
	.login_header{
		width: 100%;
		height: 12rem;
		background: red;
	}
	.login_header_left{
		float: left;
		color: white;
		line-height: 12rem;
		text-indent: 2rem;
	}
	.login_header_right{
		float: right;
		color: white;
		line-height: 12rem;
		margin-right: 2rem;
	}
	.loginWay{
		width: 100%;
		height: 12rem;
		border-bottom: 1px solid blue;
		background: white;
		display: flex;
	}
	.loginWay>div{
		width: 50%;
		height: 100%;
		line-height: 12rem;
		text-align: center;
		margin-bottom: 1px;
	}
	.account_password{
		width: 100%;
		height: 12rem;
		background: white;
		display: flex;
		margin-bottom: 1px;
	}


	.account_password_left{
		width: 15%;
		height: 100%;
		line-height: 12rem;
	}
	.account_password_right{
		width: 85%;
		height: 100%;
	}
	.account_password_right>input{
		width: 100%;
		height: 100%;
		background: white;
		border: none;
	}
	.btn_login{
		width: 90%; 
		height: 10rem;
		background: #f8938c;
		margin: 3rem auto;
		border-radius: 1.5rem;
		line-height: 10rem;
		color: white;
	}
	.login_problem{
		text-decoration: none;
		color: #999;
	}

	
	.arrows{
		margin: 0 auto;
		margin-top: 30rem;
		height: 11.3rem;
		width: 100%;
	}
	.arrows>img{
		width: 99%;
	}
	.other_way{
		margin-top: 6rem;
		width: 100%;
		display: flex;
		justify-content:space-around;
	}
	.other_way>img{
		display: block;
	}
	.other_way_name{
		margin-top: 1.5rem;
		width: 100%;
		display: flex;
		justify-content:space-around;
	}
</style>