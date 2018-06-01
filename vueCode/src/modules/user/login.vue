<template>
	<div class="wrapper">
		<div class="loginBox">
			<div class="logo round"></div>
			<flexbox>
				<flexbox-item :span="1"><div class="flex-demo"><i class="iconfont icon-user"></i></div></flexbox-item>
				<flexbox-item :span="11"><div class="flex-demo"><input placeholder="请输入用户名" class="inputStyle" type="text" /></div></flexbox-item>
			</flexbox>
			<flexbox>
				<flexbox-item :span="1"><div class="flex-demo"><i class="iconfont icon-mima"></i></div></flexbox-item>
				<flexbox-item :span="11"><div class="flex-demo"><input placeholder="请输密码" class="inputStyle" type="password" /></div></flexbox-item>
			</flexbox>
			<x-button type="primary" @click.native="loginBtn" class="loginBtn">登录</x-button>
			<div class="handle">
				<router-link to="/reg" class="cWhite">忘记密码</router-link>&nbsp;|&nbsp;<router-link to="/reg" class="cWhite">注册用户</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  methods:{
	loginBtn(){
		this.$router.push('home')
	}
  },
	mounted(){
	}
}
</script>


<style lang="less" scoped>
	.wrapper{
		width:100%;
		height:100%;
		background:url(../../assets/bg.jpg);
		background-size:100% 100%;
		overflow:hidden;
	}
	.loginBox{
		margin:0px 40px;
		i.iconfont{
			color:#fff;
			margin-top:8px;
		}
		.logo{
			width:90px;
			height:90px;
			margin:60px auto;
			margin-top:40%;
			background:#fff;
			img{
				width:100%;
				height:100%;
			}
		}
		.vux-flexbox{
			overflow:hidden;
		}
		.inputStyle{
			background:none;
			border:0px;
			border-bottom:1px solid #ccc;
			color:#fff;
			width:100%;
			font-size:14px;
			height: 30px;
			margin: 10px 0;
		}
		.inputStyle:focus{
			outline: none;
            border-color:none;
            box-shadow:0;
		}
		.loginBtn{
			margin-top:30px;
			background:#359bd6;
		}
		.handle{
			margin-top:20px;
			color:#fff;
			text-align:center;
			a{font-size:14px;}
		}
		.weui-cell:before{display:none;}
	}
</style>
